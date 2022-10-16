import {atom} from 'recoil';

export const headerHeightState = atom({
    key: 'headerHeight',
    default: 0,
});

export const profile = atom({
    key: 'profileState',
    default: '',
});