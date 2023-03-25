import styled from "styled-components";

interface Props {
    checked: boolean
}

export const Container = styled.div`
    width: 100%;
    background-color: #3E3E63;
    padding: 1.5rem 4rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    :last-child {
        margin-bottom: 0;
    }
`;

export const Title = styled.p<Props>`
    font-size: 1.8rem;
    font-family: 'Poppins';
    text-decoration: ${({checked}) => checked ? 'line-through' : 'none'};
`;

export const Button = styled.button`
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 2rem;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        background-color: red
    }
`;

export const Image = styled.img`
    width: 16px;
    height: 16px;
    color: green !important;
`;

export const CheckButton = styled.button<Props>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: ${({checked}) => checked ? 'green' : '#fff'};
    border: ${({checked}) => checked ? '1px solid #fff' : '#none'};
`;