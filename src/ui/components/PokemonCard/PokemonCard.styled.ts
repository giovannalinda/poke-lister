import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  li {
    background: ${theme.colors.white};
    margin: 10px;
    border-radius: 5px;
    padding: 5px;

    &:active {
      transform: translateY(-3px) scale(0.98);
    }
  }

  img {
    width: 200px;
    height: 200px;
    transition: 300ms;

    :hover {
      transform: translateY(-10px);
    }
  }

  h3 {
    text-align: center;
    padding: 20px;
  }

  span {
    margin: 0 0 0 10px;
    color: ${theme.colors.red[700]};
  }
`
