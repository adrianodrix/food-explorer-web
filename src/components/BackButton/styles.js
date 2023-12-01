import styled from 'styled-components'

export const Back = styled.button`
    background: none;
    border: none;
    
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${({ theme }) => theme.LIGHT[100]};
    
    font-size: 1.5rem;
    text-transform: lowercase;
    font-weight: 500;
`