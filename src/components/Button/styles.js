import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.TINTS.TOMATO[100]};
    color: ${({ theme }) => theme.LIGHT[100]};

    min-height: 3.5rem;
    border: none;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.35rem;

    &:disabled {
        opacity: 0.5;
        cursor: auto;
    }
`
