'use client'

import { useEffect, useState } from 'react'
import AuthenticationWrapper from "@/app/lib/components/AuthenticationWrapper"
import { MDEditor } from "@/app/lib/components/CMS/MDEditor/MDEditor"
import translate from "../../lib/components/CMS/PostEditor/locales"

const MarkdownEditorPage = () => {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('Hola, **mundo**!')

  useEffect(() => {
    console.log('POST:\n', post)
  }, [post])

  return <AuthenticationWrapper>
    <div className="w-full h-full flex flex-col gap-4 bg-[#111] p-6 rounded-md">
      <div className="grid grid-cols-4 gap-8 h-full">
        <div className="col-span-1  h-full">
          <div className="flex flex-col gap-4 h-full">
            <strong className="text-lg">Posts</strong>
            <div className="bg-[#222] p-2 rounded-lg overflow-auto h-full">
              <ul>
                <li>
                  <button className="btn btn-link">
                    Las cuatro nobles verdades
                  </button>
                </li>
                <li>
                  <button className="btn btn-link">
                    Noble Óctuple Sendero
                  </button>
                </li>
                <li>
                  <button className="btn btn-link">
                    Sila, samadhi y pañña
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </AuthenticationWrapper>
}

export default MarkdownEditorPage