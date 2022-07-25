import React from "react"
import 'font-awesome/css/font-awesome.min.css'

const TodoItem = ({ id, name, onDelete }) => {
    console.log('todoItem render')
    const handleDelete = (todoId) => {
        onDelete(todoId)
    }
    return (
        <>
            
            <div>
                <ul>
                    <li>{name} &nbsp;
                        <a href="#" type="button" onClick={() => handleDelete(id)}>delete</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TodoItem