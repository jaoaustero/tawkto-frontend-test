<template>
    <header class="t-header-wrapper">
        <div>
            <div>
                <h1 class="t-text-title
                    t-margin-remove">
                    Knowledge base doesn't have to be boring
                </h1>
                <p class="t-margin-remove-bottom">
                    Everything you need to Manage your Messaging
                </p>
            </div>

            <div class="t-header-form"
                v-margin.top>
                <input class="t-input t-width-1-1"
                    placeholder="Search for answers"
                    v-model="title"
                    v-on:keyup.enter="search">
                <t-button
                    :color="'primary'"
                    :icon="true"
                    @click="search">
                    <t-icon
                        :type="'search'"/>
                </t-button>
            </div>
        </div>
    </header>
</template>

<script>
// Vuex
import { mapActions } from 'vuex';

export default {
    name: 'TheHeader',

    data()
    {
        return {
            title: '',
        };
    },

    methods:
    {
        ...mapActions({
            load: 'search/load',
        }),

        /**
         * Search method that will call an endpoint from API
         */
        async search()
        {
            const response = await this.load(`/search/${this.title}`);

            if (response.status === 200)
            {
                // Push into search results page
                this.$router.push({ path: `/search/${this.title}` });

                // Clear the form
                this.title = '';
            }
            else
            {
                alert(response);
            }
        },
    },
};
</script>
