import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 992px;
    background: #ffffff;
    border: 1px solid #99c259;
    border-radius: 5px;
    padding: 1.2rem;
    text-align: center;

    p {
        font-size: 1.2rem;
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
        margin: .2rem 0;
        width: 100%;
        height: 2.5rem;
        background: ${({ correct, userClicked }) => 
            correct ? 'linear-gradient(90deg, #99c259, #5f8d37)' 
            : !correct && userClicked ? 'linear-gradient(90deg, rgba(247,30,30,1), rgba(255,0,0,1))' 
            : 'linear-gradient(90deg, white)'
        }
    }
`