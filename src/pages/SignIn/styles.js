import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.main`
    height: 100vh;
    display: flex;
    align-items: stretch;
    padding: 0 2rem;
`

export const Form = styled.form`
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    
    > span {
        padding: 2rem 0;
    }

    .InputWrapper {
        display: flex;
        flex-direction: column;
        padding: .8rem 0;
        width: 100%;

        > label {
            padding: 0.5rem 0;
            color: ${({ theme }) => theme.LIGHT[400]};
        }
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        background-color: ${({ theme }) => theme.DARK[700]};
        max-height: 38rem;
        min-width: 40rem;
        padding: 4rem 8.5rem;
        margin: auto 0;

        > div:first-child {
            display: none;
        }
    }
`

export const SideLogo = styled.div`
    flex: 1;
    width: 100%;
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`