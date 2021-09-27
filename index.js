function App(){
  const [todos,setTodos] = React.useState([
    {
      text: 'Learn react',
      isCompleted: false
    },
    {
      text: 'Become a pro',
      isCompleted: false
    },
    {
      text: 'Build awesome stuff',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted: false}]
        setTodos(newTodos);
  }
 
  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }
  return(<>
    <div className ='app'>
      <div className ='todo-list'>
      {todos.map((todo,i) => 
        <Todo index={i} todo={todo} key={i}remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
        <br/>
        <div>You have {todos.length} things to be completed, you better get a move on!</div>
          </div>
        </div>
        </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)