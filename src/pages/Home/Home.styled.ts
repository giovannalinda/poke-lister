import styled from 'styled-components'

export const Content = styled.div`
  h2 {
    margin: 150px 0 0 50px;
  }

  table {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin: 70px 0 0 40px;
    max-width: 120rem;

    &::-webkit-scrollbar {
      height: 0;
    }
  }
`
