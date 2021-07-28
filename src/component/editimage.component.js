import React, { useState, useEffect } from "react";
import './css/gift.css';
import Cropper from "./cropper.component"

const EditImage = (props) => {
    const canvasRef = React.createRef();
    //const cropperRef = React.createRef();
    const [crop, isCrop] = useState(true);

    const toggleCrop = () => {
        isCrop(crop? false: true);
        console.log(crop);
    }
    
    return (
        <div className='editImageContainer'>
            <div className='editImage left' id="containerDiv">
                <Cropper crop={crop} imgSource={props.imgSource} />
            </div>
            <div className='editControls right'>
                <div className='header'>
                    {crop ? 'Crop' : ''}
                </div>
                
                <button onClick={toggleCrop}>Toggle</button>
            </div>
        </div>
    )
}

export default EditImage;