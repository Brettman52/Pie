import './App.css';
import React, {useState} from 'react'
import PiePicker from './PiePicker';
import PieDesc from './PieDesc';
import pieData from './pieData'
import PieContext from './PieContext'

export default function App() {

    const [pieInfo, setPieInfo] = useState({pie: "", desc: ""})
    
    const setDesc = (index) => {
        setPieInfo({pie: pieData[index].displayName, desc: pieData[index].desc});
    }
    const {pie, desc} = pieInfo;

    const contextValue = {
        pieData: pieData,
        pie: pie,
        desc: desc,
        handleClick: setDesc
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
