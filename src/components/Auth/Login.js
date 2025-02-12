import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/ApiService';
import { toast } from 'react-toastify';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get dispatch function from useDispatch hook


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
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
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            dispatch({type: 'FETCH_USER_LOGIN_SUCCESS', payload: data})
            toast.success(data.EM);
            navigate('/');
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate('/register') }}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                DatLeo
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
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
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button className='btn-submit' onClick={() => { handleLogin() }}>Login</button>
                </div>
                <div className='text-center'>
                    <span className='back-home' onClick={() => { navigate('/') }}> Go to home page</span>
                </div>
            </div>
        </div>
    )
}

export default Login