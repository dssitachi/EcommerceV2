import axios from 'axios';
import { LOGIN_URL, SIGNUP_URL, PRODUCTS_URL } from './apiUrls';

export function loginService(data) {
    return axios.post(LOGIN_URL, data)
}

export function signupService(data) {
    return axios.post(SIGNUP_URL, data);
}

export function productsService() {
    return axios.get(PRODUCTS_URL);
}