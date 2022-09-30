import axios from 'axios'
import { BASE_URL, APP_KEY } from './apiConfig'

const apiRequestHandler = async ({ data, url, method }) => {
    const baseUrl = BASE_URL + url
    const requestConfig = {
        method: method.toLowerCase(),
        data,
        url: baseUrl,
        params: {
            api_key: APP_KEY
        },
    }

    try {
        const response = await axios(requestConfig);
        return response?.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response.data;
        }
        return "Something went wrong";
    }
};

export default apiRequestHandler;