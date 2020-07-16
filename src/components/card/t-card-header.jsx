import { ClassUtil } from '@/utils';

/**
 * A section of card for title
 * @displayName Card Header
 */
export default {
    name: 'TawkCardHeader',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: ClassUtil.join(
                    't-card-header'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
