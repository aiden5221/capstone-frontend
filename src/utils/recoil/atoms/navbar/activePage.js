import { atom } from 'recoil';

export const DEFAULT_ACTIVEPAGESTATE = {
    activePage: '',
}

export const activePageState = atom({
    key: 'activePageState',
    default: DEFAULT_ACTIVEPAGESTATE,
})