import './App.css';
import React, {useState} from 'react'
import PiePicker from './PiePicker';
import PieDesc from './PieDesc';
import pieData from './pieData'
import PieContext from './PieContext'

export default function App() {
 
    const [pieInfo, setPieInfo] = useState({pie: "", desc: ""})
    const setDesc = (pieKey, index) => {
        const pieId = pieData[index][pieKey];
        setPieInfo({pie: pieId.displayName, desc: pieId.desc});
    }

    const contextValue = {
        pieData: pieData,
        pie: pieInfo.pie,
        desc: pieInfo.desc,
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

