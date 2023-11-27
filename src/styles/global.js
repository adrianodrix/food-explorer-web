import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 1rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
           // font-size: .875rem;
        }
    }

    body {
        background-color: ${({ theme }) => theme.DARK[400]};
        color: ${({ theme }) => theme.LIGHT[300]};

        *::-webkit-scrollbar {
            width: 1.375rem;
            height: 1.375rem;
            border-radius: 624.9375rem;
        }

        *::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        *::-webkit-scrollbar-thumb {
            width: .375rem;
            background-color: transparent;
            border-radius: 5rem;
            box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.TINTS.CAKE[100]};
            border: solid .625rem transparent;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }   
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.LIGHT[100]};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;