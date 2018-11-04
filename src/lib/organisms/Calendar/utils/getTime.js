import { append } from 'ramda';

export const getTime = (from, to) => {
    let aryTime = [];
    for (let hour = from; hour <= to; hour++) {
        aryTime = append(`${hour}:00`, aryTime)
    }
    return aryTime;
};
