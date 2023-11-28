import { Logo } from "../Logo"
import { Container, Content } from "./styles"

export function Footer() {
    return (
        <Container>
            <Content>
                <Logo />
                <span>©{new Date().getFullYear()} - All rights reserved</span>
            </Content>
        </Container>
    )
}