import {Image, Label, Text, TextWrapper, Wrapper, Price,  BackButton, AddButton, ButtonWrapper} from "./ItemPage.styles";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/actions";

export function ItemPage(item) {
    const dispatch = useDispatch();

    function addToCart(name, price){
        dispatch(addItem({
            name: name,
            price: price
        }))
    }

    return (
        <>
            <Wrapper>
                <Image src={item.item.image}/>
                <TextWrapper>
                    <Label>{item.item.name}</Label>
                    <Text>{item.item.text}</Text>
                    <Price>Price: {item.item.price}</Price>
                    <ButtonWrapper>
                        <BackButton onClick={() => item.item.function(null)}>Go back</BackButton>
                        <AddButton onClick={() => addToCart(item.item.name, item.item.price)}>Add to cart</AddButton>
                    </ButtonWrapper>
                </TextWrapper>
            </Wrapper>
        </>
    );
}