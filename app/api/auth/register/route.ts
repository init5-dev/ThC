import type { NextApiRequest, NextApiResponse } from 'next';
import User from '@/app/lib/mongoose/models/User';
import { connectDb } from '@/app/lib/mongoose/connect';
import { setCookie } from 'cookies-next';
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest, res: NextApiResponse) {


  if (req.method === 'POST') {
    const { email, password } = await req.json()

    console.log(email, password)

    try {
      await connectDb();

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return NextResponse.json({ status: 500, message: 'User already exists' });
      }

      // const salt = await bcrypt.genSalt(10)
      // const hashedPass = await bcrypt.hash(password.trim(), salt)

      // const newUser = new User({ email, password: hashedPass});

      const newUser = new User({ email, password})
      await newUser.save();

      return NextResponse.json({ status: 201, message: 'User registered successfully' });

    } catch (error: any) {
      return NextResponse.json({ status: 500, message: error.message });
    }
  } else {
    return NextResponse.json({ status: 405, message: 'Method not allowed' });
  }
}
