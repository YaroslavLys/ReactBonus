import {
    CheckoutWrapper,
    Title,
    FormWrapper,
    ButtonForm,
    InputContainer,
    ButtonsWrapper,
} from "./Checkout.styles";
import {Formik} from "formik";
import {useHistory} from "react-router-dom";
import {Input} from "./Input";
import * as Yup from "yup";

export function Checkout() {
    let history = useHistory();
    return (
        <CheckoutWrapper>
            <Title>Checkout</Title>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .min(5, "Must be at least 5 characters")
                        .max(50, "Must be 50 characters or less")
                        .required("Must be filled"),
                    lastName: Yup.string()
                        .min(5, "Must be at least 5 characters")
                        .max(50, "Must be 50 characters or less")
                        .required("Must be filled"),
                    email: Yup.string()
                        .email("The email is invalid")
                        .required("Must be filled"),
                    phone: Yup.string()
                        .matches(
                            /^(?:\+38)?(0\d{9})$/g,
                            "The phone number is invalid"
                        )
                        .required("This field can't be empty"),
                    address: Yup.string()
                        .min(2, "Must be at least 2 characters")
                        .max(100, "Must be 100 characters or less")
                        .required("Must be filled"),
                })}
                onSubmit={() => {
                    history.push("/success");
                }}>
                {({handleSubmit}) => (
                    <FormWrapper onSubmit={handleSubmit}>
                        <InputContainer>
                            <Input title="First Name" name="firstName" type="text"/>
                            <Input title="Last Name" name="lastName" type="text"/>
                            <Input title="Email" name="email" type="email"/>
                            <Input title="Phone" name="phone" type="text"/>
                            <Input title="Address" name="address" type="text"/>
                        </InputContainer>
                        <ButtonsWrapper>
                            <ButtonForm onClick={history.goBack}>Go Back</ButtonForm>
                            <ButtonForm onClick={handleSubmit}>Continue</ButtonForm>
                        </ButtonsWrapper>
                    </FormWrapper>
                )}
            </Formik>
        </CheckoutWrapper>
    );
}