export type Pokemon = {
  name: string
  url: string
}

export type Result = {
  count?: number
  next?: null | string
  previous?: null | string
  results: Pokemon[]
}
