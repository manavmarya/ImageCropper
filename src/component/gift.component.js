import React, { Component } from "react";
import './css/gift.css';
import mainImage from '../pic.jpg';
import EditImage from "./editimage.component";

export default class Gift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }
        
    }

    editImage = () => {
        this.setState({
            edit: true
        })
        
    }

    render() {
        let giftClass = ['gift']
        const showHideClassName = this.props.show ? "display-block" : "display-none";
        giftClass.push(showHideClassName);
        const showIfNotEdit = this.state.edit ? 'display-none' : "display-block";
        const showContainerIfEdit = this.state.edit ? <EditImage imgSource={mainImage} /> : '';
        return(
            <div className={giftClass.join(' ')}>
                <div className="imageContainer">
                    <img src={mainImage} />
                    <button onClick={this.editImage} className={showIfNotEdit} id='editImageButton'>
                        Edit
                    </button>
                </div>
                {showContainerIfEdit}
            </div>
        )
    }
}