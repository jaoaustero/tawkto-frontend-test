<template>
    <div>
        <t-grid>
            <t-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'2-5'"
                :large="'2-5'"
                :xlarge="'2-5'">
                <information
                    :item="selected"/>
            </t-width>

            <t-width
                :xsmall="'1-1'"
                :small="'1-1'"
                :medium="'3-5'"
                :large="'3-5'"
                :xlarge="'3-5'">
                <list />
            </t-width>
        </t-grid>

        <div>
            <other-categories />
        </div>
    </div>
</template>

<script>
// Vuex
import { mapGetters } from 'vuex';

// Meta
import { meta } from '@/meta';

// Components
import Information from './information';
import List from './list';
import OtherCategories from './other-categories';

export default {
    name: 'HomeView',

    mixins:
    [
        meta,
    ],

    components:
    {
        Information,
        List,
        OtherCategories,
    },

    data()
    {
        return {
            metaTitle: '[Category]',
        };
    },

    created()
    {
        // Set the title meta
        this.metaTitle = this.selected.title;
    },

    computed:
    {
        ...mapGetters({
            selected: 'home/selected',
        }),
    },
};
</script>
