<template>
    <t-card>
        <div class="t-float-right"
            v-margin.right
            v-margin.top>
            <t-icon
                class="t-text-primary"
                :type="'file-text-o'"/>
            {{ item.totalArticle }}
        </div>
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

            <p class="t-text-muted"
                v-margin.remove>
                Last update 2 days ago
            </p>
        </t-card-body>
        <t-card-footer
            class="t-text-center">
            <t-icon
                class="t-text-primary"
                :type="'info-circle'"
                :size="'2x'"/>

            <p class="t-text-muted">
                {{ item.description }}
            </p>
        </t-card-footer>
    </t-card>
</template>

<script>
export default {
    name: 'Info',

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },
    },
};
</script>
