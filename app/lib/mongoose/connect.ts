import mongoose from "mongoose";

const { MONGODB_URI } = process.env;
const { MONGODB_LOCAL_URI } = process.env

interface ConnectionResult {
  connection?: mongoose.Connection;
  error?: {
    status: number;
    message: string;
  };
}

export const connectDb = async (): Promise<ConnectionResult> => {
  try {
    const uri = MONGODB_URI as string;
    
    const { connection } = await mongoose.connect(uri);

    if (connection.readyState === 1) {
      return { connection };
    } else {
      throw new Error('Failed to connect to the database');
    }
  } catch (err) {
    const error = err as Error
    console.error(error.message);

    return {
      error: {
        status: 500,
        message: error.message,
      },
    };
  }
};
