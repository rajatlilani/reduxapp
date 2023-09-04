import { Outlet } from "react-router-dom"
import AddTodo from "./AddTodo"

function RootLayput() {
    return (
        <div><AddTodo />
            <Outlet /></div>
    )
}
export default RootLayput