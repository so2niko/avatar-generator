import Avatar from './avatar.js';
export default class Controller{
    selectors = {
        btn     : '.btn-generate',
        inpMain : '.inp-color-main',
        inpBg  : '.inp-color-bg' 
    }

    static state = null;

    static init = _ => {
        Controller.state = new Controller();
    }

    constructor(){
        Avatar.init();
        this.ava = Avatar.state;
        this.link2InputElements();
        this.addListeners();
    }

    link2InputElements = _ =>{
        this.dom = {};
        for (const key in this.selectors) {
            if (this.selectors.hasOwnProperty(key)) {
                this.dom[key] = document.querySelector(this.selectors[key]);
            }
        }
    }

    addListeners = _ =>{
        this.dom.btn.addEventListener('click', this.handlerClickBtnGenerate);
        this.dom.inpMain.addEventListener('input', this.handleInputColor);
        this.dom.inpBg.addEventListener('input', this.handleInputColorBg);
    }

    handlerClickBtnGenerate = _ =>{
        this.ava.render();
    }

    handleInputColor = ev =>{

    }

    handleInputColorBg = ev =>{

    }
    
}