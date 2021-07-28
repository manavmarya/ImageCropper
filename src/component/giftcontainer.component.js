import React, { Component } from "react";
import './css/gift.css';
import CongText from "./congtext.component.js";
import BlurSVG from './blurcanvas.component.js';
import Modal from "./modal.component";
import Gift from "./gift.component"

export default class GiftContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            showGift: false
        }
    }

    hideModal = () => {
        this.setState({ 
            modalOpen: false,
            showGift: true
        });
    }

    displayModal = () => {
        this.setState({ 
            modalOpen: true });
    }

    render() {
        const textToDisplay = 'Congratulations'
        return (
            <div className='gift-container'>
                <BlurSVG displayModal={this.displayModal} />
                <CongText text={textToDisplay} show={this.state.showGift} />
                <Modal show={this.state.modalOpen} handleClose={this.hideModal} />
                <Gift show={this.state.showGift} />
            </div>
        )
    }
}