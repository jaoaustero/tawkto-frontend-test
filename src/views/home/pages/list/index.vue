<template>
    <div>
        <t-grid
            v-if="!isLoading('index')"
            :gutter="'small'">
            <t-width
                v-for="(item, index) in filterItems"
                :key="index"
                :xsmall="'1-1'"
                :small="'1-2'"
                :medium="'1-2'"
                :large="'1-3'"
                :xlarge="'1-3'"
                class="t-margin-bottom">
                <item
                    :item="item"/>
            </t-width>
        </t-grid>

        <div
            v-else>
            Loading data...
        </div>
    </div>
</template>

<script>
// Vuex
import { mapActions, mapGetters } from 'vuex';

// Meta
import { meta } from '@/meta';

// Utils
import { Data } from '@/utils';

// Components
import Item from './item';

export default {
    name: 'HomeList',

    components:
    {
        Item,
    },

    mixins:
    [
        meta,
    ],

    data()
    {
        return {
            metaTitle: 'Home',
        };
    },

    created()
    {
        // Call HTTP GET request
        this.load('/categories');
    },

    computed:
    {
        ...mapGetters({
            items: 'home/items',
            isLoading: 'home/isLoading',
        }),

        /**
         * A computed method that will filter the data based
         * on the set of filters object
         */
        filterItems()
        {
            // Set the object of filters
            const filter = {
                enabled: true,
            };

            const data = Data.filterArray({
                data: this.items,
                filter: filter,
            });

            return data.sort((a, b) => a.order - b.order);
        },
    },

    methods:
    {
        ...mapActions({
            load: 'home/load',
        }),
    },
};
</script>
