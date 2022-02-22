import { usePokemon } from './usePokemon'

import * as S from './PokemonCard.styled'

type Props = {
  url: string
}

export function PokemonCard({ url }: Props) {
  const { pokemon } = usePokemon({ url })

  if (!pokemon) {
    return <strong>Loading...</strong>
  }

  return (
    <S.Container>
      <li>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </li>
    </S.Container>
  )
}
