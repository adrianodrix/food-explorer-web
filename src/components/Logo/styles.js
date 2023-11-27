import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .7rem;
    padding: 1rem 0;

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.3rem;
        text-transform: lowercase;
    }
`