import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/ApiService";
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuiz = (props) => {

    const params = useParams();
    const location = useLocation();
    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState([]);
    const quizId = params.id;

    useEffect(() => {
        // Call API to get detail quiz
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
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
                    item.answers.isSelected = false;
                    answers.push(item.answers)
                })
                return { questionId: key, answers, questionsDescription, image }
            })
                .value();
            setDataQuiz(data);
        }
    }

    const handlePrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1)
    }

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1)
        }
    }

    const handleCheckBox = (answerId, questionId) => {

        // Clone dataQuiz vì dataQuiz là hằng số. Nếu muốn sửa đổi trực tiếp thì phải qua hàm setDataQuiz
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {
            let b = question.answers.map(item => {
                if (item.id === answerId) {
                    item.isSelected = !item.isSelected
                }
                return item;
            })
            question.answers = b;
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone)
        }

    }

    const handleFinishQuiz = async () => {

        let payload = {
            quizId: +quizId,
            answers: []
        };

        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = question.questionId;
                let userAnswerId = [];

                // Todo: userAnswerId
                question.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id);
                    }
                })

                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })
            })

            payload.answers = answers;
            // Call API
            let res = await postSubmitQuiz(payload);
            console.log("Check res: ", res);
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                })
                setIsShowModalResult(true);
            } else {

            }

        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="quiz-body">
                    <img />
                </div>
                <div className="quiz-content">
                    <Question handleCheckBox={handleCheckBox} index={index} data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []} />
                </div>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => handlePrev()}>Prev</button>
                    <button className="btn btn-secondary" onClick={() => handleNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handleFinishQuiz()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                Count down
            </div>
            <ModalResult show={isShowModalResult} setShow={setIsShowModalResult} dataModalResult={dataModalResult} />
        </div>
    )
}

export default DetailQuiz;