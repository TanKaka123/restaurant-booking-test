const formatNumberWithDotSeparator = (number: number): string => {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
    });
};

export default formatNumberWithDotSeparator;