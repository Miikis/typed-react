import React from "react"
import { Global, css } from "@emotion/core"

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
                    }

                    h1 {
                        font-weight: 100;
                    }
                `}
            />

            <h1>React App w/ TypeScript & Emotion</h1>
        </>
    )
}

export default App
