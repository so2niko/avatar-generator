export default class Avatar{
    static state = null;
    size = 256;
    border = 8;
    boxSize = 48;
    bgColor = '#f5f5f5';
    color = '#333333';
    canvasSelector = '.canvas-avatar';
    constructor(){
        console.log(this);
        this.canvas = document.querySelector(this.canvasSelector);
        this.ctx = this.canvas.getContext('2d');
        this.render();
    }

    render = _ =>{
        this.ctx.clearRect(0, 0, this.size, this.size);
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.size, this.size);

        // this.renderRandomImage();
        for(let i = 0; i < 3; i++){
            this.renderVerticLine(i, 4 - i);
        }
        
    }

    renderRandomImage = _ =>{
        const paddingBorder = this.size - this.boxSize;
        for(let i = this.border; i < paddingBorder; i += this.boxSize){
            for(let j = this.border; j < paddingBorder; j += this.boxSize){
                this.renderBox(i, j);
            }
        }
    }

    renderBox(x, y, color = 'random'){
        if(color == 'random'){
            color = Math.random() > .5? this.color: this.bgColor;
        }
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.boxSize, this.boxSize);
    }

    renderVerticLine = (lineN = 0, shift = 0) =>{
        const xStart = this.border + this.boxSize * lineN;
        const parallelStart = this.border + this.boxSize * shift;
        const paddingBorder = this.size - this.boxSize;
        for(let i = this.border; i < paddingBorder; i += this.boxSize){
            const color = Math.random() > .5? this.color: this.bgColor;
            this.renderBox(xStart, i, color);
            parallelStart != xStart? this.renderBox(parallelStart, i, color): null;
        }
        

    }

    static init(){
        Avatar.state = new Avatar();
    }
}