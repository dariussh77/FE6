export default class List{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    this.list = document.createElement(this.props.listType);
    if(this.props.listClass){
      this.list.classList.add(...this.props.listClass);
    }
    // this.list.setAttribute('type', this.props.typeAttribute);
    // this.props.listClass && this.list.classList.add(...this.props.listClass);
    // console.log(this.props.listItems);
    this.props.listItems.forEach(listItem => {
      this.listItem = document.createElement('li');
      this.listText = document.createTextNode(listItem.text);
      this.listItem.appendChild(this.listText);
      if(this.props.listItemsClass){ // bendros klasės kiekvienam li
        this.listItem.classList.add(...this.props.listItemsClass);
      }
      if(listItem.class){ // specifinės klasės šios iteracijos li
        this.listItem.classList.add(...listItem.class);
      }
      this.list.appendChild(this.listItem);
    });

    // console.log('wholeList:',this.list);
    return this.list;
  }
}