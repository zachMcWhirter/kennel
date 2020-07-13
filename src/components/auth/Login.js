import React, { useState } from "react";


// This will be the component that handles user login. If a user does not login with email and password, they should not have access to the info on the app.

const Login = props => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    // Update state whenever an input field is edited
    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials };
        stateToChange[evt.target.id] = evt.target.value;
        setCredentials(stateToChange);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // For now, just store the email and password that
        // the customer enters into session storage.
        sessionStorage.setItem(
            "credentials",
            JSON.stringify(credentials)
        );
        props.history.push("/animals")
    }

    return (
        <form onSubmit={handleLogin}>
            <fieldset>
                <h3>Please sign in</h3>
                <div className="formgrid">
                    <input onChange={handleFieldChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <label htmlFor="inputEmail">Email address</label>

                    <input onChange={handleFieldChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <label htmlFor="inputPassword">Password</label>
                </div>
                <button type="submit">Sign in</button>
            </fieldset>
        </form>
    );
};

export default Login;