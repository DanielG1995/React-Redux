import { useState } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = (newState = initialState) => {
        setValues(newState);
    }


    const handleInputChange = ({ target }) => {

        //Manejo de variables con los nombres de los componentes
        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];

}