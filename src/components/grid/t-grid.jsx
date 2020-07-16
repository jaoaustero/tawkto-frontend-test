import { ClassUtil } from '@/utils/class';

/**
 * Creates a full responsive, fluid and nestable grid layout.
 * @displayName Grid
 */
export default {
    name: 'TawkGrid',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Creates border between elements
         */
        divider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Determine the space between
         * @values small, medium, large, collapse
         */
        gutter:
        {
            type: String,
            default: null,
        },

        /**
         * Foce all child to be same height
         */
        matchHeight:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { props, data, children })
    {
        return h(
            'div',

            {
                class: ClassUtil.join(
                    't-grid',
                    props.gutter && `t-grid-${props.gutter}`,
                    props.divider && 't-grid-divider',
                    props.matchHeight && 't-grid-match'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
