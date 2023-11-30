import { TbHeart } from "react-icons/tb";
import { Container, Heart } from "./styles";
import { ItemCart } from "../ItemCart";

export function Item({ data }) {
    return (
        <Container>

            <Heart>
                <TbHeart size={24} />
            </Heart>
               
            <img src={`./src/assets/plate-${data.id}.png`} alt="Plate 1" />
            <h1>{data.name} {data.id} &#62;</h1>
            <span>{data.description}</span>
            <p>R$ {data.price}</p>
            <ItemCart />
        </Container>
    )
}