import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  const date = new Date()
  const data = await request.json()

  return NextResponse.json({time: date.toTimeString(), data})
}