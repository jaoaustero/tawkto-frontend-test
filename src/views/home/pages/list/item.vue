<template>
    <t-button
        :text="true"
        :fullWidth="true"
        @click="viewCategory">
        <t-card>
            <t-card-body
                class="t-text-center">
                <t-icon
                    class="t-text-primary"
                    :type="item.icon"
                    :size="'3x'"/>

                <p class="t-text-lead
                        t-text-bold"
                    v-margin.top>
                    {{ item.title }}
                </p>

                <div v-margin.top>
                    <p class="t-text-primary"
                        v-margin.remove>
                        {{ item.totalArticle }} articles
                    </p>
                    <p class="t-text-muted"
                        v-margin.remove>
                        Last update 2 days ago
                    </p>
                </div>
            </t-card-body>
        </t-card>
    </t-button>
</template>

<script>
// Vuex
import { mapActions } from 'vuex';

export default {
    name: 'HomeListItem',

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },
    },

    methods:
    {
        ...mapActions({
            select: 'home/select',
        }),

        viewCategory()
        {
            // Push in the view page
            this.$router.push({ path: `/${this.item.id}` });

            // Set state
            this.select(this.item);
        },
    },
};
</script>
