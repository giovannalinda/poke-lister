import { useEffect, useState } from 'react'

import { Header } from 'ui/components/Header'
import { Footer } from 'ui/components/Footer'
import { Pokemon, Response } from 'types'

import api from 'services/api'

import * as S from './Home.styled'
import { PokemonCard } from 'ui/components/PokemonCard'

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    api
      .get<Response>('/pokemon')
      .then((response) => {
        setPokemons(response.data.results)
      })
      .catch((err) => {
        console.error('Ops! deu erro :( ' + err)
      })
  }, [])

  return (
    <>
      <Header />
      <S.Content>
        <h2>Pokémons</h2>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <PokemonCard url={pokemon.url} />
            </li>
          ))}
        </ul>
      </S.Content>
      <Footer />
    </>
  )
}

