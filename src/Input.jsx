import { useState } from "react"

const Input = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'HTML'
        },
        {
            id: 2,
            text: 'CSS'
        },
    ])

    const [text, setText] = useState('')
    
    const changeHandler = (e) => {
        setText(e.target.value)
    }
 
    const handlerAdd = () => {
        setText('')
        setTodos([{
            text: text
        }])
    }
    
    return (
        <div className="container">
            <input placeholder="email" type="email" name="Email" value={text} onChange={(e) => changeHandler(e)}/>
            <button onClick={handlerAdd}>add</button>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id}>{todo.text}</div>
                    )
                })
            }
        </div>    
    )
}

export default Input