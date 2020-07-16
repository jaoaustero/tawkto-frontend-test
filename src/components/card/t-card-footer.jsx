import { ClassUtil } from '@/utils';

/**
 * A section of card for action buttons
 * @displayName Card Footer
 */
export default {
    name: 'TawkCardFooter',

    functional: true,

    inheritAttrs: false,

    render(h, { children, data })
    {
        return h(
            'div',

            {
                class: ClassUtil.join(
                    't-card-footer'
                ),

                staticClass: data.staticClass,
            },

            children
        );
    },
};
