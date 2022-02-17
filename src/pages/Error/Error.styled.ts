import { theme } from 'config'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.red[700]};
  height: 500px;

  @media (max-width: 607px) {
    height: 350px;
  }

  img {
    margin: 190px 0 0 0;
    width: 600px;
    height: 400px;
    transition: 1s;

    @media (max-width: 607px) {
      width: 320px;
      height: 220px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  h1 {
    padding: 50px 0 0 0;
    text-align: center;
  }

  a {
    background: ${theme.colors.red[700]};
    padding: 20px 100px 20px 100px;
    border-radius: 5px;
    color: ${theme.colors.neutral[100]};
    transition: 300ms;
    margin: 20px 0 0 0;

    :hover {
      padding: 25px 105px 25px 105px;
    }
  }
`
