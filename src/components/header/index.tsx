import React, { useState } from 'react'
import { ButtonMenu, Container, HeaderContent, IconButton, ItemMenu, ListMenu, LogoutButton, Menu, MenuOption, Title } from './styles'
import {IoLogOutOutline} from 'react-icons/io5'

const Header = () => {
    const [active, setActive] = useState(false)

    return (
        <Container>
            <HeaderContent>
                <Title>Lista de Tarefas</Title>
                {/* <Menu className={active ? 'active' : ''}>
                    <ButtonMenu onClick={() => setActive(!active)}>
                        <IconButton />
                    </ButtonMenu>
                    <ListMenu>

                        <ItemMenu>
                            <MenuOption>Home</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Sobre</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Qualificações</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Serviços</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Conhecimentos</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Projetos</MenuOption>
                        </ItemMenu>
                        <ItemMenu>
                            <MenuOption>Contato</MenuOption>
                        </ItemMenu>
                        <LogoutButton>
                            <IoLogOutOutline size={28} style={{marginRight: 5}} />
                            Sair
                        </LogoutButton>
                    </ListMenu>
                </Menu> */}

            </HeaderContent>
        </Container>
    )
}

export default Header