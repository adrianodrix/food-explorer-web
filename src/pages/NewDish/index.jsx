import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Container, InputWrapper, IngredientItemWrapper, SelectCategory } from "./styles";
import { IngredientItem } from "../../components/IngredientItem";

export function NewDish() {
    return (
        <Container>
            <BackButton />
            <h1>New Plate</h1>

            <div className="row1">
                <InputWrapper>
                    <label htmlFor="imagePlate">Dish image</label>
                    <Input type="file" name='imagePlate' id='imagePlate' />
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="name">Name</label>
                    <Input type="text" name="name" id='name' placeholder="Example: Caesar salad"/>
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="category">Category</label>
                    <SelectCategory id="category" name="category">
                        <option value="dish">Dishes</option>
                        <option value="desert">Deserts</option>
                        <option value="drink">Drinks</option>
                    </SelectCategory>
                </InputWrapper>
            </div>    

            <div className="row2">
                <InputWrapper>
                    <label htmlFor="name">Ingredients</label>
                    <IngredientItemWrapper>
                        <IngredientItem value='Onion'/>
                        <IngredientItem value='Onion'/>
                        <IngredientItem 
                            isNew 
                            placeholder='New' 
                        />
                    </IngredientItemWrapper>
                </InputWrapper>

                <InputWrapper>
                    <label htmlFor="name">Price</label>
                    <Input type="text" name="price" id='price' placeholder="Example: R$ 0,00"/>
                </InputWrapper>
            </div>

            <InputWrapper>
                <label htmlFor="description">Description</label>
                <TextArea name="description" id="description" cols="30" rows="10"></TextArea>
            </InputWrapper>

            <div className="row3">
                <div />
                <Button title='Save editions' />
            </div>
        </Container>
    )
}