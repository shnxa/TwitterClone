import React from 'react'
import Button from 'react-bootstrap/Button'
import { FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'

export default function PostAddForm() {
    return (
        <div>
             <InputGroup>
            <FormControl
            placeholder = "О чем вы думаете сейчас?"/>
            <Button variant = "outline-secondary">Добавить</Button>
            </InputGroup>
        </div>
    )
}
