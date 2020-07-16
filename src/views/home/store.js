// Base store
import { baseStates, baseMutations, baseActions, baseGetters } from '@/stores/base';

/**
 * A home page state.
 */
export const home = {
    namespaced: true,

    state:
    {
        ...baseStates,
    },

    mutations:
    {
        ...baseMutations,
    },

    actions:
    {
        ...baseActions,
    },

    getters:
    {
        ...baseGetters,
    },
};
