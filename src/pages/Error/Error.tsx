import { Link } from 'react-router-dom'
import { error } from 'assets'

import * as S from './Error.styled'

export function Error() {
  return (
    <>
      <S.Container>
        <img src={error} alt='error image' />
      </S.Container>
      <S.Content>
        <h1>The rocket team has won this time</h1>
        <Link to='/'>Return</Link>
      </S.Content>
    </>
  )
}
