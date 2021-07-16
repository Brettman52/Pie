import React, {useContext} from 'react'
import styled from 'styled-components'
import PieContext from './PieContext'
import PieType from './PieType'

const PieSelectorContainer = styled.div `
  border: solid 10px black;
  height: 20vh;
  margin-top: 100px;
  width: 66%;
  margin-left: auto;
  margin-right: auto;
`

const PickerHeading = styled.h1 `
  text-align: center;
`
const PieGroupContainer = styled.ul `
  display: flex;
  justify-content: space-evenly;
`
export default function PiePicker() {

    const {pieData} = useContext(PieContext);
    const pies = pieData.map(({displayName}, i) => <PieType key={i} id={i} pieName={displayName}/>)

    return (
        <div>
            <PieSelectorContainer>
                <PickerHeading>Pie Picker</PickerHeading>
                <PieGroupContainer>
                    {pies}
                </PieGroupContainer>
            </PieSelectorContainer>
        </div>
    )
}
