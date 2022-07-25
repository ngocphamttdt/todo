import React, { useRef, useState } from "react"
import { TodoFormWrapper, TodoInput } from "../styles/todo.styled"

const TodoForm = ({ onCreate }) => {
   console.log('todoFrom render');
    const [todoValue, setTodoValue] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const valRef = useRef()

    const handleInputChange = (value) => {
        console.log('val', value);
        if (todoValue !== '') {
            setIsDisabled(false)
            setTodoValue(value)
        }
    }

    const handleCreate = () => {
        onCreate(valRef.current.value)
        valRef.current.value = ''
    }
    return (
        <TodoFormWrapper>
            <TodoInput>
                <input
                    type="text" name="lname"
                    ref={valRef}
                />
            </TodoInput>
            <div>
                <button
                    type='submit'
                    onClick={handleCreate}
                >
                    Add
                </button>
            </div>
        </TodoFormWrapper>
    )
}

export default React.memo(TodoForm)