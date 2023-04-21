import ToDoItem from "./ToDoItem";


const ToDoList = ({toDosData, trinimoFunkcija,statusoKeitimoFunkcija}) => {
    console.log('toDosdata: ', toDosData);
    return ( 
        <>
            <section id="toDoList">
                {
                    toDosData.map((toDoElement,i)=>
                    <ToDoItem
                        key={i}
                        data={toDoElement}
                        istrinti={trinimoFunkcija}
                        keisti={statusoKeitimoFunkcija}
                    />
                )}
            </section>
        </>
     );
}
 
export default ToDoList;