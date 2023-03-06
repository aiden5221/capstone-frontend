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
export const postJobListings = async (data) =>{
    return axios.post('http://localhost:8000/joblistings/',{data},
    {headers:{
        'content-type' :'text/json'
    }});
    res.data.headers['Content-Type'];

}