import { useState } from "react";
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { Section } from "../../components/Section"

import { Container, Content, Banner } from "./styles"
import ImgIngredientsCover from '../../assets/ingredients_cover.png'

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
        <Banner>
          <img src={ImgIngredientsCover} alt="Ingredients Cover" />
          <section>
            <h1>Unmatched flavors</h1>
            <span>Feel the care of the preparation with selected ingredients.</span>
          </section>
        </Banner>

        <Section title='Meals'>
        
        </Section>
        
      </Content>
      <Footer />
    </Container>
  )
}