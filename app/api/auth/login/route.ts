import type { NextApiRequest, NextApiResponse } from 'next'
import User from "@/app/lib/mongoose/models/User"
import { connectDb } from "@/app/lib/mongoose/connect"
import bcrypt from 'bcrypt'
import { setCookie } from 'cookies-next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDb()

  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      setCookie('session', user._id, { req, res, maxAge: 60 * 60 * 24, httpOnly: true });

      return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
