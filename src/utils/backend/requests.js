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

export const postJobApplication = async (myObj) => {
    return axios.post(`${BACKEND_URL}/jobapplications/`, myObj)
        .then(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}
