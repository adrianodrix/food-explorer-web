import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 30%;

    background-color: ${ ({theme, $isnew}) => $isnew == 'true' ? 'transparent' : theme.LIGHT[600] };
    color: ${ ({theme }) => theme.DARK[300] };

    border: ${ ({theme, $isnew}) => $isnew == 'true' ? `1px dashed ${theme.LIGHT[600]}` : '' };

    margin-bottom: .5rem;
    border-radius: .6rem;
    padding-right: 1rem;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        padding-top: .5rem;
        color: ${ ({theme }) => theme.LIGHT[100] };
        > svg {            
            font-size: 1.2rem;
        }
    }

    .button-add {
        padding-top: .5rem;
        color: ${ ({theme }) => theme.LIGHT[500] };
        > svg {            
            font-size: 1.2rem;
        }
    }

    > input {
        height: .5rem;
        width: 100%;

        padding: .75rem;
        color: ${ ({theme }) => theme.LIGHT[100] };
        background: transparent;

        border: none;

        font-family: Roboto;
    
        &::placeholder {
            color: ${ ({theme }) => theme.LIGHT[600] };
        }
    }
`
