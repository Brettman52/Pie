import React, { Component } from 'react'
import PieContext from './PieContext'
import styled from 'styled-components'

const Pie = styled.li`
    list-style: none;
`

export default class PieType extends Component {

    static contextType = PieContext;

    render() {
        const {pieKey, id} = this.props;
        return (
            <Pie onClick={() => this.context.handleClick(pieKey, id)}>
                <b>{this.props.pieName}</b>
            </Pie>
        )
    }
}
