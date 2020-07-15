// Core
import Vue from 'vue';

// Store
// import { store } from './stores';

// Routes
import { router } from './router';

// Entry file
import App from './App';

// UI Component
// import './components';

// Directives
// import './directives';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    // store,
    render: (h) => h(App),
});
