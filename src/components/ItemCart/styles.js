import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;
    font-size: 2rem;
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        font-size: 1.5rem;
    }
`

export const AmountCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;

    > button {
        height: 24px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: .8rem;
        align-items: center;

        > button {
            width: 92px;
        }
    }
`

export const Plus = styled.div`
    
`

export const Minus = styled.div`
    
`

export const Amount = styled.div`
    
`

