import { useState } from "react";

function ToDo({todo, handlerToggle, removeTask}) {
    
    
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.completed ? 'item-text strike' : 'item-text'}
            onClick={() => handlerToggle(todo.id)}
            >
                {todo.task}
            </div>
            <button className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </button>
        </div>
    ) 
}

export default ToDo