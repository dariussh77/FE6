const ToDoItem = ({data,istrinti,keisti}) => {
    return ( 
        <>
            <div className={`toDoElement 
                ${data.completed?'completed':'notCompleted'}`}>
                <p onClick={()=>keisti(data.id)}>
                    {
                        data.completed?"Atlikta":'Neatlikta'
                    }
                </p>
                <h3>{data.title}</h3>
                <button onClick={()=>istrinti(data.id)}>Trinti</button>
            </div>
        </>
     );
}
 
export default ToDoItem;