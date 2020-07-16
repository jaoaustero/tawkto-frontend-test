import { Helper } from './helper';

export const Data = {
    /**
     * Delete a empty or null property of Object.
     *
     * @param { Object } obj - a container of properties or methods
     * @param { Boolean } deep - Determine if recurssion to delete items from
     *                          nested objects
     */
    removeEmptyProperty: ({ obj = null, deep = false }) =>
    {
        if (Helper.isObjectEmpty(obj))
        {
            return;
        }

        const localObj = obj;

        if (deep)
        {
            Object.keys(obj).forEach((key) =>
            {
                if (obj[key] && typeof obj[key] === 'object')
                {
                    Data.removeEmptyProperty({ obj: obj[key], deep: true });
                }
                else if (obj[key] == null)
                {
                    delete localObj[key];
                }
            });
        }

        Object.keys(obj).forEach((key) =>
            ((obj[key] === null || obj[key] === '') && obj[key] !== undefined) && delete localObj[key]);
        return localObj;
    },

    /**
     * Delete the data which has a disabled properties
     *
     * @param { Object } obj - data from the list
     * @param { String } property - name of the status/is_active property
     */
    removeDisabledData: ({ obj = null, property = 'is_active' }) =>
    {
        if (!Helper.isObject(obj))
        {
            return;
        }

        return obj.filter((item) => item[property] === 1);
    },

    /**
     * Filter the data based on the filter objects
     *
     * @param { Array } data - collection of data in array
     * @param { Object } filter - object of filters
     */
    filterArray({ data = null, filter = {} })
    {
        if (data === null && Helper.isObjectEmpty(filter))
        {
            return;
        }

        return data.filter((item) =>
        {
            for (const key in filter)
            {
                if (item[key] === undefined || item[key] !== filter[key])
                {
                    return false;
                }
            }
            return true;
        });
    },
};
