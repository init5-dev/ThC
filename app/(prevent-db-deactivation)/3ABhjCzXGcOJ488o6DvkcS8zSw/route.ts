import { connectDb } from "@/app/lib/mongoose/connect"
import { NextResponse } from "next/server"
import sendEmail from "./actions/send-email"
import CRegistry from "@/app/lib/mongoose/models/db-deactivation-prevention/CRegistry"
import clearRegistries from "./actions/clear-registries"

const EMAIL_USER = process.env.EMAIL_USER || 'nelson.ochagavia@gmail.com'

/**
 * Añade un nuevo registro a cRegistry para prevenir la desactivación de la base de datos
 * de MongoDB en plan gratuito.
 *
 * @async
 * @returns {Promise<NextResponse>}
 */

export const GET = async (): Promise<NextResponse> => {

  try {
    const { connection, error } = await connectDb()

    if (error) throw error

    if (connection) {
      const date = new Date()

      await clearRegistries()

      const cRegistry = new CRegistry({
        month: date.getMonth() + 1, 
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      })

      await cRegistry.save()

      return NextResponse.json({
        status: 200,
        message: 'cRegistry updated successfully!'
      })
    } else {
      throw new Error('Network error')
    }
  } catch (err) {
    const error = err as Error

    console.error('Database connection error:', error.message)

    const response = await sendEmail(EMAIL_USER, 'Error de ejecución en Preventer', JSON.stringify(error, null, 2))

    if (response.status === 'OK') {
      return NextResponse.json({
        status: 500,
        message: 'ERROR: Email no sent on db query error!'
      })
    }

    return NextResponse.json({
      status: 500,
      message: error.message
    })
  } 
}