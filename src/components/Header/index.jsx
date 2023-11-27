import { PiReceipt } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";

import { Logo } from "../Logo";
import { Container, Button } from "./styles";

export function Header({ onOpenMenu }) {
    
    return (
        <Container>
            <Button onClick={onOpenMenu}>
                <CiMenuBurger size={24} />
            </Button>
            <Logo />
            <PiReceipt size={24}/>
        </Container>
    )
}