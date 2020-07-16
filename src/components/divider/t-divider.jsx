import { ClassUtil } from '@/utils';

/**
 * Add a horizontal line or block element with title as divider of content
 * sections
 * @displayName Divider
 */
export default {
    name: 'TawkDivider',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Display a block with idle background and title
         */
        title:
        {
            type: String,
            default: null,
        },

        /**
         * Make the style dashed
         */
        dashed:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Make the style dotted
         */
        dotted:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props })
    {
        return props.title
            ? h(
                'div',

                {
                    class:
                        [
                            't-divider',
                        ],

                    staticClass: data.staticClass,
                },

                props.title
            )
            : h(
                'hr',

                {
                    class: ClassUtil.join(
                        't-hr',
                        props.dashed
                            ? 't-hr-dashed'
                            : props.dotted
                                ? 't-hr-dotted'
                                : ''
                    ),

                    staticClass: data.staticClass,
                }
            );
    },
};
