import { async } from '@firebase/util';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000'

export const getJobApplications = async () => {
    return axios.get(`${BACKEND_URL}/jobapplications/`)
        .then(res => {
            const { data } = res;
            return data;
        })
}

export const getJobApplicationByName = async (name) => {
    return axios.get(`${BACKEND_URL}/jobapplication/${name}`)
        .then(res => {
            const { data } = res;
            return data;
        })
}

export const postPotentialEmployee = async (potentialEmployeeFields) => {
    return axios.post(`${BACKEND_URL}/potentialemployees/`, potentialEmployeeFields)
        .then(res => {
            const { data } = res;
            return data;
        })
}

export const postJobApplication = async (myObj) => {
    return axios.post(`${BACKEND_URL}/jobapplications/`, myObj)
        .then(response => {
            const { data } = response;
            return data;
        })
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}
