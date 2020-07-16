export const baseGetters = {

    /**
     * List of items
     *
     * @return Array of objects of data
     */
    items: (state) => state.items,

    /**
     * Identifiers for loading
     *
     * @param {String} State base name
     * @return Booolean of target state
     */
    isLoading: (state) => (action) => state[`${action}Loading`],

    /**
     * Single data that has been selected
     *
     * @return Object of data
     */
    selected: (state) => Object.assign({}, state.selected),

    /**
     * Get the pagination states
     *
     * @param {Object} Pagination states
     */
    page(state)
    {
        return {
            total: state.total,
            from: state.from,
            to: state.to,
            currentPage: state.currentPage,
            lastPage: state.lastPage,
            url: state.url,
        };
    },
};
