// Core
import Vue from 'vue';

// Timeago
import VueTimeago from 'vue-timeago';

// Store
import { store } from './stores';

// Routes
import { router } from './router';

// Entry file
import App from './App';

// UI Component
import './components';

// Directives
import './directives';

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
    name: 'Timeago',
    locale: 'en',
});

new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
});
