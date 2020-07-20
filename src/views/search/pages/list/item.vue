<template>
    <li>
        <t-card>
            <t-card-body>
                <div class="t-flex">
                    <div v-margin.right>
                        <t-icon
                            :type="item.icon"/>
                    </div>

                    <div class="t-flex-1">
                        <p v-margin.remove
                            class="t-text-primary">
                            {{ item.title }}
                        </p>

                        <p v-margin.remove>
                            {{ item.content }}
                        </p>
                    </div>

                    <div v-margin.left>
                        <t-icon
                            class="t-text-primary"
                            :type="'angle-right'"
                            :size="'2x'"/>
                    </div>
                </div>
            </t-card-body>
        </t-card>
    </li>
</template>

<script>
export default {
    name: 'SearchResultListItem',

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
