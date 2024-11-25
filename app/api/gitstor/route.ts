import { NextRequest, NextResponse } from "next/server"
import GitFile from "./lib/gitfile"
import handleError from "./lib/handle-error"

export const POST = async (request: NextRequest) => {
  try {
    const { path } = await request.json()

    const file = new GitFile({
      auth: process.env.PUBLIC_GITSTOR_AUTH || '',
      owner: process.env.PUBLIC_GITSTOR_OWNER || '',
      repo: process.env.PUBLIC_GITSTOR_REPO || '',
      author: process.env.PUBLIC_GITSTOR_AUTHOR || '',
      email: process.env.PUBLIC_GITSTOR_EMAIL || '',
      apiVersion: process.env.PUBLIC_GITSTOR_API_VERSION || ''
    })

    const response = await file.read(path)

    return NextResponse.json(response)
  } catch (error) {
    return handleError(error)
  }
}

export const PUT = async (req: NextRequest) => {
  try {
    const { path, content } = await req.json()

    const file = new GitFile({
      auth: process.env.PUBLIC_GITSTOR_AUTH || '',
      owner: process.env.PUBLIC_GITSTOR_OWNER || '',
      repo: process.env.PUBLIC_GITSTOR_REPO || '',
      author: process.env.PUBLIC_GITSTOR_AUTHOR || '',
      email: process.env.PUBLIC_GITSTOR_EMAIL || '',
      apiVersion: process.env.PUBLIC_GITSTOR_API_VERSION || ''
    })

    const response = await file.createOrUpdate(path, content)

    return NextResponse.json(response)

  } catch (error) {
    return handleError(error)
  }
}

export const DELETE = async (request: NextRequest) => {
  try {
    const { path } = await request.json()

    const file = new GitFile({
      auth: process.env.PUBLIC_GITSTOR_AUTH || '',
      owner: process.env.PUBLIC_GITSTOR_OWNER || '',
      repo: process.env.PUBLIC_GITSTOR_REPO || '',
      author: process.env.PUBLIC_GIGITSTOR_AUTHTSTOR_AUTHOR || '',
      email: process.env.PUBLIC_GITSTOR_EMAIL || '',
      apiVersion: process.env.PUBLIC_GITSTOR_API_VERSION || ''
    })

    const response = await file.delete(path)

    return NextResponse.json(response)
  } catch (error) {
    return handleError(error)
  }
}
