import { ClassUtil } from '@/utils';

/**
 * Display a collection of items into list style
 * @displayName List
 */
export default {
    name: 'TawkList',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Add a bullet or middle dot before of the list
         */
        bullet:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add divider of each list
         */
        divider:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Add dots between 2 children span insider
         * of the <li>
         */
        leader:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify specific spacing of each element
         * @values medium, large, xlarge
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Add a light gray background every Odd of items
         */
        striped:
        {
            type: Boolean,
            default: false,
        },
    },

    render(h, { data, props, children })
    {
        return h(
            'ul',

            {
                class: ClassUtil.join(
                    't-list',
                    props.leader && 't-list-leader',

                    !props.leader
                        ? props.bullet && 't-list-bullet'
                        : '',

                    !props.leader
                        ? props.divider && 't-list-divider'
                        : '',

                    props.size && `t-list-${props.size}`,
                    props.striped && 't-list-striped'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
