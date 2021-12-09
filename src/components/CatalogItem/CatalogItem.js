import {Image, Wrapper, Label, SmallText, TextWrapper, Button} from './CatalogItem.styles'



export function CatalogItem(props) {

    return (
        <Wrapper>
            <Image src={props.image}/>
            <TextWrapper>
                <Label>{props.name}</Label>
                <SmallText>Price: {props.price}$</SmallText>
            </TextWrapper>
            <Button onClick={() => props.function(props)}>View more</Button>
        </Wrapper>
    );
}