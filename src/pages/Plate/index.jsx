import { Container, Content } from "./styles"
import { ItemCart } from "../../components/ItemCart"
import { BackButton } from "../../components/BackButton"

export function Plate() {
    return (
        <Container>
            <BackButton />
            <Content>
                <img src={`./src/assets/plate-1.png`} alt="Plate 1" />
                <main>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                    <section>
                        <span>salce</span>
                        <span>onion</span>
                        <span>bread</span>
                        <span>pepin</span>
                        <span>tomato</span>
                    </section>
                    <ItemCart />
                </main>
            </Content>
        </Container>
    )
}