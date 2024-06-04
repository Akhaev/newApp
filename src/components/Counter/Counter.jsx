import { useSelector, useDispatch } from "react-redux"

function Counter() {
    const dispatch = useDispatch()
    const number = useSelector(state => state)
    
    const handlerPlus = () => {
        dispatch({
            type: 'PLUS'
        })
    }

    const handlerMinus = () => {
        dispatch({
            type: 'MINUS'
        })
    }

    const handlerReset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return (
        <div>
            {number}
            <button onClick={handlerPlus}>+</button>
            <button onClick={handlerMinus}>-</button>
            <button onClick={handlerReset}>Reset</button>
        </div>
    )
}

export default Counter