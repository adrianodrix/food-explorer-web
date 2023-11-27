import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height: 8rem;
    padding: 0 1.75rem;

    background-color: ${({ theme }) => theme.DARK[700]};

    > div {
        > h1 {
            font-size: 1.3rem;
        }
        > img {
            width: 1.5rem;
        }
    }
`
export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.LIGHT[100]};
  }
`;