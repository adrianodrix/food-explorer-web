import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.DARK[900]};
    color: ${({ theme }) => theme.LIGHT[500]};

    margin-bottom: .5rem;
    border-radius: .625rem;

    > input {
        height: 3.5rem;
        width: 100%;
        padding: .75rem;
        color: ${({ theme }) => theme.LIGHT[100]};
        background: transparent;
        border: none;

        &:placeholder {
            color: ${({ theme }) => theme.LIGHT[500]};
        }
    }

    > svg {
        margin-left: 1rem;
    }
`