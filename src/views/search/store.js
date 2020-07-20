// Base store
import { baseStates, baseMutations, baseActions, baseGetters } from '@/stores/base';

export const search = {
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
