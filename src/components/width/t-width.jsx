import { ClassUtil } from '@/utils';

/**
 * Define width of elements of different viewport size
 * @displayName Width
 */
export default {
    name: 'TawkWidth',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Set the width to be auto
         */
        auto:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Divides the grid into equal units depending on the avaiable space
         */
        expand:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add margin between width elements
         * @values small, medium, large
         */
        margin:
        {
            type: String,
            default: null,
        },

        /**
         * Set the width by fraction when the viewport reach xsmall size
         * @values 1-1, 1-2, 1-3, 1-4, 1-5, 1-6
         */
        xsmall:
        {
            type: String,
            default: null,
        },

        /**
         * Set the width by fraction when the viewport reach small size
         * @values 1-1, 1-2, 1-3, 1-4, 1-5, 1-6
         */
        small:
        {
            type: String,
            default: null,
        },

        /**
         * Set the width by fraction when the viewport reach medium size
         * @values 1-1, 1-2, 1-3, 1-4, 1-5, 1-6
         */
        medium:
        {
            type: String,
            default: null,
        },

        /**
         * Set the width by fraction when the viewport reach large size
         * @values 1-1, 1-2, 1-3, 1-4, 1-5, 1-6
         */
        large:
        {
            type: String,
            default: null,
        },

        /**
         * Set the width by fraction when the viewport reach xlarge size
         * @values 1-1, 1-2, 1-3, 1-4, 1-5, 1-6
         */
        xlarge:
        {
            type: String,
            default: null,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'div',

            {
                staticClass: data.staticClass,

                class: ClassUtil.join(
                    props.xsmall || props.small || props.medium || props.large || props.xlarge
                        ? ''
                        : props.auto
                            ? 't-width-auto'
                            : props.expand
                                ? 't-width-expand'
                                : '',
                    props.xsmall && `t-width-${props.xsmall}`,
                    props.small && `t-width-${props.small}@s`,
                    props.medium && `t-width-${props.medium}@m`,
                    props.large && `t-width-${props.large}@l`,
                    props.xlarge && `t-width-${props.xlarge}@xl`,
                    props.margin && `t-grid-margin-${props.margin}`
                ),
            },

            children
        );
    },
};
