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
