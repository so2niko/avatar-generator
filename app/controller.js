import Avatar from './avatar.js';
export default class Controller{
    static state = null;
    static init = _ => {
        Controller.state = new Controller();
    }

    constructor(){
        Avatar.init();
        this.ava = Avatar.state;
    }

    
}