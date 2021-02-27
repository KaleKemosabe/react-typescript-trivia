import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border: 2px solid red;
    padding: 20px;
    text-align: center;

    p {
        font-size: 1rem;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }
    button {
        cursor: pointer;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        background: ${({ correct, userClicked }) => 
            correct ? 'linear-gradient(90deg, blue, purple)' : !correct && userClicked ? 'linear-gradient(90deg, black, red)' : 'linear-gradient(90deg, yellow, pink)'
        }
    }
`