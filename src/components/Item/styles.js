import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    font-family: Roboto;

    width: 18rem;
    height: 28rem;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.DARK[300]};
    background: ${({ theme }) => theme.DARK[200]};

    font-style: normal;

    > img {
        width: 8rem;
        height: 8rem;
    }

    > h1 {
        font-family: Poppins;
        font-size: 1rem;
        text-align: center;
        align-items: center;
        display: flex;
        gap: .5rem;
    }

    > span {
        text-align: center;
        font-size: .9rem;
        font-weight: 400;
    }

    > p {
        color: ${({ theme }) => theme.TINTS.CAKE[200]};
        text-align: center;

        font-size: 2rem;
        font-weight: 400;

        margin: 0;
        padding: 0;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > h1 {
            font-size: 0.875rem;            
            font-weight: 500;
        }

        > span {
            display: none;
        }

        > p {
            font-size: 1rem;
        }
    }
`

export const Heart = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`