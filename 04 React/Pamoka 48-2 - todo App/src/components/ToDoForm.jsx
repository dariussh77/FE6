const ToDoForm = ({taskInput, changeTaskInput, tasks, changeTasks}) => {
    const formSubmitFunction =e=>{
        e.preventDefault();
        console.log('taskInput: ', taskInput);
        changeTasks([...tasks,
            {id: Date.now(), completed:false, title:taskInput}
        ]);
        changeTaskInput('');
    }
    return ( 
        <>
            <section>
                <h1>Your tasks</h1>
                <form onSubmit={formSubmitFunction}>
                    <input 
                    type="text" 
                    value={taskInput} 
                    placeholder="Naujastask'as" 
                    onChange={e=>changeTaskInput(e.target.value)}
                    />
                    <input type="submit" value='Add' />
                </form>
            </section>
        </>
     );
}
 
export default ToDoForm;