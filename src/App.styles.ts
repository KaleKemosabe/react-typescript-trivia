// import { url } from 'inspector';
import styled, { createGlobalStyle } from 'styled-components';
import BgImage from './images/quiz-bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100vh;
    }
    body {
        background-image: url(${BgImage});
        background-size: cover;
        background-position: right;
        margin: 0;
        padding: 0 0.5rem;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #ffffff;
    }
    .score {
        color: #5f8d37;
        background-color: #ffffff;
        font-size: 2rem;
        margin: 3rem 0 0.5rem 0;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #99c259;
    }
    h1 {
        font-family: 'Pacifico', cursive;
        font-size: 3rem;
        text-align: center;
        margin: 2rem 0.5rem;
    }
    .start, .next {
        cursor: pointer;
        background: linear-gradient(120deg, #99c259, #5f8d37);
        border: none;
        border-radius: 5px;
        font-size: 1.2rem;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .start {
        width: 50vw;
        height: 4rem;
        position: absolute;
        top: 40vh;
        z-index: 100;
    }
`