import React from "react";
import {Route, Redirect} from "react-router-dom";

function ProtectedRoute({component: Component, isAuthenticated: isAuthenticated, logout: logout}) {
    return (
        <Route
            render={(props) => {
                if (isAuthenticated) {
                    return <Component logout={logout}/>;
                } else {
                    return (
                        <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                    );
                }
            }}
        />
    );
}

export default ProtectedRoute;