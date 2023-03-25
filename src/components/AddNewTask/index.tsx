import React from 'react'
import { Button, Container, Input, InputContainer, Title } from './styles'
import { IoAddOutline } from 'react-icons/io5';

interface Props {
    value: string,
    onAddTask(): void,
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void,
    onHandlerKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void,
}

const AddNewTask: React.FC<Props> = ({value, onAddTask, onChange, onHandlerKeyDown}) => {
    return (
        <Container>
            <Title>Criar tarefa</Title>
            <InputContainer>
                <Input
                    placeholder='ex: Ir ao mercado...'
                    value={value}
                    onChange={onChange}
                    onKeyDown={onHandlerKeyDown}
                />
                <Button onClick={onAddTask}>
                    <IoAddOutline size={34} />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default AddNewTask;