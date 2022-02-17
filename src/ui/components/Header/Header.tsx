import { logo, pokebola } from 'assets'

import * as S from './Header.styled'

export function Header() {
  return (
    <S.Container>
      <header>
        <S.Navbar>
          <img src={logo} alt='logo pokémon' />
        </S.Navbar>
      </header>
      <h1>Who is that Pokémon?</h1>
      <p>The perfect guide for you to find your favorite Pokémon</p>
      <S.Content>
        <img src={pokebola} alt='pokébola' />
      </S.Content>
    </S.Container>
  )
}
