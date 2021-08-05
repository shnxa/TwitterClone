import React from 'react'
import { FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'

import PostStatusFilter from '../PostStatusFilter'

export default function SearchPanel() {
    return (
        <div>
            <InputGroup>
            <FormControl
            placeholder = "Поиск по записям"/>
            <PostStatusFilter/>
            </InputGroup>
           
            
        </div>
    )
}

