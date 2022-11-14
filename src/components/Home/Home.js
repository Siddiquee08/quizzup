import {useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import pic from './pic.png'
import './Home.css'


const Home = () => {
    const quizzes = useLoaderData();
    // console.log(quizzes)
    
    return (
        <div>
            <div className='container header'>
                <img src={pic} alt="" />
                <p>Are you getting ready for the upcoming interview? Or you want to revise and galvanize your knowledge. Maybe you just want to become the ultimate software engineering boss. Doesn't matter whatever your reason, we can cover you! Take one or all of the following quizzess!!</p>
            
            </div>
            <div className='container quiz-container'>
                {
                    quizzes.data.map(quiz => <Quiz
                        key={quiz.id}
                        id= {quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;