import React, {useEffect, useState} from 'react'
import Form from "./form/Form.jsx";

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
    console.log("Number")

    return Math.round(Math.random() * 100)
}

function Counter() {
    const [counter, setCounter] = useState(randomNumber)
    const [auto, setAuto] = useState(false)
    const [state, setState] = useState({count: 0, autoPlay: false})

    const logger = () => console.log("Hello world!")
    useEffect(() => {
        console.log("Mounting")
        document.title = `Counter: ${counter}`
    }, []);

    useEffect(() => {
        console.log("Updating")
        document.title = `Updated counter: ${counter}`

        window.addEventListener("click", logger)

        return () => window.removeEventListener("click", logger)
    }, [counter]);

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

function App() {
    return (
        <div className={"bg-dark w-100 h-100"}>
            <div className="container">
                <Form/>
            </div>
        </div>

    )
}

export default App


/*
function App() {
    const [show, setShow] = useState(true)
    return <div>
        <button className={"btn btn-secondary"} onClick={() => setShow(prevState => !prevState)}>
            Click me to unmount
            Counter
        </button>
        {show && <Counter/>}
    </div>
}*/
