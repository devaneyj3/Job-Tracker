import {useState} from 'react';

const useLocalStorage = (key, initalValue) => {
    
    //if there is a key in local storage, get item and read it
    if(window.localStorage && window.localStorage.getItem(key)) {
        
        initalValue = JSON.parse(window.localStorage.getItem(key));
    }
    const [values, setStoredValues] = useState(initalValue);

    const setValues = value => {
        setStoredValues(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [ values, setValues];
}

export default useLocalStorage;
