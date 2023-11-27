import { useState } from "react";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"

import { Container, Content } from "./styles"

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <Container>
      <Header 
        onOpenMenu={() => setMenuIsOpen(true)} 
      />
      
      <SideMenu  
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      
      <Content>
        <h1>Main</h1>
      </Content>
      <Footer />
    </Container>
  )
}