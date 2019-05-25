<template>
    <div id="app">
        <transition name="fade">
            <el-container>
                <el-header>
                    <div class="main-wrap">
                        <span class="site-title">kM Wallpaper</span>
                        <router-link class="site-nav-tab" :to="{name: 'all', params: {page: $route.params.page || 1}}">全部壁纸</router-link>
                        <router-link class="site-nav-tab" :to="{name: 'random'}">随机壁纸</router-link>
                    </div>
                </el-header>
                <el-main>
                    <div class="main-wrap">
                        <transition name="fade">
                            <router-view/>
                        </transition>
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
                margin-right: 20px;
            }
            .site-nav-tab {
                display: inline-block;
                margin: 0 5px;
                &.router-link-active {
                    color: #409EFF;
                }
            }
        }
        .main-wrap {
            position: relative;
            width: 1100px;
            margin: auto;

            .fade-enter-active,
            .fade-leave-active {
                .transition(all .5s);
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
        }
    }

    a:focus {
        text-decoration: none;
    }
</style>
