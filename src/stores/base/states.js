export const baseStates = {
    /**
     * Containers for list of items
     * fetched from API
     *
     * @type {Array}
     */
    items: [],

    /**
     * A single object data used for
     * Displaying single item
     *
     * @type {Object}
     */
    selected: {},

    /**
     * Loading identifier for
     * list of items
     *
     * @type {Boolean}
     */
    indexLoading: false,

    /**
     * Loading identifier for
     * create data
     *
     * @type {Boolean}
     */
    createLoading: false,

    /**
     * Loading identifier for
     * posting a data
     *
     * @type {Boolean}
     */
    storeLoading: false,

    /**
     * Loading identifier for
     * viewing single item
     *
     * @type {Boolean}
     */
    showLoading: false,

    /**
     * Loading identifier for
     * fetching single data
     *
     * @type {Boolean}
     */
    editLoading: false,

    /**
     * Loading identifier for
     * updating data
     *
     * @type {Boolean}
     */
    updateLoading: false,

    /**
     * Loading identifier for
     * deleting data
     *
     * @type {Boolean}
     */
    deleteLoading: false,

    /**
     * Total length of items
     *
     * @type {Number}
     */
    total: 0,

    /**
     * Beggining of pagination
     *
     * @type {Number}
     */
    to: 1,

    /**
     * Ending of pagination
     *
     * @type {Number}
     */
    from: 15,

    /**
     * Current selected page
     *
     * @type {Number}
     */
    currentPage: 1,

    /**
     * Ending of pagination
     *
     * @type {Number}
     */
    lastPage: 1,

    /**
     * URl of the endpoint
     *
     * @type {String}
     */
    url: '',
};
