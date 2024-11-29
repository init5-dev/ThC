'use client'

import { useEffect, useState } from 'react'
import AuthenticationWrapper from "@/app/lib/components/AuthenticationWrapper"
import { MDEditor } from "@/app/lib/components/CMS/MDEditor/MDEditor"
import translate from "./locales"
import Sidebar from "./components/Sidebar"
import EditPanel from "./components/EditPanel"

const MarkdownEditorPage = () => {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('Hola, **mundo**!')

  useEffect(() => {
    console.log('POST:\n', post)
  }, [post])

  return <AuthenticationWrapper>
    <div className="w-full h-full flex flex-col gap-4 bg-[#111] p-6 rounded-md">
      <div className="grid grid-cols-4 gap-8 h-full">
        <Sidebar />
        <EditPanel />
      </div>
    </div>
  </AuthenticationWrapper>
}

export default MarkdownEditorPage