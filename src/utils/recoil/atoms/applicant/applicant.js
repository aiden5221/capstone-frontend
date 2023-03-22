import { atom } from 'recoil';

export const DEFAULT_APPLICANTSTATE = {
    jobApplication: '',
    name: '',
    skills: [],
    GPA: '',
    location: '',
    aptitudeResults: '',
    email: '',
    phoneNumber: '',
}

export const applicantState = atom({
    key: 'applicantState',
    default: DEFAULT_APPLICANTSTATE,
})