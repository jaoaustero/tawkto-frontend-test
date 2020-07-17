<template>
    <div>
        <div v-margin.bottom>
            <t-breadcrumb
                :items="breadcrumbs"/>
        </div>

        <t-grid>
            <t-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'2-5'"
                :large="'2-5'"
                :xlarge="'2-5'">
                <information
                    v-if="!loading.show"
                    :item="selected"/>
            </t-width>

            <t-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'3-5'"
                :large="'3-5'"
                :xlarge="'3-5'">
                <list />
            </t-width>
        </t-grid>

        <t-divider
            class="t-margin-medium"/>

        <div>
            <other-categories />
        </div>
    </div>
</template>

<script>
// Vuex
import { mapActions, mapGetters } from 'vuex';

// Meta
import { meta } from '@/meta';

// Utils
import { Helper, Data } from '@/utils';

// Services
import { http } from '@/services';

// Components
import Information from './information';
import List from './list';
import OtherCategories from './other-categories';

export default {
    name: 'HomeView',

    mixins:
    [
        meta,
    ],

    components:
    {
        Information,
        List,
        OtherCategories,
    },

    data()
    {
        return {
            metaTitle: '[Category]',

            breadcrumbs: [],

            loading:
            {
                show: false,
            },
        };
    },

    created()
    {
        this.loadItem();
        this.setBreadcrumbs();
    },

    computed:
    {
        ...mapGetters({
            selected: 'home/selected',
        }),
    },

    methods:
    {
        ...mapActions({
            select: 'home/select',
        }),

        async loadItem()
        {
            /**
             * If @this selected state is not empty
             */
            if (!Helper.isObjectEmpty(this.selected))
            {
                // Set the title meta
                this.metaTitle = this.selected.title;

                // Set Breadcrumbs
                this.$route.meta.breadcrumbs = this.selected.title;

                return;
            }

            this.loading.show = true;

            const response = await http.get('/categories');

            this.loading.show = false;

            if (response.status === 200)
            {
                const filter = {
                    id: this.$route.params.id,
                };

                const data = Data.filterArray({
                    data: response.data.data,
                    filter: filter,
                });

                // Set state
                this.select(data[0]);

                // Set the title meta
                this.metaTitle = data[0].title;

                // Set Breadcrumbs
                this.$route.meta.breadcrumbs = data[0].title;
            }
            else if (response.status === 404)
            {
                alert('Not found');
            }
            else if (response.status === 403)
            {
                alert('You\'re not allowed to access this page');
            }
            else
            {
                alert('Internal Server Error');
            }
        },

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
