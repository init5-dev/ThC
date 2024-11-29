import { createContext, useContext, ReactNode, useState } from "react";
import { IPostEditor, IState } from "./types";

const initialValue: IPostEditor = {
  posts: [],
  current: {
    title: '',
    metadescription: '',
    content: ''
  }
}

export const PostEditorContext = createContext<IState | undefined>(undefined)

export const usePostEditor = () => useContext(PostEditorContext)

const PostEditorProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<IPostEditor>(initialValue)

  return (
    <PostEditorContext.Provider value={{ state, setState }}>
      {children}
    </PostEditorContext.Provider>
  )
}

export default PostEditorProvider