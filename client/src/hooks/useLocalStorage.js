import {useState} from 'react'


export const useLocalStorage = (key, initailValue) => {
    const [storedValue, setStateValue] = useState(()=>{
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initailValue 
    })

    const setValue = (value) => {
        setStateValue(value)
        localStorage.setItem(key,  JSON.stringify(value))
    }

            return [storedValue, setValue]

}