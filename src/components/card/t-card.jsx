import { ClassUtil } from '@/utils';

/**
 * Container with gutter and other differnt style
 * @displayName Card
 */
export default {
    name: 'TawkCard',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a background color
         *
         * @values default, primary, secondary
         */
        color:
        {
            type: String,
            default: 'default',
        },

        /**
         * Adding box-shadow when mouse over on the card
         */
        hover:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Change the card size by adjusting the gutters
         *
         * @values small, large
         */
        size:
        {
            type: String,
            default: null,
        },
    },

    render(h, { children, data, props })
    {
        return h(
            'div',

            {
                class: ClassUtil.join(
                    't-card',
                    props.color && `t-card-${props.color}`,
                    props.hover && 't-card-hover',
                    props.size && `t-card-${props.size}`
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
