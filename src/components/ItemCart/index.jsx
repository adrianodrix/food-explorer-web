import { Button } from "../Button";
import { Amount, AmountCard, Container, Minus, Plus } from "./styles";

export function ItemCart() {
    return (
        <Container>
            <AmountCard>
                <Minus>-</Minus>
                <Amount>01</Amount>
                <Plus>+</Plus>
            </AmountCard>
            <Button title='Add' />
        </Container>
    )
}