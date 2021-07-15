import React, {useContext} from 'react'
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
export default function PieDesc() {

    const pieContext = useContext(PieContext);
    const {desc} = pieContext;

    return (
        <div>
            <PieSelectorContainer>
                <DescHeading>Your Pie</DescHeading>
                <DescContainer>
                    {!desc && <DefaultMessage>Select a pie to continue!</DefaultMessage>}
                    {desc}
                </DescContainer>
            </PieSelectorContainer>
        </div>
    )
}
