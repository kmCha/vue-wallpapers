<template>
    <div class="container-index">
        <list-item v-for="item in list" :key="item.id" :item="item"></list-item>

        <el-pagination
            background
            layout="prev, pager, next, jumper"
            :current-page="page"
            :total="total"
            :page-size="pageSize"
            @current-change="pageChanged">
        </el-pagination>
    </div>
</template>

<script>
    import ListItem from "../components/ListItem.vue";
    import { getList } from "../js/app/api.js";

    export default {
        name: "Index",
        components: {
            "list-item": ListItem
        },
        data() {
            return {
                list: [],
                page: 1,
                total: 1,
                pageSize: 1
            };
        },
        watch: {
            '$route.params.page': function(value) {
                this.changePage(Number(value))
            }
        },
        created() {
            this.changePage(Number(this.$route.params.page))
        },
        methods: {
            getList() {
                getList({ page: this.page }).then(res => {
                    if (res.code === 1) {
                        this.list = res.list;
                        this.total = res.total;
                        this.pageSize = res.pageSize;
                    }
                });
            },
            changePage(page) {
                this.page = page;
                this.getList();
            },
            pageChanged(page) {
                this.$router.push({
                    name: 'index',
                    params: {
                        page
                    }
                })
            }
        }
    };
</script>

<style lang="less">
    .container-index {
        position: relative;
        width: 100%;
        overflow: hidden;
        .el-pagination {
            text-align: center;
        }
    }
</style>