import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    padding: 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;
    }

    > main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        > section {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
            padding-bottom: 3rem;
            align-items: center;
            justify-content: center;

            @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
                justify-content: left;
                padding-left: 50px;
            }

            > span {
                border-radius: 0.4rem;
                padding: .45rem;
                background-color: ${({ theme }) => theme.DARK[1000]};
                color: ${({ theme }) => theme.LIGHT[300]};
            }
        }

        > h1 {
            width: 100%;
            text-align: center;
            @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
                text-align: left;
                font-size: 2.5rem;
                padding-left: 50px;
            }
        }

        > p {
            text-align: center;
            @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
                justify-content: left;
                text-align: left;

                font-size: 1.5rem;
                font-weight: 400;
                padding-left: 50px;
            }
        }
    }
 
    > img {
        width: 17rem;
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 25rem;
        }
    }

    > button {
        width: 162px;
    }
`