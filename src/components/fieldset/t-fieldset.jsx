import { ClassUtil } from '@/utils';

/**
 * Create seperation of sections in one form
 * @displayName Fieldset
 */
export default {
    name: 'TawkFieldset',

    functional: true,

    inheritAttrs: false,

    props:
    {
        /**
         * A title for specific section of long form
         */
        legend:
        {
            type: String,
            default: null,
        },
    },

    render(h, { props, data, children })
    {
        return h(
            'fieldset',

            {
                class: ClassUtil.join(
                    't-fieldset'
                ),

                staticClass: data.staticClass,
            },

            [
                props.legend && h(
                    'legend',

                    {
                        class: ClassUtil.join(
                            't-legend'
                        ),
                    },

                    props.legend
                ),

                children,
            ]
        );
    },
};
