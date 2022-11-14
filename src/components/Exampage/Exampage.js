import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Exampage.css";

const Exampage = () => {
  const questions = useLoaderData();
  return (
    <div className="exam">
      <h1 className="text-center mb-5">{questions.data.name}</h1>

      {questions.data.questions.map((question, index) => (
        <Question key={index} question={question}></Question>
      ))}
    </div>
  );
};

export default Exampage;
