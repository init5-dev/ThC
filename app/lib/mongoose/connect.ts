import mongoose from "mongoose"

const {MONGODB_URI} = process.env
// const { MONGODB_LOCAL_URI } = process.env

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI as string)
    // const { connection } = await mongoose.connect(MONGODB_LOCAL_URI as string)

    if (connection.readyState === 1) {
      return Promise.resolve(true)
    }
  } catch (error) {
    console.error((error as Error).message)
    return Promise.reject(error)
  }
}