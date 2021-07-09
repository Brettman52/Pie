import React, {Component} from 'react'
import styled from 'styled-components'
import PieContext from './PieContext'

const PieSelectorContainer = styled.div `
  border: solid 10px black;
  height: 20vh;
  margin-top: 100px;
  width: 66%;
  margin-left: auto;
  margin-right: auto;
`

const DescHeading = styled.h1 `
  text-align: center;
`

const DescContainer = styled.div `
    text-align: center;
`

const DefaultMessage = styled.div `

`

export default class PieDesc extends Component {

    static contextType = PieContext;
    render() {
        return (
            <div>
                <PieSelectorContainer>
                    <DescHeading>Your Pie</DescHeading>
                    <DescContainer>
                        {!this.context.desc && 
                        <DefaultMessage>Select a pie to continue!</DefaultMessage>} 
                        {this.context.desc}
                    </DescContainer>
                </PieSelectorContainer>
            </div>
        )
    }
}
