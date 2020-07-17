<template>
    <li>
        <t-card>
            <t-card-body
                class="t-flex t-flex-middle">
                <div
                    v-margin.right>
                    <t-icon
                        class="t-text-primary"
                        :type="item.icon"
                        :size="'2x'"/>
                </div>

                <div class="t-flex-1">
                    <p class="t-text-lead"
                        v-margin.remove>
                        {{ item.title }}
                    </p>
                    <p class="t-text-muted"
                        v-margin.remove>
                        Updated {{ lastUpdated }}
                    </p>
                </div>

                <div v-margin.left>
                    <t-icon
                        class="t-text-primary"
                        :type="'angle-right'"
                        :size="'3x'"/>
                </div>
            </t-card-body>
        </t-card>
    </li>
</template>

<script>
// Utils
import { DateUtil } from '@/utils';

export default {
    name: 'ListItem',

    props:
    {
        item:
        {
            type: Object,
            required: true,
        },
    },

    computed:
    {
        lastUpdated()
        {
            return DateUtil.format(this.item.updatedOn);
        },
    },
};
</script>
