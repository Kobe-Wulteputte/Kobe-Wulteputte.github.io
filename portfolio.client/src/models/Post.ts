export default interface Post {
  id: string
  sequence: number
  postTitle: string
  createdDate: Date
  shortNl: string
  shortEn: string
  tags: string[]
  thumbnail: string
  visible: boolean
}

