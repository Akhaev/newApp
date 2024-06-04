import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'))

const initialState = [
    {
        text: 'HTML',
        completed: false
    },
    {
        text: 'CSS',
        completed: true
    },
]

const reducer = (state = initialState, action) => {
    console.log([
        ...state.map((item,id) => {
            return (id === action.payload ? { ...item, completed : !item.completed} : { ...item })
        }),
    ]);
    
    switch (action.type) {
        case 'DELETE':
            return state.filter((item, id) => {
                if(action.payload === id){
                    return false
                }
                return true
            });
        
        case 'ADD_TASK':
            return [...state, action.payload];
        
        case 'COMPLETED':
            return ([
				...state.map((item,id) => {
					return (id === action.payload ? { ...item, completed : !item.completed} : { ...item })
				}),
			])

        default:
            return state
    }
    
    
    // switch (action.type) {
    //     case 'PLUS':
    //         return state + 1;
    //     case 'MINUS':
    //         return state - 1;
    //     case 'RESET':
    //         return state = 0;
    
    //     default:
    //         return state
    // }
}


const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);