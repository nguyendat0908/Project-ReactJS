import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/ApiService";
import _ from 'lodash';
import './DetailQuiz.scss';

const DetailQuiz = (props) => {

    const params = useParams();
    const location = useLocation();
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
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr/>
                <div className="quiz-body">
                    <img />
                </div>
                <div className="quiz-content">
                    <div className="question">Question 1: How are you doing?</div>
                    <div className="answer">
                        <div className="a-child">A. Test a</div>
                        <div className="a-child">A. Test a</div>
                        <div className="a-child">A. Test a</div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-primary">Prev</button>
                    <button className="btn btn-secondary">Next</button>
                </div>
            </div>
            <div className="right-content">
                Count down
            </div>
        </div>
    )
}

export default DetailQuiz;