import { ClassUtil } from '@/utils';

/**
 * Item or children of Breadcrumb
 * @displayName Breadcrumb Item
 */
export default {
    name: 'TawkBreadcrumItem',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * Identifier for current page
         */
        active:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Disabled the click event
         */
        disabled:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Location where to redirect
         */
        href:
        {
            type: String,
            default: null,
        },
    },

    render(h, { props, children })
    {
        return h(
            'li',

            {
                class: ClassUtil.join(
                    props.disabled && 't-disabled'
                ),
            },

            [
                props.active
                    ? h(
                        'span',

                        children
                    )

                    : props.disabled
                        ? h(
                            'a',

                            children
                        )

                        : h(
                            'router-link',

                            {
                                props:
                                {
                                    to: props.href,
                                },
                            },

                            children
                        ),

            ]
        );
    },
};
