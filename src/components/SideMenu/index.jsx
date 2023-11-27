import { FiSearch, FiX, FiLogOut } from 'react-icons/fi'
import { PiForkKnifeBold } from "react-icons/pi";

import { Input } from "../Input";
import { Container, Search, Button } from "./styles";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    return (
        <Container data-menu-is-open={menuIsOpen}>
            <header>
                {menuIsOpen && 
                    <Button onClick={onCloseMenu}>
                        <FiX />
                    </Button>
                }
                Menu
            </header>
            <Search>
                <Input type='text' icon={FiSearch} placeholder='Search for dishes or ingredients' />
            </Search>
            <a href="#"><PiForkKnifeBold /> New Prate</a>
            <a href="#"><FiLogOut /> Log out</a>
        </Container>
    )
}