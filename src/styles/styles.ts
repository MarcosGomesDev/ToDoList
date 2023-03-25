import styled from "styled-components";

export const Container = styled.section`
    background-color: #414167;
    padding: 18rem 0 11rem 0;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #2C2C50;
    border-radius: 1rem;
    width: 50%;
    padding: 4rem 4rem;
    margin-top: 6rem !important;
    margin: auto;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
        width: 90%;
    }
`;