import React, { useState } from 'react'
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { Button, CheckButton, Container, Image, Title } from './styles'
import CheckIcon from '../../assets/check.svg';
import { ItemListProps } from '../../App';

interface Props {
    data: ItemListProps,
    onRemoveTask(id: number): void,
    onCheckedTask(id: number, checked: boolean): void
}

const Card: React.FC<Props> = ({data, onRemoveTask, onCheckedTask}) => {

    return (
        <Container>
            <CheckButton
                checked={data.checked}
                onClick={() => onCheckedTask(data.id, data.checked)}
            >
                { data.checked ? <Image src={CheckIcon} /> : null}
            </CheckButton>
            <Title checked={data.checked}>{data.task}</Title>
            <Button onClick={() => onRemoveTask(data.id)}>
                <FaTrashAlt size={18} />
            </Button>
        </Container>
    )
}

export default Card