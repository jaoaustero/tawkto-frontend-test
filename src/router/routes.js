const routesData = [];

(function updateModules()
{
    const requireModule = require.context(
        // Search for files in the current directory.
        '@/views/',
        // Search for files in subdirectories.
        true,
        // Include any .js files that are not this file or a unit test.
        // /^((?!index|\.unit\.).)*\.js$/
        /route.js/
    );

    // For every Vuex module...
    requireModule.keys().forEach((fileName) =>
    {
        const moduleDefinition = requireModule(fileName);

        moduleDefinition.default.forEach((route) =>
        {
            routesData.push(route);
        });
    });

    routesData.push({ path: '*', redirect: '/error/404' });
}());

export default routesData;
