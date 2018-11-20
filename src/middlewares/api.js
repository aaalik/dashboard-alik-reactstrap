import axios from 'axios';

const API_ROOT = 'http://127.0.0.1:3001/api';

/**
* @param fetchApi get from server *
*/

const fetchApi = async (endpoint = '') => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
    const result = await axios.get(fullUrl).catch((error) => {
        if (error.response) {
            return {
                status: error.response.status
            };
        }
        return {
            status: 500
        };
    });
    return result;
};

export { fetchApi };