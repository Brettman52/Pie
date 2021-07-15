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


// export default function App() {
//     state = {
//         pie: "",
//         desc: ""
//     }


//     const [pieInfo, setPieInfo] = useState()
//     const setDesc = (pieKey, index) => {
//         const pieId = pieData[index][pieKey];
//         const {pie, desc} = pieInfo;
//         setPieInfo({pie: pieId.displayName, desc: pieId.desc});
//     }


//     const contextValue = {
//         pieData: pieData,
//         pie: state.pie,
//         desc: state.desc,
//         handleClick: setDesc
//     }

//     return (
//         <div>
//             <PieContext.Provider value={contextValue}>
//                     <PiePicker pieData={pieData}/>
//                     <PieDesc/>
//                 </PieContext.Provider>
//         </div>
//     )
// }

