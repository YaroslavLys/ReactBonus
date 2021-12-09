import {
    Wrapper,
    Image,
    Text,
    Price,
    Button,
    Counter,
    CounterWrapper,
    ButtonWrapper
} from "./CartItem.styles";
import {CloseSquareOutlined} from '@ant-design/icons'
import vase from "../../assets/vase1.jpg";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/actions";

export function CartItem(item) {
    const [vasesAmount, updateAmount] = useState(1);
    const dispatch = useDispatch();

    function removeItem(name) {
        dispatch(deleteItem({name}))
    }
    function returnImage() {
        return vase;
    }
    function decreaseByOne() {
        if (vasesAmount > 1) updateAmount(vasesAmount - 1);
    }
    function increaseByOne() {
        updateAmount(vasesAmount + 1);
    }
    return (
        <>
            <Wrapper>
                <Image src={returnImage(item.name)}/>
                <Text>{item.name}</Text>
                <CounterWrapper>
                    <ButtonWrapper>
                        <Button onClick={decreaseByOne}><div style={{fontWeight: 600, fontSize: 16}}>-</div></Button>
                        <Counter>{vasesAmount}</Counter>
                        <Button onClick={increaseByOne}><div style={{fontWeight: 600, fontSize: 16}}>+</div></Button>
                    </ButtonWrapper>
                </CounterWrapper>
                <Price>{item.price * vasesAmount}$</Price>
                <CloseSquareOutlined style={{alignSelf: "flex-start", margin: "10px"}} onClick={() => removeItem(item.name)}/>
            </Wrapper>
        </>
    );
}