import styled, { createGlobalStyle } from 'styled-components';
import BgImage from './images/quiz-bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        position: relative;
        min-height: 100vh;
    }
    body {
        background-image: url(${BgImage});
        background-size: cover;
        background-position: right;
        margin: 0;
        display: flex;
        justify-content: center;
        padding-bottom: 4rem;
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
        font-size: 1.5rem;
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
        z-index: 100;
    }
    .start {
        width: 15rem;
        height: 4rem;
        position: absolute;
        top: 40vh;
    }
    .newQuestions {
        font-size: 0.8rem;
    }
`