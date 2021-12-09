import styled from "styled-components";
import { Form } from "formik";
import { Button } from "../Cart/CartPage.styles";

export const CheckoutWrapper = styled.section`
    max-width: 1000px;
    margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 48px;
  padding-bottom: 40px;
  text-align: center;
`;

export const FormWrapper = styled(Form)`
    padding-bottom: 0;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 500px;
`;

export const Input = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: center;
   
`;

export const ButtonForm = styled(Button)`
    width: 200px;
    margin: auto;
`;