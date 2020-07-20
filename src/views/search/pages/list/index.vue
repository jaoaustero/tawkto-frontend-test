<template>
    <div>
        <div v-margin
            class="t-text-center">
            Showing result for "
            <span class="t-text-primary">
                {{ $route.params.title }}
            </span>"
        </div>

        <div v-if="isLoading('index')">
            <div class="t-text-center">
                <p>Loading search results...</p>
            </div>
        </div>
        <div v-margin
            v-else>
            <t-list v-if="!isLoading('index') && items.length">
                <item
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"/>
            </t-list>

            <div v-else
                class="t-text-center">
                <div v-margin>
                    <t-icon
                        :type="'search'"
                        :size="'3x'"/>
                </div>

                <div>
                    <p class="t-text-bold">
                        No search result
                    </p>
                    <p>
                        Please, try again or <span class="t-text-primary">Submit a ticket</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

// Component
import Item from './item';

export default {
    name: 'SearchResultList',

    components:
    {
        Item,
    },

    created()
    {
        this.initialize();
    },

    computed:
    {
        ...mapGetters({
            items: 'search/items',
            isLoading: 'search/isLoading',
        }),
    },

    methods:
    {
        ...mapActions({
            load: 'search/load',
        }),

        initialize()
        {
            /**
             * If initial load was empty array
             * we will emit the search
             */
            if (!this.items.length)
            {
                this.search();
            }
        },

        async search()
        {
            const response = await this.load(`/search/${this.$route.params.title}`);

            if (response.status === 200)
            {
                return response;
            }
            else
            {
                alert(response);
            }
        },
    },
};
</script>
