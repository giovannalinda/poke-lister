import { theme } from 'config'
import styled, { keyframes } from 'styled-components'

const goBack = keyframes`
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateX(0);
  }
`

export const Navbar = styled.nav`
  width: 100%;

  img {
    margin: 20px 0 0 30px;
    width: 200px;
    height: 100px;
  }
`

export const Container = styled.div`
  background: ${theme.colors.red[700]};
  height: 550px;

  h1,
  p {
    text-align: center;
    color: ${theme.colors.white};
    padding: 20px 0 0 0;
  }

  h1 {
    font-size: 55px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    margin: 50px 0 0 0;
    animation: ${goBack} 1s infinite alternate;
    transition: 1s;

    @media (max-width: 471px) {
      transition: 1s;
      width: 200px;
      height: 200px;
    }
  }
`
