import styled from "styled-components";

export const Container = styled.header`
    background-color: #2C2C50;
    width: 100%;
    height: 8rem;
    z-index: 500;
    position: fixed;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    position: relative;
    padding: 0 2rem;
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-family: 'Poppins';
`;

export const MenuOption = styled.button`
    font-family: 'Poppins';
    font-size: 2rem;
    color: #fff;
    background: none;
    border: none;
    margin: 0 15px;
    cursor: pointer;

    :hover {
        
        transition: ease 500ms;
        transform: scale(1.2);
    }
`;

export const ButtonMenu = styled.button`
    font-size: 1.8rem;
    background-color: transparent;
    cursor: pointer;
    margin-right: 1rem;
    z-index: 600;
`;

export const IconButton = styled.span`
    border-top: .2rem solid;
    display: block;
    color: #fff;

    ::after, ::before {
        content: '';
        display: block;
        width: 3rem;
        height: .2rem;
        background-color: currentColor;
        margin-top: .5rem;
        transition: .7s;
        position: relative;
    }
`;

export const ListMenu = styled.ul`
    overflow-x: hidden;
    width: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: #2C2C50;
    position: absolute;
    top: 0px;
    left: 0rem;
    overflow-y: hidden;
    transition: .7s;
    z-index: 10;
    padding-top: 16rem;
`;

export const ItemMenu = styled.li`
    font-family: 'Poppins';
    font-size: 2rem;
    color: #fff;
    transition: all .3s;
    :hover {
        color: #3E3E63;
    }
`;

export const Menu = styled.nav`
    display: block;
    flex: 0 1 auto;
    &.active ${ListMenu} {
        width: 35rem;
    }
    &.active ${IconButton} {
        border-top-color: transparent;
    }
    &.active ${IconButton}::before {
        transform: rotate(135deg);
    }
    &.active ${IconButton}::after {
        transform: rotate(-135deg);
        top: -.7rem;
    }
`

export const LogoutButton = styled.button`
    width: 100%;
    background: transparent;
    border: none;
    height: 4rem;
    color: #fff;
    font-family: 'Poppins';
    font-size: 2rem;
    position: absolute;
    bottom: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;