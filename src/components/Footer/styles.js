import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;
    height: 7.7rem;

    display:  flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    
    background-color: ${({ theme }) => theme.DARK[600]};
    
    color: ${({ theme }) => theme.LIGHT[200]};

    > span {
        font-size: .75rem;
        font-family: 'DM Sans', sans-serif;
        text-align: right;
    }

    > div {
        > h1 {
            color: ${({ theme }) => theme.LIGHT[700]};
            font-size: 1rem;
        }

        > img {
            width: 32px;
            filter: grayscale();
        }
    }
`