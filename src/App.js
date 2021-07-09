import './App.css';
import React, {Component} from 'react'
import PiePicker from './PiePicker';
import PieDesc from './PieDesc';
import pieData from './pieData'
import PieContext from './PieContext'

export default class App extends Component {

    state = {
        pie: "",
        desc: ""
    }

    setDesc = (pieKey, index) => {
        const pieId = pieData[index][pieKey];

        this.setState({pie: pieId.displayName, desc: pieId.desc})
    }

    render() {
        const contextValue = {
            pieData: pieData,
            pie: this.state.pie,
            desc: this.state.desc,
            handleClick: this.setDesc
        }

        return (
            <div>
                <PieContext.Provider value={contextValue}>
                    <PiePicker pieData={pieData}/>
                    <PieDesc/>
                </PieContext.Provider>
            </div>
        )
    }
}
