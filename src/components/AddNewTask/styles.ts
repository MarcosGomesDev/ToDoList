import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: auto;

    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const Button = styled.button`
    height: 50px;
    width: 50px;
    background: #00a000;
    border: none;
    height: 100%;
    border-radius: 150px;
    margin-left: 2rem;
    cursor: pointer;

    -webkit-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.30);
    -moz-box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.30);
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.30);
`;

export const Title = styled.p`
    color: #fff;
    font-family: 'Poppins';
    font-size: 3rem;
    margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 5rem;
    display: flex;
`;

export const Input = styled.input`
    color: #fff;
    font-family: 'Poppins';
    font-size: 1.8rem;
    background: #2C2C50;
    height: 100%;
    width: 80%;
    padding: 0 4rem;
    border-radius: 2rem;

    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;

    ::placeholder {
        color: #fff;
        opacity: 0.8;
    }

    :focus {
        box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    }
`;