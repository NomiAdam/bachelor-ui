// eslint-disable-next-line import/prefer-default-export
export const getDate = (startDate, plusDays) => {
    const currentDate = new Date();
    currentDate.setDate(new Date(startDate).getDate() + plusDays);
    return currentDate.getDate();
};
