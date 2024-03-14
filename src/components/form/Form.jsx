import useInputValidation from "../../hooks/use-input-validation.js";

const Form = () => {
    const input = useInputValidation("")
    const textarea = useInputValidation("")
    return (
        <div className={"w-100 vh-100 d-flex align-items-center justify-content-center"}>
            <div className="card w-50 mx-auto bg-dark border-light">
                <div className="card-body text-light">
                    <div className="alert alert-primary" role="alert">
                        {input.value} / {textarea.value}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="text"
                            className={`form-control ${input.error()}`}
                            id="exampleFormControlInput1"
                            placeholder="John Smith"
                            value={input.value}
                            onChange={input.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            className={`form-control ${textarea.error()}`}
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Any messages..."
                            value={textarea.value}
                            onChange={textarea.onChange}
                        ></textarea>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form