export interface IPost {
  title: string
  metadescription: string
  content: string
}

export interface IPostEditor {
  posts: IPost[],
  current: IPost
}

export interface IState {
  state: IPostEditor,
  setState: (state: IPostEditor) => void
}