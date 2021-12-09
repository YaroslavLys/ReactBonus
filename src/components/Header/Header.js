import {LogoText, NavItem, WrapperHead, Nav, LogoImage, NavWrapper, Search} from './Header.styles'
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom";


export function Header() {
    return (
        <WrapperHead>
            <LogoText>Vase shop</LogoText>
            <Nav>
                <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
            </Nav>
            <LogoImage src={Logo}/>
        </WrapperHead>
    );
}


