import {GlobalWrapper, FilterSelector, LabelText, ApplyButton, FilterWrapper, HorLine} from "./Filter.styles";
import {LogoImage, LogoText, Nav, NavItem, NavWrapper, Search, WrapperHead} from "../Header/Header.styles";
import {useState} from "react";
import {SearchOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";

export function Filter(props) {
    const [name, changeName] = useState("null");
    const [order, changeOrder] = useState("0");
    const [price, changePrice] = useState("0");


    function handleName(nameSelector) {
        changeName(nameSelector.target.value);
    }

    function handleOrder(orderSelector) {
        changeOrder(orderSelector.target.value);
    }

    function handlePrice(priceSelector) {
        changePrice(priceSelector.target.value);
    }

    function updateItems() {
        const input = document.getElementById("search_input");
        props.function(name, order, price, input);
    }

    return (
        <>
            <WrapperHead>
                <LogoText>Vase shop</LogoText>
                <Nav>
                    <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><NavItem>Home</NavItem></Link>
                    <Link to="/catalog"
                          style={{textDecoration: 'none', color: 'black'}}><NavItem>Catalog</NavItem></Link>
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}><NavItem>Cart</NavItem></Link>
                </Nav>
                <NavWrapper>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Search id={"search_input"}/>
                        <SearchOutlined/>
                    </div>
                </NavWrapper>
            </WrapperHead>
            <HorLine/>
            <GlobalWrapper>
                <FilterWrapper>
                    <LabelText>Sort by:</LabelText>
                    <FilterSelector id="name" onChange={handleName}>
                        <option value="null">Choose filter</option>
                        <option value="price">Price</option>
                        <option value="name">Name</option>
                    </FilterSelector>
                    <LabelText>Order by:</LabelText>
                    <FilterSelector id="order" onChange={handleOrder}>
                        <option value="null">Choose order</option>
                        <option value="1">Ascending</option>
                        <option value="2">Descending</option>
                    </FilterSelector>
                    <LabelText>Price:</LabelText>
                    <FilterSelector id="price" onChange={handlePrice}>
                        <option value="null">Choose price</option>
                        <option value="1">&lt;=100</option>
                        <option value="2">&gt;100</option>
                    </FilterSelector>
                </FilterWrapper>
                <ApplyButton onClick={updateItems}>Apply</ApplyButton>
            </GlobalWrapper>
            <HorLine style={{marginTop: '10px'}}/>
        </>
    );
}