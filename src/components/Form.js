import React from 'react';

const Form = props => (

    <form onSubmit={props.submit}>
    <input 
    type="text" 
    placeholder="Wpisz miasto.."
    value = {props.value}
    onChange = {props.change}
    />
    <button>Sprawdź</button>
    </form>
    
)
export default Form