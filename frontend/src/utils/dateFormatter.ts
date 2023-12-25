
const DateFormatter = (date: string): string => {
    const parsedDate = new Date(date);
    const formattedDate = parsedDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return formattedDate;
};
export default DateFormatter;