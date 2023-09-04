import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'


const Todos = () => {
    const todos = useSelector((state) => state.todos)
    console.log(todos)


    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(storedTodos)
    return (
        <>

        </>
    )
}
export default Todos