import { useEffect, useState } from 'react'

import { Header } from 'ui/components/Header'
import { Result } from 'types'

import api from 'services/api'

import * as S from './Home.styled'

export function Home() {
  const [pokemons, setPokemons] = useState<Result[]>([])

  useEffect(() => {
    api
      .get<Result[]>('/pokemon')
      .then((response) => {
        setPokemons(
          response.data.map((pokemon) => ({
            results: pokemon.results.slice(0, 150),
          })),
        )
      })
      .catch((err) => {
        console.error('deu erro ' + err)
      })
  }, [])

  console.log(pokemons)

  return (
    <>
      <Header />
      <S.Content>
        <h2>Pokémons</h2>
      </S.Content>
    </>
  )
}
