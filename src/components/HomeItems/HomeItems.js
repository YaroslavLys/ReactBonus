import {Image, Label, Text, TextWrapper, ItemWrapper} from './HomeItems.styles'


export function HomeItems({name, picture, text}) {
    return (
        <ItemWrapper>
            <Image src={picture}/>
            <TextWrapper>
                <Label>{name}</Label>
                <Text>{text}</Text>
            </TextWrapper>
        </ItemWrapper>
    );
}


