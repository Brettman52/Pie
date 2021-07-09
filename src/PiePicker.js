import React, {Component} from 'react'
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

export default class PiePicker extends Component {

    static contextType = PieContext;

    getKey = () => {
        const keyArray = []
        for (let i = 0; i <= this.context.pieData.length - 1; i++) {
            keyArray.push(Object.keys(this.context.pieData[i]).toString())
        }
        return keyArray;
    }

    render() {
        const key = this.getKey();
        const pies = this
            .context
            .pieData
            .map((pie, i) => {
                return (<PieType key={i} id={i} pieKey={key[i]} pieName={pie[key[i]].displayName} />)
            })

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
}