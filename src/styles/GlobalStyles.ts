import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        list-style: none;
        text-decoration: none;
        color: #fff;
    }

    body {
        background-color: #414167;
        width: 100%;
        height: 100%;
    }


    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    @media (max-width: 430px) {
        html {
            font-size: 60%;
        }
    }
`;