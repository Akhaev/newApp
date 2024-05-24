import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {

    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                completed: false
            }
            setTodos([...todos, newItem])
        }
    }
    const removeTask = (id) => {
        setTodos([...todos.filter((item) => item.id !== id)])
    }
    const handlerToggle = (id) => {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
            )
        ])
    }

    return (
        <div className="App">
            <header>
                <h1>количество задач № {todos.length}</h1>
            </header>
            <main>
                {
                    todos.map(todo => {
                        return (
                            <ToDo
                                key={todo.id}
                                todo={todo}
                                removeTask={removeTask}
                                handlerToggle={handlerToggle}
                            />
                        )
                    })
                }
                <ToDoForm addTask={addTask}/>
            </main>
        </div>
    )
}

export default App