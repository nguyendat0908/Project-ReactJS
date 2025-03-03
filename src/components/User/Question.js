import _ from 'lodash'

const Question = (props) => {

    const { data, index } = props;

    if (_.isEmpty(data)) {
        return (<></>)
    }

    const handleCheckBox = (event, answerId, questionId) => {
        props.handleCheckBox(answerId, questionId);
    }

    return (
        <>
            {data.image ?
                <div className='question-image'>
                    <img src={`data:image/jpeg;base64,${data.image}`} />
                </div>
                :
                <div className='question-image'></div>
            }
            <div className="question">Question {index + 1}: {data.questionsDescription}</div>
            <div className="answer">
                {data.answers && data.answers.length && data.answers.map((a, index) => {
                    return (
                        <div key={`answer-${index}`} className="a-child">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked={a.isSelected} onChange={(event) => { handleCheckBox(event, a.id, data.questionId) }} />
                                <label className="form-check-label">
                                    {a.description}
                                </label>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Question