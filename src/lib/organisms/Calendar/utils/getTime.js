import { append } from 'ramda';

// eslint-disable-next-line import/prefer-default-export
export const getTime = (from, to) => {
    let aryTime = [];
    // eslint-disable-next-line no-plusplus
    for (let hour = from; hour <= to; hour++) {
        aryTime = append(`${ hour }:00`, aryTime);
    }
    return aryTime;
};
