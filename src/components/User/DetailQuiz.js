import { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/ApiService";
import _ from 'lodash';

const DetailQuiz = (props) => {

    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        // Call API to get detail quiz
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            // Lodash
            let data = _.chain(raw).groupBy("id").map((value, key) => {

                let answers = [];
                let questionsDescription, image = null;
                value.forEach((item, index) => {
                    if (index === 0) {
                        questionsDescription = item.description;
                        image = item.image;
                        
                    }
                    answers.push(item.answers)
                })
                return { questionId: key, answers, questionsDescription, image }
            })
                .value();
        }

        return (
            <div className="detail-quiz-container container">
                Detail Quiz
            </div>
        )
    }
}

export default DetailQuiz;