const baseUrl = import.meta.env.VITE_API_BASE_URL
// const baseUrl= 'http://localhost:3000'

export const LOGIN_URL = `${baseUrl}/users/login`;
export const SIGNUP_URL = `${baseUrl}/users/signup`;
export const CART_URL = `${baseUrl}/users/cart`;
export const ADD_TO_CART_URL = `${baseUrl}/users/addToCart`;
export const PRODUCTS_URL = `${baseUrl}/products`;
export const MODIFY_CART_URL= `${baseUrl}/users/updateCart`;