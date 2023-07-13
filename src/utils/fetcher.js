import axios from "axios";

export function getAxiosClient(accessToken) {
    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}