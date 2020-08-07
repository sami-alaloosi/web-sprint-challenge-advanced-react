import {useState} from "react"

export const useMessage = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(true);
      }
    return [values, handleSubmit]
}