import { data } from 'react-router-dom';
import instance from '../utils/AxiosCustomize';

const postCreateUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return instance.post('api/v1/participant', data)
}

const getAllUsers = () => {
    return instance.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return instance.put('api/v1/participant', data)
}

const deleteUser = (userId) => {
    return instance.delete('api/v1/participant', { data: { id: userId } })
}

const getUserWithPaginate = (page, limit) => {
    return instance.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (userEmail, userPassword) => {
    return instance.post('api/v1/login', { email: userEmail, password: userPassword })
}

const postRegister = (userEmail, userPassword, username) => {
    return instance.post('api/v1/register', { email: userEmail, password: userPassword, username: username })
}

const getQuizByUser = () => {
    return instance.get('api/v1/quiz-by-participant')
}

const getDataQuiz = (id) => {
    return instance.get(`api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (data) => {
    console.log("... Data check: ", { ...data })
    return instance.post('api/v1/quiz-submit', { ...data })
}

const postCreateNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return instance.post('api/v1/quiz', data)
}

const getAllQuizForAdmin = () => {
    return instance.get(`api/v1/quiz/all`)
}

const putUpdateQuizForAdmin = (id, description, name, difficulty, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);
    return instance.put('api/v1/quiz', data)
}

const deleteQuizForAdmin = (id) => {
    return instance.delete(`/api/v1/quiz/${id}`);
}

const postCreateNewQuestionForQuiz = (quiz_id, description, image) => {
    const data = new FormData();
    data.append('quiz_id', quiz_id);
    data.append('description', description);
    data.append('questionImage', image);
    return instance.post('api/v1/question', data)
}

const postCreateNewAnswerForQuestion = (description, correct_answer, question_id) => {

    return instance.post('api/v1/answer', {
        description, correct_answer, question_id
    })
}

export {
    postCreateUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate,
    postLogin, postRegister, getQuizByUser, getDataQuiz, postSubmitQuiz,
    postCreateNewQuiz, getAllQuizForAdmin, putUpdateQuizForAdmin, deleteQuizForAdmin, postCreateNewQuestionForQuiz, postCreateNewAnswerForQuestion
}