import React, { useCallback, useMemo, useState } from "react";
import { TodoFormWrapper, TodoWrapper } from "../styles/todo.styled";
import Counter from "./counter";
import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

function TodoList() {
    const [todoData, setTodoData] = useState([])
    const [total, setTotal] = useState(0)

    const handleCreate = useCallback( (name) => {
        const newId = todoData.length > 0 ? Math.max(todoData.map(({ id }) => id)) + 1 : 0
        const newtodo = [...todoData, { id: newId, name: name }]
        setTodoData(newtodo)
    }, [])

    const handleDelete = useCallback((todoId) => {
        const newTodoList = todoData.filter(item => item.id !== todoId)
        setTodoData([...newTodoList])
    }, [])

    const numOfTodo = useMemo(() => {
        console.log('render count')
        return todoData.length
    }, [todoData])

    // const numOfTodo1 = () => {
    //     console.log('render count1')
    //     return todoData.length
    // }
    // const testRender = numOfTodo1()

    const handleIncrease = useCallback(() => setTotal(prev => prev + 1), [])

    return (
        <>
            <TodoWrapper>
                <TodoForm
                    onCreate={handleCreate}
                />
                <div>Todo item: {numOfTodo} </div>
                {
                    todoData.length > 0 && todoData.map(({ id, name }) =>
                        <TodoItem
                            key={id}
                            id={id}
                            name={name}
                            onDelete={handleDelete}
                        />
                    )
                }
                <div>
                    <Counter onIncrease={handleIncrease} />
                    <p>Total: {total}</p>
                </div>
            </TodoWrapper>
        </>
    )
}
export default React.memo(TodoList)

