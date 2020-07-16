<template>
    <div id="app">
        <the-header />

        <main class="t-main-wrapper">
            <t-container>
                <transition
                    name="t-fade"
                    mode="out-in">
                    <router-view />
                </transition>
            </t-container>
        </main>
    </div>
</template>

<script>
import TheHeader from '@/views/layouts/header';

export default {
    name: 'App',

    components:
    {
        TheHeader,
    },
};
</script>

<style lang="scss">
    @import './scss/app';
    @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
