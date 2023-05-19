/**
 * Helper function for formatting dates
 * @param value
 * @returns
 */
export const displayFormatedDate = (value: string) => {
    const dateValue = new Date(value);

    const dateFormat = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    } as const;

    const formatedDateValue = new Intl.DateTimeFormat('en-GB', dateFormat).format(dateValue);

    return formatedDateValue;
};
