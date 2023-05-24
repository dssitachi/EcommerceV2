import axios from "axios";

async function fetcher(url) {
    const response = await axios.get(url);
    return response.data;
}

export function getAxiosClient(accessToken) {
    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
}

export default fetcher;