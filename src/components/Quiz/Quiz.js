import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz;
    // console.log(quiz)

    // const handleEvent = () => {
       
    // }
    return (
        <div className='card-container'>

            <div>
                <img src={logo} alt="" />
                <h3> Topic Name: {name}</h3>
                <p className='bolder fs-2'>Total Quiz: {total}</p>
                <button><Link to={`/exams/${id}`}>Click Here to start</Link></button>
            </div>
       </div>
    );
};

export default Quiz;