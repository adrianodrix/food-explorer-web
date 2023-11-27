import { Logo } from "../Logo"
import { Container } from "./styles"

export function Footer() {
    return (
        <Container>
            <Logo />
            <span>©{new Date().getFullYear()} - All rights reserved</span>
        </Container>
    )
}