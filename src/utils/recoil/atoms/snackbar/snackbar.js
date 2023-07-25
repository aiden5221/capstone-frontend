import { atom } from 'recoil';

export const DEFAULT_SNACKBARSTATE = {
    active: false,
    isError: false,
    message: '',
}

export const snackbarState = atom({
    key: 'snackbarState',
    default: DEFAULT_SNACKBARSTATE,
})