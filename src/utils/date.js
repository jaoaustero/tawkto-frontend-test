export const DateUtil = {
    /**
     *
     */
    format(date)
    {
        const formatDate = new Date(date);

        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(formatDate);
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(formatDate);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(formatDate);

        return `${month} ${day}, ${year}`;
    },
};
