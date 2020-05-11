export default class Avatar{
    static state = null;
    size = 256;
    border = 8;
    boxSize = 50;
    bgColor = '#f5f5f5';
    color = '#333';
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
        for(let i = this.border; i < this.size; i += this.boxSize){
            for(let j = this.border; j < this.size; j += this.boxSize){
                this.renderBox(i, j);
            }
        }
    }

    renderBox(x, y){
        this.ctx.fillStyle = Math.random() > .5? this.color: this.bgColor;
        this.ctx.fillRect(x, y, this.boxSize, this.boxSize);
    }

    static init(){
        Avatar.state = new Avatar();
    }
}