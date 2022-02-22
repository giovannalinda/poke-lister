import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  li {
    background: ${theme.colors.white};
    border-radius: 5px;
    padding: 5px;
    margin: 5px 0 0 10px;

    &:active {
      transform: translateY(-3px) scale(0.98);
    }
  }

  img {
    width: 130px;
    height: 130px;
    transition: 300ms;

    :hover {
      transform: translateY(-10px);
    }
  }

  h3 {
    text-align: center;
    padding: 20px;
  }

  strong {
    color: ${theme.colors.green[500]};
    padding: 10px;
  }
`
