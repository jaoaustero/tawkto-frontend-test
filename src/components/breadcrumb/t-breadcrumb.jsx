import { ClassUtil } from '@/utils';

/**
 * Show the current location of the site
 * @displayName Breadcrumb
 */
export default {
    name: 'TawkBreadcrumb',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * A collection of links
         */
        items:
        {
            type: Array,
            default: null,
        },
    },

    render(h, { props })
    {
        const lastItem = (props.items.length - 1);

        return h(
            'ul',

            {
                class: ClassUtil.join(
                    't-breadcrumb'
                ),
            },

            [
                props.items.map((item, index) =>
                {
                    const link = h(
                        't-breadcrumb-item',

                        {
                            props:
                            {
                                active: lastItem === index,
                                href: item.href,
                            },
                        },

                        item.label
                    );

                    return link;
                }),
            ]
        );
    },
};
