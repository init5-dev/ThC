'use client'

import { useEffect, useState } from 'react'
import { MDEditor } from "@/app/lib/components/CMS/MDEditor/MDEditor"
import translate from "../locales"

const EditPanel = () => {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('Hola, **mundo**!')

  useEffect(() => {
    console.log('POST:\n', post)
  }, [post])

  return (
    <div className="flex flex-col gap-4 col-span-3">
      <strong className="text-lg">Crear / editar post</strong>
      <div className="flex flex-col gap-2">
        <label>{translate('title')}</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>{translate('metadescription')}</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>{translate('content')}</label>
        <MDEditor markdown={post} onChange={(value: string) => setPost(value)} />
      </div>
      <div className="flex justify-end">
        <button className="btn btn-primary" onClick={() => { }}>{translate('save')}</button>
      </div>
    </div>
  )
}

export default EditPanel