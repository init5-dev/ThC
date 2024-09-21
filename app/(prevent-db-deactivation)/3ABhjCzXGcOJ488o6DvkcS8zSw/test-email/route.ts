import { NextResponse } from "next/server"
import sendEmail from "../actions/send-email"

export const GET = async () => {
  const response = await sendEmail('nelson.ochagavia@gmail.com', 'Prueba', 'Test - ' + (new Date()).getTime())

  return NextResponse.json(response)
}