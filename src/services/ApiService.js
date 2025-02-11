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
    return instance.delete('api/v1/participant', {data: {id: userId}})
}

const getUserWithPaginate = (page, limit) => {
    return instance.get(`api/v1/participant?page=${page}&limit=${limit}`)
}

const postLogin = (userEmail, userPassword) => {
    return instance.post('api/v1/login', {email: userEmail, password: userPassword})
}

const postRegister = (userEmail, userPassword, username) => {
    return instance.post('api/v1/register', {email: userEmail, password: userPassword, username: username})
}

export { postCreateUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate, postLogin, postRegister }