import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 9.5rem;

    background-color: ${({ theme }) => theme.DARK[900]};
    color: ${({ theme }) => theme.LIGHT[100]};

    border: none;
    resize: none;

    margin-bottom: .5rem;
    border-radius: .6rem;

    padding: 1rem;

    &:placeholder {
        color: ${({ theme }) => theme.DARK[300]};
    }
`