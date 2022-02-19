import { useEffect, useState } from 'react'

import api from 'services/api'

import * as S from './PokemonCard.styled'

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

export function PokemonCard({ url }: Props) {
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

  if (!pokemon) {
    return <strong>Loading...</strong>
  }

  return (
    <S.Container>
      <tr>
        <td>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <span>{pokemon.id}</span>
          <h3>{pokemon.name}</h3>
        </td>
      </tr>
    </S.Container>
  )
}
