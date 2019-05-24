<template>
    <div id="app">
        <transition name="fade">
            <keep-alive include="Index">
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    export default {
        created() {}
    };
</script>

<style lang="less">
    @import "../css/_mixin.less";

    .fade-enter-active,
    .fade-leave-active {
        .transition(all 0.5s);
    }
    .fade-enter-active {
        position: relative;
        z-index: 5;
    }
    .fade-leave-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
    }
    .fade-enter,
    .fade-leave-to {
        .opacity(0);
    }
    .fade-enter-to,
    .fade-leave {
        .opacity(1);
    }

    a:focus {
        text-decoration: none;
    }
</style>
