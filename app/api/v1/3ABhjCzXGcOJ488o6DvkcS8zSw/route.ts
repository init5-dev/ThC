import { connectDb } from "@/app/lib/mongoose/connect"
import Quote, { QuoteDocument } from "@/app/lib/mongoose/models/Quote"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {

  await connectDb()
  
  const quoteData: QuoteDocument = await request.json()

  const quote = await Quote.create(quoteData)

  return NextResponse.json(quote)
}