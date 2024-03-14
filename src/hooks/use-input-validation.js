// create own hook to validation
import {useState} from "react";

function useInputValidation(initialValue) {
    const [value, setValue] = useState(initialValue)
    const onChange = (event) => setValue(event.target.value)
    const error = () => value.search(/\d/) >= 0 ? "text-danger" : null
    return {value, onChange, error}
}

export default useInputValidation