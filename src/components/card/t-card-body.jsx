import { ClassUtil } from '@/utils';

/**
 * A section of card for main content
 * @displayName Card Body
 */
export default {
    name: 'TawkCardBody',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: ClassUtil.join(
                    't-card-body'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
