<template>
    <div>
        <transition
            name="t-fade"
            mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Home',
};
</script>
