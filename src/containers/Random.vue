<template>
    <div class="container-index" v-loading="loading">
        <list-item v-for="item in list" :key="item.id" :item="item"></list-item>
        
        <el-button type="primary" round @click="getList">换一波</el-button>
    </div>
</template>

<script>
    import ListItem from "../components/ListItem.vue";
    import { getListRandom } from "../js/app/api.js";

    export default {
        name: "Random",
        components: {
            "list-item": ListItem
        },
        data() {
            return {
                list: [],
                loading: false
            };
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.loading = true;
                getListRandom({ page: this.page }).then(res => {
                    if (res.code === 1) {
                        this.list = res.list;
                        this.total = res.total;
                        this.pageSize = res.pageSize;
                    }
                    this.loading= false;
                }).catch(err => {
                    this.loading= false;
                });
            }
        }
    };
</script>

<style lang="less">
    .container-index {
        position: relative;
        width: 100%;
        overflow: hidden;
        text-align: center;
        .el-pagination {
            text-align: center;
        }
    }
</style>