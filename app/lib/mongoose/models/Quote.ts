import mongoose, { model, Schema } from "mongoose"

export interface QuoteDocument {
  _id: string,
  message: string,
  source: string,
  author: string
}

const QuoteSchema = new Schema<QuoteDocument>({
  message: {
    type: String,
    unique: true
  },
  source: {
    type: String,
  },
  author: {
    type: String,
    unique: true
  }
})

const Quote = mongoose.models?.Quote || model<QuoteDocument>('Quote', QuoteSchema)

export default Quote