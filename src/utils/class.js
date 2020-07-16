export const ClassUtil = {
    /**
     * @param Array arguments
     * @return String classnames
     */
    join: (...args) =>
    {
        let classnames = '';

        for (let i = 0; i < args.length; i++)
        {
            if (args[i])
            {
                classnames += (`${args[i]} `);
            }
        }

        return classnames;
    },
};
