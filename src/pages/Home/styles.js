import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 20rem;
    overflow-y: auto;
    height: calc(100% - 7.5rem); 
    
    margin-top: 7rem;
    margin-bottom: 5rem;
`

export const Content = styled.div`
    grid-area: content;
    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
    margin: 2rem auto;
    padding: 1rem;

    p {
        font-size: 3.2rem;
        margin-bottom: 3rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 71.5rem;
    }
`

export const Banner = styled.div`
    display: flex;
    
    padding: 2rem 1rem;
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.GRADIENTS[200]};
    height: 8.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 16.5rem;
        margin-top: 2rem;
    }

    > section {
        > h1 {
            font-size: 1.5rem;
        }
    
        > span {
            font-size: .85rem;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            > h1 {
                font-size: 1rem;
            }
            > span {
                display: none;
            }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            > h1 {
                font-size: 2.5rem;
                margin-top: 2.5rem;
            }
        
            > span {
                display: 1.5rem;
            }
        }
    }

    > img {
        position: relative;
        margin-top: -2.5rem;
        left: -2rem;
        
        width: 11.5rem;
        height: 9rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 39rem;
            height: 25rem;
            left: -70px;
            margin-top: -10.5rem;
        }
    }
`