export const getDate = (startDate, plusDays) => {
    const currentDate = new Date();
    currentDate.setDate(new Date(startDate).getDate() + plusDays);
    return currentDate.getDate();
};
