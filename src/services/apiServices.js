import axios from "axios";
import {
    LOGIN_URL,
    SIGNUP_URL,
    PRODUCTS_URL,
    CART_URL,
    ADD_TO_CART_URL,
    MODIFY_CART_URL,
} from "./apiUrls";

export function loginService(data) {
    return axios.post(LOGIN_URL, data);
}

export function signupService(data) {
    return axios.post(SIGNUP_URL, data);
}

export function productsService() {
    return axios.get(PRODUCTS_URL);
}

export function getUserCart(accessToken) {
    return axios.get(CART_URL, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
}

export function updateCart(product, accessToken) {
    return axios.post(ADD_TO_CART_URL, product, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
}

export function modifyCartAtOnce(cart, accessToken) {
    return axios.post(MODIFY_CART_URL, cart, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });
}