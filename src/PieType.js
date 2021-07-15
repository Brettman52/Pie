import React, {useContext} from 'react'
import PieContext from './PieContext'
import styled from 'styled-components'

const Pie = styled.li `
    list-style: none;
    cursor: pointer;
`

export default function PieType(props) {
    const pieContext = useContext(PieContext)
    const {pieKey, id, pieName} = props;

    return (
        <Pie onClick={() => pieContext.handleClick(pieKey, id)}>
            <b>{pieName}</b>
        </Pie>
    )
}
