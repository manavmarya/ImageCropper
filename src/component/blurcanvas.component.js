import React, { Component } from "react";
import './css/gift.css';

export default class BlurSVG extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            startX: 0,
            startY: 0,
        }
        this.canvasRef = React.createRef();
        
    }

    componentDidMount = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        canvas.addEventListener("mouseenter", this.scratchStart);
        canvas.addEventListener("mousemove", this.scratch);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.lineWidth = 40;
        ctx.lineJoin = "round";
    }

    scratchStart = (e) => {
        const { layerX, layerY } = e;
        this.setState({
            isDrawing: true,
            startX: layerX,
            startY: layerY
        });
    }

    scratch = (e) => {
            const { layerX, layerY } = e;
            const ctx = this.canvasRef.current.getContext("2d");
            const midX = window.innerWidth/2;
            const midY = window.innerHeight/2;
            const tanX = (layerY - this.state.startY)/(layerX - this.state.startX)
            const tanM = (midY - this.state.startY)/(midX - this.state.startX)
            //const lineX = (layerY - this.state.startY)**2 + (layerX - this.state.startX)**2
            //const lineM = (midY - this.state.startY)**2 + (midX - this.state.startX)**2
            if (Math.abs(tanX - tanM) < tanM/6 /*&& Math.abs(lineX - lineM) < lineM/1.5*/) {
                this.reveal()
            }
            else {
                ctx.globalCompositeOperation = "destination-out";
                ctx.beginPath();
                ctx.moveTo(this.state.startX, this.state.startY);
                ctx.lineTo(layerX, layerY);
                ctx.closePath();
                ctx.stroke();
                this.setState({
                    startX: layerX,
                    startY: layerY
                });
            }
    }
    
    reveal = () => {
        const canvas = this.canvasRef.current;
        this.props.displayModal()
        canvas.classList.add('display-none');
    }

    render() {
        return(
            <canvas ref={this.canvasRef} className='blur' id="js-canvas" ></canvas>
        )
    }
}