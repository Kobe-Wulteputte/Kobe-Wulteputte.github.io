export default interface Post {
  id: string
  postTitle: string
  createdDate: Date
  shortNl: string
  shortEn: string
  tags: string[]
  thumbnail: string
  visible: boolean
}

