<template>
    <div id="app">
        <the-header />

        <main class="t-main-wrapper">
            <transition
                name="t-fade"
                mode="out-in">
                <router-view />
            </transition>
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
</style>
