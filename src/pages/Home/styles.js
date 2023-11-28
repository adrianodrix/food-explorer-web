import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 20rem;
    height: 100vh;
    
    overflow: auto;
    overflow: overlay; 
`

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
    margin: 2rem auto;
    padding: 1rem;

    font-family: 'Poppins', sans-serif;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 71.5rem;
    }
`

export const Banner = styled.div`
    padding: 2rem 1rem;
    border-radius: 0.2rem;
    background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    height: 8.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 16.5rem;
        margin-top: 2rem;
    }

    > section {
        margin-left: 14rem;

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
            margin-left: 32rem;
            margin-top: 60px;

            > h1 {
                font-size: 2.5rem;
            }
        
            > span {
                display: 1.5rem;
            }
        }
    }

    > img {
        position: absolute;
        width: 16rem;
        left: 0;
        top: 8.5rem;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            width: 12rem;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
            width: 32rem;
            top: 8rem;
            left: calc(100% - 71.5rem - 8rem);
        }
    }
`