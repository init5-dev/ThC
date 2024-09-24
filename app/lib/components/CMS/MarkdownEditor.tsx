'use client'

import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import markdownTutorial from '@/app/lib/mocks/contents/markdown-tutorial.json'

export default function MarkdownEditor() {
  const [value, setValue] = useState(markdownTutorial.content);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [height])


  return (
    <div>
      <MDEditor
        value={value}
        onChange={(value) => setValue(value || '')}
        preview="live"
        height={height}
      />
    </div>
  );
}