<template>
    <transition
        name="t-fade"
        mode="out-in">
        <t-list>
            <item
                v-for="(item, index) in items"
                :key="index"
                :item="item"/>
        </t-list>
    </transition>
</template>

<script>
// Services
import { http } from '@/services';

// Utils
import { Data } from '@/utils';

// Components
import Item from './item';

export default {
    name: 'List',

    components:
    {
        Item,
    },

    data()
    {
        return {
            items: [],

            loading:
            {
                index: false,
            },
        };
    },

    created()
    {
        this.initialize();
    },

    methods:
    {
        async initialize()
        {
            // Set the loading
            this.loading.index = true;

            const response = await http.get(`/category/${this.$route.params.id}`);

            // Unset the loading
            this.loading.index = false;

            if (response.status === 200)
            {
                /**
                 * Filter the data because the endpoint
                 * doesn't filter the data.
                 */
                const filter = {
                    status: 'published',
                };

                const data = Data.filterArray({
                    data: response.data.data,
                    filter: filter,
                });

                this.items = data;
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
    },
};
</script>
