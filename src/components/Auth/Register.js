import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import './Register.scss';
import { postRegister } from "../../services/ApiService";
import { toast } from 'react-toastify';

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        // Validate email and password
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Email is invalid');
            return;
        }
        if (!password) {
            toast.error('Password is required');
            return;
        }
        // Call API to login
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login');
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => { navigate('/login') }}>Log in</button>
            </div>
            <div className='title col-4 mx-auto'>
                DatLeo
            </div>
            <div className='welcome col-4 mx-auto'>
                Get better data with conversational forms, surveys, quizzes & more.
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email *</label>
                    <input type={"email"} className='form-control' value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password *</label>
                    <div className="password-input">
                        <input type={isShowPassword ? "text" : "password"} className='form-control' value={password} onChange={(event) => setPassword(event.target.value)} />
                        {/* <className="icon-eye" onClick={() => {handleShowPassword()}}/> */}
                        {isShowPassword ? 
                        <IoEyeOffOutline className="icon-eye" onClick={() => { setIsShowPassword(false) }} /> 
                        : 
                        <IoEyeOutline className="icon-eye" onClick={() => { setIsShowPassword(true) }} />}
                    </div>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input type={"password"} className='form-control' value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <button className='btn-submit' onClick={() => { handleRegister() }}>Create my free account</button>
                </div>
                <div className='text-center'>
                    <span className='back-home' onClick={() => { navigate('/') }}> Go to home page</span>
                </div>
            </div>
        </div>
    )
}

export default Register;