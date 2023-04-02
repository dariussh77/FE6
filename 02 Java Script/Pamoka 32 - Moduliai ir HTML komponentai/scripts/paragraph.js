export default class Paragraph{
    constructor(props){
        this.props=props;
        return this.render();
    }
    render(){
        this.htmlElement=document.createElement('p');
        this.textElement=document.createTextNode(this.props.text);
        this.htmlElement.appendChild(this.textElement);
        

        if(this.props.class){
           this.htmlElement.classList.add(...this.props.class);
        }
        return this.htmlElement;
    }
};