export const Helper = {
    /**
     * Check if the value is empty or contains
     * white space only.
     *
     * @param {*} str - String or number
     */
    isValueEmpty(value)
    {
        return typeof value === 'number'
            ? false
            : value === null
                ? true
                : value === undefined
                    ? true
                    : value.length
                        ? !value.trim()
                        : true;
    },

    /*
     * Check object if empty
     *
     * @param {Object} collection of data
     * @return {*} If true `length` else `false`
     */
    isObjectEmpty(obj)
    {
        return this.isObject(obj)
            ? Object.keys(obj).length === 0
                ? true
                : false
            : false;
    },

    /*
     * Check if valid object
     *
     * @param {Object} collection of data
     * @return {*} If true 'object' else `null`
     */
    isObject(obj)
    {
        return obj !== null && typeof obj === 'object';
    },

    /**
     * Check if valid function
     *
     * @param {*} obj - function
     * @return string
     */
    isFunction(obj)
    {
        return typeof obj === 'function';
    },

    /**
     * Check if this object in array is already existing.
     *
     * @param {Array} data - Array
     * @param {String} propertyName - a property name of the object
     *
     * @return {Boolean}
     */
    isObjectExisting({ data = [], propertyName = null, value = null })
    {
        return data.some((el) => el[propertyName] === value);
    },

    /**
     * Get the index of object in the array.
     *
     * @param {Array} data - Array
     * @param {String} propertyName - a property name of the object
     *
     * @return {Number}
     */
    getObjectIndex({ data = [], propertyName = null, value = null })
    {
        return data.findIndex((i) => i[propertyName] === value);
    },
};
