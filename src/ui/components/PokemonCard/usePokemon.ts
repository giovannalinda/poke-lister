import { useEffect, useState } from 'react'
import api from 'services/api'

type Props = {
  url: string
}

type Pokemon = {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

export function usePokemon({ url }: Props) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>()

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
        console.error('Ops! deu erro :( ' + err)
      })
  }, [url])

  console.log(pokemon)

  return {
    pokemon,
  }
}
