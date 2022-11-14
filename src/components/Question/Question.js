import React from 'react';
import Option from '../Option/Option';
import './Question.css';
 import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Question = ({question}) => {
    const { options, name, correctAnswer} = question
    const clickHandle = (e) => {
        if (correctAnswer === e) {
           toast.success('Correct!', {
position: "top-center",
autoClose: 500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
            
        }
        else {
           
            toast.error('Wrong!', {
position: "top-center",
autoClose: 500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
        }
      
}
    return (
        <div className='question container mt-3'>
            <h1>{name}</h1>
            <h2>Q:{question.question}</h2>
            {
                options.map((option, index) => <Option key={index} option={option}
                clickHandle = {clickHandle}></Option>)
            }
    <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default Question;