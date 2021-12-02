function Todo({todo,index,remove}){
    const [changeTodo, setChangeTodo] = React.useState('')
    function handle(){
        remove(index);
    }

    const handleUpdate = (e) => {
        let newTodo = window.prompt('What would you like to change your todo to?...');
        if (newTodo == '' || newTodo == ' ' ) return;
        e.target.innerText = newTodo;
        console.log(e.target.innerText)

      }

    return <> <div onClick={(e)=> {handleUpdate(e)}} id = {index}className="todo">{todo.text}
     
     </div>
     <button onClick={handle}>Remove</button>
     </>
}