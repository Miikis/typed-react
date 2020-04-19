import React from "react"
import { Global, css } from "@emotion/core"
import { Route, Switch, Link } from "react-router-dom"

function App() {
    return (
        <>
            <Global
                styles={css`
                    *,
                    *:before,
                    *:after {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }

                    * + * {
                        margin-top: 0.8rem;
                    }

                    html {
                        font-size: 62.5%;
                    }

                    body {
                        font-size: 1.6rem;
                        font-family: "Gill Sans", "Gill Sans MT", Calibri,
                            "Trebuchet MS", sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        text-align: center;
                    }

                    nav {
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                    }

                    h1 {
                        font-weight: 100;
                    }
                `}
            />

            <h1>React App w/ TypeScript & Emotion</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/somewhere">Somewhere Else</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <h2>Home</h2>
                </Route>
                <Route path="*">
                    <h2>Page Not Found</h2>
                </Route>
            </Switch>
        </>
    )
}

export default App
