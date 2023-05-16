import {Component} from 'react'

import './style.css'

class Loading extends Component {
    render() {
        return <div className="lds-hourglass"></div> 
    }
}

export default Loading;