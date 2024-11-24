'use client'

import { useState } from 'react'
import AuthenticationWrapper from "@/app/lib/components/AuthenticationWrapper"
import MdEditor from '@/app/lib/components/CMS/MdEditor'

const MarkdownEditorPage = () => {
  const [post, setPost] = useState('')

  return <AuthenticationWrapper>
    <></>
    {/* <MdEditor editable content={post} onChange={(value: string) => setPost(value)} /> */}
  </AuthenticationWrapper>
}

export default MarkdownEditorPage