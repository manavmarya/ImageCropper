import React, { Component } from "react";
import './css/gift.css';

export default class CongText extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const showHideClassName = this.props.show ? 'display-none' : 'display-block'
        return(
            <div className={showHideClassName}>
                <p className='cong-text'>{this.props.text}</p>
            </div>
        )
    }
}