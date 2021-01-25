import axios, { AxiosError } from 'axios'

const instance = axios.create({
    baseURL: 'http://180.228.167.34:8080',
    timeout: 1000
});
instance.interceptors.request.use(
    function (config) {
        return config;
    }, 
    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error : AxiosError) {
        return Promise.reject(error);
    }
);
export default instance;