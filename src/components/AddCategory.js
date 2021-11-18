import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('Escriba una categoría')
    

    // Para cambiar el valor dentro del input
    const handleInputChange = ( e ) => {
        setInputValue (e.target.value);
    }

    // Para trabajar el enter

    const handleSubmit = (e) => {

        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue(''); 
        }



    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange= { handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}