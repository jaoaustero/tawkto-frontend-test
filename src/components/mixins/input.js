import { ClassUtil } from '@/utils';

export default {
    props:
    {
        /**
         * Minimize the style of input
         */
        blank:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Display a message and turn the form into danger color
         */
        error:
        {
            type: String,
            default: null,
        },

        /**
         * Information about the input
         */
        label:
        {
            type: String,
            default: null,
        },

        /**
         * Add small margin on vertical
         */
        margin:
        {
            type: Boolean,
            default: true,
        },

        /**
         * Dimension of the input
         *
         * @values small, large
         */
        size:
        {
            type: String,
            default: null,
        },

        /**
         * Makes the border green to show to the user the data
         * is correct
         */
        success:
        {
            type: Boolean,
            default: false,
        },

        /**
         * Specify the value of the input
         */
        value:
        {
            default: null,
        },

        /**
         * Specify the fix width size
         *
         * @values xsmall, small, medium, large
         */
        fixedWidth:
        {
            type: String,
            default: null,
        },

        /**
         * Specify the width based on width component
         *
         * @values 1-*, 2-*, 3-^, 4-^, 5-^
         */
        width:
        {
            type: String,
            default: null,
        },
    },

    computed:
    {
        wrapperClasses()
        {
            return ClassUtil.join(
                this.margin && 't-margin'
            );
        },

        classes()
        {
            return ClassUtil.join(
                't-input',
                this.blank
                    ? 't-form-blank'
                    : '',
                this.success && 't-form-success',
                this.size && `t-form-${this.size}`,
                this.fixedWidth
                    ? `t-form-width-${this.fixedWidth}`
                    : this.width && `t-width-${this.width}`,
                this.error && 't-form-danger'
            );
        },

        labelClasses()
        {
            return ClassUtil.join(
                't-form-label',
                this.error && 't-text-danger',
                this.success && 't-text-success'
            );
        },
    },
};
