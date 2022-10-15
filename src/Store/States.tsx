import {atom} from 'recoil';

export const headerHeightState = atom({
    key: 'headerHeight', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});