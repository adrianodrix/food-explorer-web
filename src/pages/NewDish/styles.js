import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    padding: 1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.LIGHT[100]};

    > h1 {
        padding: 1.5rem 0;
    }

    .row1 {
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            gap: 1.5rem;

            > div:first-of-type {
                width: 60%;
            }
        }
    }

    .row2 {
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            gap: 1.5rem;

            > div:last-of-type {
                width: 40%;
            }
        }
    }

    .row3 {
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: flex;
            gap: 1.5rem;

            > div:last-of-type {
                width: 300%;
            }
        }
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    gap: 1rem;
`

export const IngredientItemWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .5rem;
    gap: 1rem;
    border-radius: .6rem;

    background-color: ${({ theme }) => theme.DARK[900]};
    color: ${({ theme }) => theme.LIGHT[100]};
`

export const SelectCategory = styled.select`
    background-color: ${({ theme }) => theme.DARK[900]};
    color: ${({ theme }) => theme.LIGHT[100]};
    
    border: 0;
    border-radius: .625rem;
    
    height: 3.5rem;
    width: 100%;
    padding: .75rem;

    display: block;
    padding-right: 1.5rem;
    cursor: pointer;
`