import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

function Todo() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state)

    const [inputText, setInputText] = useState('')

    const handlerChange = (e) => {
        setInputText(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        let newItem = {
            text: inputText,
            completed: false
        }
        

        dispatch({
            type: 'ADD_TASK',
            payload: newItem
        })
    }

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }
    
    const handlerToggle = (id) => {
        dispatch({
            type: 'COMPLETED',
            payload: id
        })
    }

    return (
        <div>
            {todos.map((todo, id) => {
                return(
                    <div className="todo">
                        <input type="checkbox" defaultChecked={todo.completed} onClick={() => handlerToggle(id)}/>
                        <p className={todo.completed ? 'completedTask' : ''}>{todo.text}</p>
                        <button className="btn-remove" onClick={() => deleteTodo(id)}>X</button>
                    </div>
                )
            })}

            <form onSubmit={addTask}>
                <input type="text" value={inputText} onChange={(e) => handlerChange(e)}/>
                <button>add</button>
            </form>
        </div>
        
    )
}

export default Todo