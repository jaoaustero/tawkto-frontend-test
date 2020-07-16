export const Text = {
    /**
     * @param String 2 params
     * @return String two first letters of params
     */
    initials: (firstWord = '', secondWord = '') =>
    {
        return `${firstWord.charAt(0)}${secondWord.charAt(0)}`;
    },
};
