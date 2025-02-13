import { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import  { getDataQuiz } from "../../services/ApiService";

const DetailQuiz = (props) => {

    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        // Call API to get detail quiz
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = getDataQuiz(quizId);
    }

    return (
        <div className="detail-quiz-container container">
            Detail Quiz
        </div>
    )
}

export default DetailQuiz;