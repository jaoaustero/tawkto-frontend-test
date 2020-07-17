<template>
    <div>
        <div class="t-text-center">
            <p class="t-text-title
                t-text-muted">
                Other categories
            </p>
        </div>

        <div class="t-flex t-flex-middle"
            v-margin.top>
            <div class="t-margin-medium-right">
                <t-button
                    :text="true"
                    @click="prevCategory">
                    <t-icon
                        :type="'angle-left'"
                        :size="'3x'"
                        class="t-text-primary"/>
                </t-button>
            </div>

            <div class="t-flex-1">
                <t-grid>
                    <t-width
                        v-for="(item, index) in filterItems"
                        :key="index"
                        :xsmall="'1-1'"
                        :small="'1-1'"
                        :medium="'1-3'"
                        :large="'1-3'"
                        :xlarge="'1-3'">
                        <item
                            :item="item"/>
                    </t-width>
                </t-grid>
            </div>

            <div class="t-margin-medium-left">
                <t-button
                    :text="true"
                    @click="nextCategory">
                    <t-icon
                        :type="'angle-right'"
                        :size="'3x'"
                        class="t-text-primary"/>
                </t-button>
            </div>
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

    computed:
    {
        /**
         * We filter the item by removing the current category active
         * and returning only 3 items.
         */
        filterItems()
        {
            const data = this.items.filter((item) => item.id !== this.$route.params.id);

            return data.slice(0, 3);
        },
    },

    methods:
    {
        /**
         * A HTTP GET method to call an endpoint for API
         * to get the list of categories.
         */
        async initialize()
        {
            // Set loading
            this.loading.index = true;

            const response = await http.get('/categories');

            // Unset loading
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

        /**
         * A method that will move the last index
         * into first index.
         */
        prevCategory()
        {
            const item = this.items.pop();
            this.items.unshift(item);
        },

        /**
         * A method that will move the first index
         * into last index.
         */
        nextCategory()
        {
            const item = this.items.shift();
            this.items.push(item);
        },
    },
};
</script>
