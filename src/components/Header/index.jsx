import { PiReceipt } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { FiSearch, FiLogOut } from 'react-icons/fi'

import { Logo } from "../Logo";
import { Input } from "../Input";
import { Button } from "../Button";
import { Container, ButtonBurger, ButtonLogout, Receipt, Search, Content, Sales } from "./styles";

export function Header({ onOpenMenu }) {   
    return (
        <Container>
            <Content>
                <ButtonBurger onClick={onOpenMenu}>
                    <CiMenuBurger size={24} />
                </ButtonBurger>
                <Logo />
                <Search>
                    <Input type='text' icon={FiSearch} placeholder='Search for dishes or ingredients' />
                </Search>
                <Receipt>
                    <PiReceipt size={24}/>
                    <span>23</span>
                </Receipt>
                <Sales>
                    <Button title={`Sales (${23})`}>
                        <PiReceipt size={24}/>  
                    </Button>
                </Sales>
                <ButtonLogout>
                    <FiLogOut size={32} />
                </ButtonLogout>
            </Content>
        </Container>
    )
}