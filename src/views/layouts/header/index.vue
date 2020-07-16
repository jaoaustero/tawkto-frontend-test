<template>
    <header class="t-header-wrapper">
        <div>
            <div>
                <h1 class="t-text-title
                    t-margin-remove">
                    Knowledge base doesn't have to be boring
                </h1>
                <p class="t-margin-remove-bottom">
                    Everything you need to Manage your Messaging
                </p>
            </div>

            <div class="t-header-form"
                v-margin.top>
                <t-input
                    :margin="false"
                    :width="'1-1'"
                    placeholder="Search for answers"/>
                <t-button
                    :color="'primary'"
                    :icon="true">
                    <t-icon
                        :type="'search'"/>
                </t-button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
};
</script>
