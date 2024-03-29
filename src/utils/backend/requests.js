import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000'

export const getJobApplications = async () => {
    return axios.get(`${BACKEND_URL}/jobapplications/`)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getJobApplicationByName = async (jobName) => {
    return axios.get(`${BACKEND_URL}/jobapplicationSearch/`, {
        params: {
            name: jobName
        }
    })
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getJobApplicationById = async (id) => {
    return axios.get(`${BACKEND_URL}/jobapplication/${id}`)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const postPotentialEmployee = async (potentialEmployeeFields) => {
    return axios.post(`${BACKEND_URL}/potentialemployees/`, potentialEmployeeFields)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const postJobApplication = async (myObj) => {
    return axios.post(`${BACKEND_URL}/jobapplications/`, myObj)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch((error) => {
            console.error(error)
        });
}

export const getCreatedJobPostings = async (uid) => {
    return axios.get(`${BACKEND_URL}/userJobApplications/${uid}`)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err)
        })
}

export const getShortlist = async (id, length) => {
    return axios.get(`${BACKEND_URL}/jobapplication/${id}/shortlist/${length}`)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const deleteJobApplication = async (id) => {
    return axios.delete(`${BACKEND_URL}/jobapplication/${id}`)
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getJobShortlist = async (jobApplicant) => {
    return axios.post(`${BACKEND_URL}/potentialemployees/shortlist/`, jobApplicant)
        .then(res => {
            const { data } = res;
            console.log(data)
            return data;
        })
        .catch(err => {
            console.log(err);
        })
} 