import mongoose, { model, Schema } from "mongoose"

/**
 * Este documento se actualizará automáticamente para evitar desactivación de la base de datos en plan gratuito de MongoDB
 */

export interface CRegistryDocument {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

const CRegistrySchema = new Schema<CRegistryDocument>({
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  day: {
    type: Number,
  },
  hour: {
    type: Number,
  },
  minute: {
    type: Number,
  },
  second: {
    type: Number,
  },
})

const CRegistry = mongoose.models?.CRegistry || model<CRegistryDocument>('CRegistry', CRegistrySchema)

export default CRegistry