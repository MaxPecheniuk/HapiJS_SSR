// @flow

export type PostTypes = {
  id: string,
  title: string,
  description: string,
  date: Date,
  comments: Array<CommentTypes>
}

export type CommentTypes = {
  id: string,
  text: string,
  author: AuthorTypes
}

export type AuthorTypes = {
  id: string,
  name: string
}
