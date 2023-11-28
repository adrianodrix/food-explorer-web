import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
    margin: 1.8rem 0;

    > h2 {
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;

        font-size: 1.2rem;
        font-weight: 500;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 2rem;
        }
    }
`