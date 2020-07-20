<template>
    <div>
        <transition
            name="t-fade"
            mode="out-in">
            <div>
                <div v-margin.bottom>
                    <t-breadcrumb
                        :items="breadcrumbs"/>
                </div>

                <router-view />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Search',

    data()
    {
        return {
            breadcrumbs: [],
        };
    },

    created()
    {
        this.setBreadcrumbs();
    },

    methods:
    {
        setBreadcrumbs()
        {
            // Clear the breadcrumbs data
            this.breadcrumbs = [];

            // Add default breadrumbs
            const allCategories = {
                label: 'All Categories',
                href: '/',
            };

            this.breadcrumbs.push(allCategories);

            // Get the list of children routes
            const matched = this.$route.matched;

            for (let index = 1; index < matched.length; index++)
            {
                const breadcrumbItem = {
                    label: matched[index].meta.breadcrumbs,
                    href: matched[index].path,
                };

                this.breadcrumbs.push(breadcrumbItem);
            }
        },
    },
};
</script>
