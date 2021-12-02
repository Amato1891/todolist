function TodoForm({addTodo}){
  const [value, setValue] = React.useState('');
  
  const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
  return( <>
      <form onSubmit={handleSubmit}>
      <input
        type= 'text'
        className='input'
        value={value}
        placeholder='Add More Things!...'
        onChange={e => setValue(e.target.value)}
        />
         <button onClick={handleSubmit}>Add todo</button>
    </form>
    </>
  );
}