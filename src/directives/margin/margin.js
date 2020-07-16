/**
 * A utility to add spacing between components
 * @displayName Margin
 */
export default {
    bind(el, binding)
    {
        const size = binding.value || null;

        if (binding.modifiers.remove)
        {
            if (binding.modifiers.top)
            {
                el.classList.add('t-margin-remove-top');
            }

            else if (binding.modifiers.left)
            {
                el.classList.add('t-margin-remove-left');
            }

            else if (binding.modifiers.bottom)
            {
                el.classList.add('t-margin-remove-bottom');
            }

            else if (binding.modifiers.right)
            {
                el.classList.add('t-margin-remove-right');
            }

            else
            {
                el.classList.add('t-margin-remove');
            }
        }

        else
        {
            if (binding.modifiers.top)
            {
                if (size)
                {
                    el.classList.add(`t-margin-${size}-top`);
                }
                else
                {
                    el.classList.add('t-margin-top');
                }
            }

            else if (binding.modifiers.left)
            {
                if (size)
                {
                    el.classList.add(`t-margin-${size}-left`);
                }
                else
                {
                    el.classList.add('t-margin-left');
                }
            }

            else if (binding.modifiers.bottom)
            {
                if (size)
                {
                    el.classList.add(`t-margin-${size}-bottom`);
                }
                else
                {
                    el.classList.add('t-margin-bottom');
                }
            }

            else if (binding.modifiers.right)
            {
                if (size)
                {
                    el.classList.add(`t-margin-${size}-right`);
                }
                else
                {
                    el.classList.add('t-margin-right');
                }
            }

            else
            {
                if (size)
                {
                    el.classList.add(`t-margin-${size}`);
                }
                else
                {
                    el.classList.add('t-margin');
                }
            }
        }
    },
};
