import {Button, ButtonWrapper, ItemsWrapper, Label, Wrapper} from "./CartPage.styles";
import {useSelector} from "react-redux";
import {CartItem} from "../CartItem/CartItem";
import {Link, useHistory} from "react-router-dom";
import {LogoImage, LogoText, Nav, NavItem, WrapperHead} from "../Header/Header.styles";
import Logo from "../../assets/logo.png";

export function CartPage() {
    let history = useHistory();
    const items = useSelector((state) => state.items);

    return (<>
            <WrapperHead>
                <LogoText>Vase shop</LogoText>
                <Nav>
                    <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog"
                          style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <LogoImage src={Logo}/>
            </WrapperHead>
            <Wrapper>
                <Label>Shopping cart</Label>
                <ItemsWrapper>
                    {items.map(item => (
                        <CartItem key={item.name} name={item.name} price={item.price} vaseAmount={item.vaseAmount}/>))}
                </ItemsWrapper>
                <ButtonWrapper>
                    <Button onClick={history.goBack}>Back to Catalog</Button>
                    <Button onClick={() => history.push("/checkout")}>Continue</Button>
                </ButtonWrapper>
            </Wrapper>
        </>
    );
}