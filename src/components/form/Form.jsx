import {useState} from "react";

const Form = () => {
    const [text, setText] = useState("")
    const [textarea, setTextarea] = useState("")
    const validation = (val) => val.search(/\d/) >= 0
    const error = validation(text) ? "text-danger" : null
    const textareaError = validation(textarea) ? "text-danger" : null
    return (
        <div className={"w-100 vh-100 d-flex align-items-center justify-content-center"}>
            <div className="card w-50 mx-auto bg-dark border-light">
                <div className="card-body text-light">
                    <div className="alert alert-primary" role="alert">
                        {text}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="text"
                            className={`form-control ${error}`}
                            id="exampleFormControlInput1"
                            placeholder="John Smith"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            className={`form-control ${textareaError}`}
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Any messages..."
                            value={textarea}
                            onChange={(e) => setTextarea(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form