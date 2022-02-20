export type Pokemon = {
  id: number
  name: string
  url: string
}

export type Response = {
  count: number
  next: null | string
  previous: null | string
  results: Pokemon[]
}
