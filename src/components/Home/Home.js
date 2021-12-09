import {
    Button,
    ButtonWrapper,
    HeroWrapper,
    Image,
    ImageText, Items, ItemsText,
    Label,
    TextWrapper,
} from "./Home.styles";
import Vase1 from "../../assets/vase1.jpg"
import Vase2 from "../../assets/vase2.jpg"
import Vase3 from "../../assets/vase3.jpg"
import VaseShop from "../../assets/hero_vases.jpg"
import {HomeItems} from "../HomeItems/HomeItems";
import {useState} from "react";
import {LogoImage, LogoText, Nav, NavItem, WrapperHead} from "../Header/Header.styles";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.png";



export function Home() {
    const [viewMoreVases, toggle] = useState(false);
    const [vases, showVases] = useState([
        {
            name: "Bowl",
            picture: Vase1,
            text: "Placing fresh flowers or dry filler arrangements in a bowl might not be your first instinct"
        },
        {
            name: "Urn",
            picture: Vase2,
            text: "Placing fresh flowers or dry filler arrangements in a bowl might not be your first instinct"
        },
        {
            name: "Placing",
            picture: Vase3,
            text: "Placing fresh flowers or dry filler arrangements in a bowl might not be your first instinct"
        }
    ]);

    function View() {
        toggle(!viewMoreVases);
        updateVases();
    }


    function updateVases() {
        if (!viewMoreVases) {
            showVases(vases.concat(vases))
        }
    }


    return (
        <div>
            <WrapperHead>
                <LogoText>Vase shop</LogoText>
                <Nav>
                    <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog" style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <LogoImage src={Logo}/>
            </WrapperHead>
            <HeroWrapper>
                <Image src={VaseShop}/>
                <TextWrapper>
                    <Label>The best vase shop</Label>
                    <ImageText>Our vases and bowls were designed to make your everyday happier and inspire your own creativity. Whether you fill a room with bouquets, put a single flower in a vase, or let our bowls and vases stand on their own. With our range, even the prices are beautiful.</ImageText>
                </TextWrapper>
            </HeroWrapper>
            <ItemsText>Types</ItemsText>
            <Items>
                {vases.map(vase => (<HomeItems key={vase.name.toString()} name={vase.name} picture={vase.picture} text={vase.text}/>))}
            </Items>
            <ButtonWrapper><Button onClick={View}>View more</Button></ButtonWrapper>
        </div>
    );
}