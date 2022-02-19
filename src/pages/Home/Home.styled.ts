import styled from 'styled-components'

export const Content = styled.div`
  h2 {
    margin: 60px 0 0 50px;
  }

  table {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding-top: 1rem;
    width: 100%;
    margin: 0 0 0 40px;
    max-width: 82rem;

    &::-webkit-scrollbar {
      height: 0;
    }
  }
`
