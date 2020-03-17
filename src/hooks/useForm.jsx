
import useLocalStorage from './useLocalStorage'

const useForm = (key, initialValue, cb) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const handleInputChange = (e) => {
        setValue({...value, [e.target.name]:e.target.value});
    };

    const clearForm = () => {
        setValue(initialValue)
    }

    const submitForm = (e) => {
        e.preventDefault()
        cb();
        clearForm();
    }
    return [ value, handleInputChange, submitForm];
}

export default useForm;