import { useSelector } from "react-redux"

function NewPage() {

    const todos = useSelector((state) => state.todos)
    console.log(todos)
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(storedTodos)
    return (
        <div>NewPage</div>
    )
}
export default NewPage