'use client'

import '@mdxeditor/editor/style.css'
import './styles.css'

import type { ForwardedRef } from 'react'
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  linkDialogPlugin,
  toolbarPlugin,
  UndoRedo,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ListsToggle,
  CreateLink,
  InsertImage,
  imagePlugin
} from '@mdxeditor/editor'

async function imageUploadHandler(image: File) {
  const formData = new FormData()
  formData.append('image', image)
  // send the file to your server and return
  // the URL of the uploaded image in the response
  const response = await fetch('/uploads/new', {
    method: 'POST',
    body: formData
  })
  const json = (await response.json()) as { url: string }
  return json.url
}

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
      <MDXEditor
        className="mdeditor"
        plugins={[
          // Example Plugin Usage
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkDialogPlugin(),
          imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve('https://picsum.photos/200/300')
            },
            imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
          }),
      
          toolbarPlugin({
            toolbarClassName: 'mdx-toolbar',
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BlockTypeSelect />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <CreateLink />
                <InsertImage />
              </>
            ),
          })
        ]}
        {...props}
        ref={editorRef}
      />
  )
}