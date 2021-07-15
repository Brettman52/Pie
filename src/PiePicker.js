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

    const getKey = () => {
        const keyArray = []
        for (let i = 0; i <= pieData.length - 1; i++) {
            keyArray.push(Object.keys(pieData[i]).toString())
        }
        return keyArray;
    }

    const pieContext = useContext(PieContext);
    const {pieData} = pieContext;
    const key = getKey();
    const pies = pieData.map((pie, i) => <PieType key={i} id={i} pieKey={key[i]} pieName={pie[key[i]].displayName}/>)

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
