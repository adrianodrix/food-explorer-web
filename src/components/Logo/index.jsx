import { Container } from "./styles";
import LogoImg from '../../assets/logo.svg'

export function Logo() {
    return (
        <Container>
            <img src={LogoImg} alt="Logo da Food Explorer" />
            <h1>Food Explorer</h1>
        </Container>
    )
}