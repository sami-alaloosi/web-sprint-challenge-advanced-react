import {useLocalStorage} from "./useLocalStorage"


export const useDarkMode = (key) => {
    const [dark, setDark] = useLocalStorage(key)
    return [dark, setDark]
}