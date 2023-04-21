import { useEffect } from "react";
const Heading = (props) => {
    useEffect(()=>{
            console.log('props: ', props);
    });
    const Tag=`h${props.size}`
    return ( 
        <>
            <Tag>{props.text}</Tag>
        </>
        
     );
}
 
export default Heading;