import styled from 'styled-components'

export const Container = styled.aside`
    grid-area: menu;
    background-color: ${({ theme }) => theme.DARK[400]};
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: calc(100vh - 4.8rem);

    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;

    top: 0;
    
    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
    
    > header {
        background-color: ${({ theme }) => theme.DARK[700]};
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 7.1rem;
        padding-left: 2rem;
    }

    > a {
        width: 100%;
        font-size: 1.3rem;
        padding: 2rem 1rem .5rem 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.DARK[1000]};
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`

export const Search = styled.div`
    padding: 2rem;
`

export const Button = styled.button`
    background-color: transparent;
    border: none;

  > svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.LIGHT[100]};
  }
`;