import styled from 'styled-components'

export const Content = styled.div`
  h2 {
    margin: 150px 0 0 50px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    text-align: center;
    justify-content: center;
    margin: 0 0 20px 0;
    grid-row-gap: 10px;
  }
`
