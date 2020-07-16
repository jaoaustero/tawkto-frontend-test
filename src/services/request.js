import axios from 'axios';

export function request(url, method, data = [])
{
    return axios({
        url: `${process.env.VUE_APP_API_BASE_URL}/api${url}`,
        method,
        data,
    });
}
