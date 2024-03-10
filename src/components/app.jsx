import React, {useState} from 'react'

/*class App extends React.Component {
    state = {
        counter: 0
    }

    onIncrement = () => {
        this.setState(({counter}) => ({counter: counter + 1}))
    }
    onDecrement = () => {
        this.setState(({counter}) => ({counter: counter - 1}))
    }

    render() {
        const {counter} = this.state
        return (
            <div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
                <div
                    className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
                    <h1>Counter</h1>
                    <div className='d-flex align-items-center gap-2'>
                        <button className='btn btn-success' onClick={this.onIncrement}>INC +</button>
                        <h1>{counter}</h1>
                        <button className='btn btn-danger' onClick={this.onDecrement}>DECR -</button>
                    </div>
                    <button className='btn btn-primary w-25'>
                        Auto
                    </button>
                </div>
            </div>
        )
    }
}*/
function randomNumber() {
    console.log("Random number")

    return Math.round(Math.random() * 100)
}

function App() {
    const [counter, setCounter] = useState(randomNumber)
    const [auto, setAuto] = useState(false)
    const [state, setState] = useState({count: 0, autoPlay: false})

    function onChangeState() {
        setState(({count, autoPlay}) => ({count, autoPlay: !autoPlay}))
    }

    function onIncrement() {
        setCounter(prevState => prevState + 1)
    }

    function onDecrement() {
        setCounter(prevState => prevState - 1)
    }

    function onToggleAuto() {
        setAuto(prevState => !prevState)
    }

    return (
        <div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
            <div
                className='border w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column'>
                <h1>Counter</h1>
                <div className='d-flex align-items-center gap-2'>
                    <button className='btn btn-success' onClick={onIncrement}>INC +</button>
                    <h1>{counter}</h1>
                    <button className='btn btn-danger' onClick={onDecrement}>DECR -</button>
                </div>
                <div>
                    <p>
                        {auto && "Auto play"}
                    </p>
                    <button className='btn btn-primary' onClick={onToggleAuto}>
                        onToggleAuto
                    </button>
                </div>
                <div>
                    <p>
                        {state.autoPlay && "onChangeState"}
                    </p>
                    <button className='btn btn-primary ' onClick={onChangeState}>
                        onChangeState
                    </button>
                </div>
            </div>
        </div>
    )
}


export default App