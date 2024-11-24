import type { NextApiRequest, NextApiResponse } from 'next'
import User from "@/app/lib/mongoose/models/User"
import { connectDb } from "@/app/lib/mongoose/connect"
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextApiResponse) {
  

  if (req.method === 'POST') {
  
    const { email, password } = await req.json();

    const masterUser = process.env.MASTER_USER
    const masterPassword = process.env.MASTER_PASSWORD

    if (email === masterUser && password === masterPassword) {
      return NextResponse.json({ status: 200, message: 'Login successful', accessToken: 'master' });
    }

    try {

      await connectDb()

      const user = await User.findOne({ email });

      console.log('USER:', user)
      if (!user) {
        console.log('Invalid email or password.')
        return NextResponse.json({ status: 400, message: 'Invalid email or password' });
      }

      console.log('P&UP', password, user.password)

      // const isMatch = await bcrypt.compare(password.trim(), user.password);
      const isMatch = await bcrypt.compare(password.trim(), user.password);

      console.log('M:', isMatch)

      if (!isMatch) {
        console.log('Invalid email or password')
        return NextResponse.json({ status: 400, message: 'Invalid email or password' });
      }

      console.log('Login successful')

      return NextResponse.json({ status: 200, message: 'Login successful', accessToken: user._id });

    } catch (error) {
      return NextResponse.json({ status: 500, message: (error as Error).message });
    }
  } else {
    return NextResponse.json({ status: 405, message: 'Method not allowed' });
  }
}
