import axios from 'axios';
import nProgress from 'nprogress';

nProgress.configure({
    showSpinner: false,
    // easing: 'ease',
    // speed: 500,
    // trickleRate: 0.5,
    // easing: 'ease',
    // speed: 500,
    // trickle: true,
    // trickleRate: 0.02,
    trickleSpeed: 100
});

const instance = axios.create({
    baseURL: 'http://localhost:8081/'
});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    nProgress.start();
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    nProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance;