import React, {useContext} from 'react'
import PieContext from './PieContext'
import styled from 'styled-components'

const Pie = styled.li `
    list-style: none;
    cursor: pointer;
`
export default function PieType(props) {

    const {handleClick} = useContext(PieContext)
    const {id, pieName} = props;

    return (
        <Pie onClick={() => handleClick(id)}>
            <b>{pieName}</b>
        </Pie>
    )
}
