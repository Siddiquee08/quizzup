import React from 'react';
import "./Option.css"
const Option = ({option, clickHandle}) => {
    return (
        <div className='option'>
            <label name='radio'>
                <input onClick={()=> clickHandle(option)} type='radio' name='radio'/> {option}
            </label>


        </div>
    );
};

export default Option;