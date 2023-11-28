import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    padding: 0 1.75rem;
    background-color: ${({ theme }) => theme.DARK[700]};    
`

export const Content = styled.div`
    height: 7.1rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    > div {
        > h1 {
            font-size: 1.5rem;
        }
        > img {
            width: 1.5rem;
        }
    }

    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        max-width: 71.5rem;
    }
`

export const ButtonBurger = styled.button`
    background-color: transparent;
    border: none;

    > svg {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.LIGHT[100]};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const ButtonLogout = styled.button`
    background-color: transparent;
    border: none;
    display: none;

    > svg {
        font-size: 1.75rem;
        color: ${({ theme }) => theme.LIGHT[100]};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
`;

export const Receipt = styled.div`
    display: flex;

    > span {
        background-color: ${({ theme }) => theme.TINTS.TOMATO[100]};
        color: ${({ theme }) => theme.LIGHT[100]};
        border-radius: 50%;
        font-size: .8rem;
        text-align: right;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 2.5rem;
        right: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`

export const Search = styled.div`
    padding: 2rem 0;
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
        width: 50%;
    }
`

export const Sales = styled.div`
    width: 20%;
    margin-top: -1.6rem;
    display: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
`
