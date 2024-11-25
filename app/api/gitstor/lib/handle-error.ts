import { NextResponse } from "next/server"

const handleError = (error: unknown) => {
  if (error !== null) {
    if (typeof error === 'object') {
      if ('status' in error || 'statusText' in error) {
        const status = (error as {status: string}).status || 500
        const statusText = (error as {statusText: string}).statusText || 'Unknown'

        return NextResponse.json('Error', { status, statusText } as ResponseInit)
      } else if ('message' in error) {
        return NextResponse.json({message: error.message}, { status: 500, statusText: 'Unknown' })
      }
    } else {
      return NextResponse.json({message: 'Unknown error'}, { status: 500, statusText: 'Unknown' } as ResponseInit)
    }
  }
}

export default handleError