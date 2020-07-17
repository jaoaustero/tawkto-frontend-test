<template>
    <div>
        <div class="t-text-center">
            <p class="t-text-title
                t-text-muted">
                Other categories
            </p>
        </div>

        <div v-margin.top>
            <t-grid>
                <t-width
                    v-for="(item, index) in items"
                    :key="index">
                    <item
                        v-if="item.id !== $route.params.id"
                        :item="item"/>
                </t-width>
            </t-grid>
        </div>
    </div>
</template>

<script>
// Services
import { http } from '@/services';

// Utils
import { Data } from '@/utils';

// Components
import Item from '../../../components/categories/item';

export default {
    name: 'OtherCategories',

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
            this.loading.index = true;

            const response = await http.get('/categories');

            this.loading.index = false;

            if (response.status === 200)
            {
                // Filter the data
                const filter = {
                    enabled: true,
                };

                const data = Data.filterArray({
                    data: response.data.data,
                    filter: filter,
                });

                data.sort((a, b) => a.order - b.order);

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
