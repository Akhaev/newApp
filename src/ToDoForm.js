import { useState } from "react";

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

    const handlerChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    return (
        <form>
            <button onClick={onSubmit} className="form-btn">
                +
            </button>
            <input
                type="text"
                placeholder="Add task..."
                value={userInput}
                onChange={handlerChange}
            />
            
        </form>
    )
}

export default ToDoForm