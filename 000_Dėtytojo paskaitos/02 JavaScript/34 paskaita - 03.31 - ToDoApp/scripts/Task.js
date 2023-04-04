export default class Task{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    this.listItem = document.createElement('li');
    this.heading = document.createElement('h3');
    this.headingText = document.createTextNode(this.props.title);
    this.heading.appendChild(this.headingText);
    this.listItem.appendChild(this.heading);
    this.icon = document.createElement('i');
    this.icon.classList.add('bi', 'bi-trash-fill');
    this.listItem.appendChild(this.icon);

    this.doUndo();
    this.delete();

    return this.listItem;
  }
  delete(){
    this.icon.addEventListener('click', () => {
      this.listItem.remove();
    });
  }
  doUndo(){
    this.listItem.addEventListener('click', () => {
      // this.listItem.classList.toggle('done');
      if(this.listItem.classList.contains('done')){
        this.listItem.classList.remove('done');
      } else if(!this.listItem.classList.contains('done')){
        this.listItem.classList.add('done');
      }
    });
  }
}