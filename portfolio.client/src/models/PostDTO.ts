export default interface PostDTO {
  id: number
  postTitle: string
  createdDate: Date
  short: string
  blogType: string //TODO: enum?
  thumbnail: string
}
