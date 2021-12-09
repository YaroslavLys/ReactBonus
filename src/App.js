import React, {useState} from "react";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./components/Home/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {CartPage} from "./components/Cart/CartPage";
import {SuccessPage} from "./components/SuccessPage/SuccessPage";
import {Checkout} from "./components/Checkout/Checkout";
import ProtectedRoute from "./ProtectedRoute";
import * as Yup from "yup";
import {
    ButtonsWrapper,
    ButtonForm, CheckoutWrapper,
    FormWrapper,
    InputContainer,
    Title
} from "./components/Checkout/Checkout.styles";
import {Formik} from "formik";
import {Input} from "./components/Checkout/Input";


const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {

        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>

                        <Route path="/" exact>
                            {isAuthenticated ? (
                                <Redirect to="/home"/>
                            ) : (
                                <CheckoutWrapper>
                                    <Title>Login</Title>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            password: "",
                                        }}
                                        validationSchema={Yup.object().shape({
                                            name: Yup.string()
                                                .min(5, "Name must be at least 5 characters")
                                                .max(30, "Must be 30 characters or less")
                                                .required("Must be filled"),
                                            password: Yup.string()
                                                .min(6, "Password is too short")
                                                .max(50, "Password is too long")
                                                .required("Must be filled"),
                                        })}
                                    >
                                        {({handleSubmit}) => (
                                            <FormWrapper onSubmit={handleSubmit}>
                                                <InputContainer>
                                                    <Input title="Name" name="name" type="text"/>
                                                    <Input title="Password" name="password" type="text"/>
                                                </InputContainer>
                                                <ButtonsWrapper>
                                                    <ButtonForm onClick={login}>Log in</ButtonForm>
                                                </ButtonsWrapper>
                                            </FormWrapper>
                                        )}
                                    </Formik>
                                </CheckoutWrapper>
                            )}
                        </Route>
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            path="/home"
                            logout={logout}
                            component={Home}
                        />
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            path="/catalog"
                            logout={logout}
                            component={Catalog}
                        />
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            path="/cart"
                            logout={logout}
                            component={CartPage}
                        />
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            path="/checkout"
                            logout={logout}
                            component={Checkout}
                        />
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            path="/success"
                            logout={logout}
                            component={SuccessPage}
                        />
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
