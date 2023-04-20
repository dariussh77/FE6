const Image = (props) => {
    
    return (
      <img
        src={props.source}
        alt={props.alternativeText}
        className={props.CSS_class}
      />
    )
  }
   
  export default Image;