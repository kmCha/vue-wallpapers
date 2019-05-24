<template>
    <div id="app">
        <transition name="fade">
            <el-container>
                <el-header>
                    <div class="main-wrap">
                        <span class="site-title">kM Wallpaper</span>
                    </div>
                </el-header>
                <el-main>
                    <div class="main-wrap">
                        <keep-alive include="Index">
                            <router-view/>
                        </keep-alive>
                    </div>
                </el-main>
                <el-footer>
                    <div class="main-wrap">
                        footer
                    </div>
                </el-footer>
            </el-container>
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

    #app {
        .el-header {
            line-height: 60px;
            box-shadow: inset 0 0 5px #ccc;
            background-color: #eee;
            .site-title {
                font-weight: bold;
                font-size: 20px;
            }
        }
        .main-wrap {
            position: relative;
            width: 1100px;
            margin: auto;
        }
    }

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
