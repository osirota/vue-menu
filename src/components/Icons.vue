<template>
    <div class="icon">
        <div v-if="icon" class="icon-wrapper">
            <img :src="iconSrc" :alt="icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        props: {
            icon: {
                type: String,
                default: null,
                required: true
            }
        },
        computed: {
            iconSrc: function() {
                return require(`@/assets/${this.icon}.svg`)
            }
        },
    }
</script>

<style scoped lang="scss">
    .icon {
        &-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
</style>
