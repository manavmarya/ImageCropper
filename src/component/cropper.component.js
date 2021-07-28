import React, { useState, useEffect } from "react";
import './css/gift.css';

const Cropper = (props) => {
    const canvasRef = React.createRef();
    const [isActive, setStatus] = useState(true) 
    const [IsStartCrop, startEndCrop] = useState(false);
    const [firstPointers, changeFirstPointers] = useState({'x':0, 'y':0});
    const [secondPointers, changeSecondPointers] = useState({'x':0, 'y':0});
    const showHideClassName = isActive ? 'display-block' : 'display-none';
    

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let img = document.createElement('img');
        img.src = props.imgSource;
        let imgWidthPrev = img.width;
        let imgHeightPrev = img.height;
        setStatus(props.crop);
        if (!IsStartCrop || !isActive) {
            canvas.width = imgWidthPrev;
            canvas.height = imgHeightPrev;
            startEndCrop(false);
            ctx.drawImage(img, 0, 0);
        }
        else {
            const imgWidth = Math.abs(secondPointers['x'] - firstPointers['x']);
            const imgHeight = Math.abs(secondPointers['y'] - firstPointers['y']);
            let cropImg = ctx.getImageData(Math.min(firstPointers['x'], secondPointers['x']), Math.min(firstPointers['x'], secondPointers['x']), Math.max(firstPointers['x'], secondPointers['x']), Math.max(firstPointers['y'], secondPointers['y']));
            ctx.clearRect(0, 0, imgWidthPrev, imgHeightPrev);
            canvas.width = imgWidth;
            canvas.height = imgHeight;
            ctx.putImageData(cropImg, 0, 0);
            
        }
        
    })

    const startCrop = (e) => {
        const canvas = canvasRef.current;
        let layerX= e.pageX;
        let layerY = e.pageY;
        let rect = canvas.getBoundingClientRect();
        let firstX = layerX - rect.left;
        let firstY = layerY - rect.top;
        changeFirstPointers({'x':firstX, 'y':firstY});
        console.log(firstX,'MouseDown', firstY);
        console.log(firstPointers);
    }

    const endCrop = (e) => {
        const canvas = canvasRef.current;
        let layerX= e.pageX;
        let layerY = e.pageY;
        let rect = canvas.getBoundingClientRect();
        let firstX = layerX - rect.left;
        let firstY = layerY - rect.top;
        console.log(firstX,'MouseUp', firstY);
        changeSecondPointers({'x':firstX, 'y':firstY});
        startEndCrop(true);
        console.log(secondPointers);
    }
    
    
    
    return (
        <canvas className={showHideClassName} ref={canvasRef} onMouseDown={startCrop} onMouseUp={endCrop} ></canvas>
    )
}

export default Cropper;