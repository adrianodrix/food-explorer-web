import { useState } from "react"

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { SideMenu } from "../../components/SideMenu"
import { Section } from "../../components/Section"
import { Item } from "../../components/Item"

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
          <Splide 
            aria-label="Meals"
            options={{
              autoWidth: true,
              autoHeight: true,
              gap: '3rem',
              type: 'loop',
              perPage: 10,
              pagination: false,
              mediaQuery: 'max',
              breakpoints: {
                765: {
                  arrows: false,
                  perPage: 1,
                },
              }
            }}
          >
            {
                Array(11)
                  .fill({
                    name: 'Torradas de Parma',
                    description: 'lorem lorem lorem lorem lorem',
                    price: (Math.random(0, 100) * 100).toFixed(2)
                  })
                  .map((item, index) => (
                  <SplideSlide key={index}>
                    <Item data={ {
                      ...item,
                      id: index
                    } } 
                    />
                  </SplideSlide>))
              }   
          </Splide>
        </Section>


        <Section title='Deserts'>     
          <Splide 
            aria-label="Meals"
            options={{
              autoWidth: true,
              autoHeight: true,
              gap: '3rem',
              type: 'loop',
              perPage: 10,
              pagination: false,
              mediaQuery: 'max',
              breakpoints: {
                765: {
                  arrows: false,
                  perPage: 1,
                },
              }
            }}
          >
            {
                Array(11)
                  .fill({
                    name: 'Torradas de Parma',
                    description: 'lorem lorem lorem lorem lorem',
                    price: (Math.random(0, 100) * 100).toFixed(2)
                  })
                  .map((item, index) => (
                  <SplideSlide key={index}>
                    <Item data={ {
                      ...item,
                      id: index
                    } } 
                    />
                  </SplideSlide>))
              }   
          </Splide>
        </Section>
      </Content>
      <Footer />
    </Container>
  )
}