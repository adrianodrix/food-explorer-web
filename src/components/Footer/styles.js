import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.DARK[600]};
    color: ${({ theme }) => theme.LIGHT[200]};
`

export const Content = styled.div`
    display:  flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    margin: 0 auto;
    
    > span {
        font-size: .75rem;
        font-family: 'DM Sans', sans-serif;
        text-align: right;
    }

    > div {
        > h1 {
            color: ${({ theme }) => theme.LIGHT[700]};
            font-size: .95rem;
        }

        > img {
            width: 1rem;
            filter: grayscale();
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 71.5rem;
    }
`