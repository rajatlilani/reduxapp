import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function AddTodo() {
  const navigate = useNavigate();
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setInput([...input, input]);
      dispatch(addTodo(input))
      setInput('');

    }
  }

  return (
    <form onSubmit={addTodoHandler}>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="submit">test</button>

      <button onClick={() => navigate("/test")}>Test</button>
      <button onClick={() => navigate("/todo")}>Todo</button>

    </form>
  )
}
export default AddTodo;
