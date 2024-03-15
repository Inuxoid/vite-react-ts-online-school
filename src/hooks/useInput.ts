import React, {useState} from "react";

function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);
    return {
        value,
        onChange : (event : React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    }
}

export default useInput;