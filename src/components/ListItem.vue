<template>
    <div class="list-item">
        <div class="list-item-cover" @click="download" :style="{'background-image': `url(${item.image.thumb.url})`}">
            <div class="list-item-dimention">
                {{item.width + ' X ' + item.height}}
            </div>
        </div>
        <div class="list-item-operation" title="喜欢">
            <div class="list-item-button">
                <i class="el-icon-star-off"></i>
                {{item.likes_count}}
            </div>
            <div class="list-item-button" title="下载" @click="download">
                <i class="el-icon-download"></i>
                {{item.user_count}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list-item',
    props: ['item'],
    methods: {
        download() {
            window.open(this.item.image.url);
        }
    }
}
</script>

<style lang="less">
    .list-item {
        display: inline-block;
        position: relative;
        width: 240px;
        height: 170px;
        margin: 15px;
        border-radius: 10px;
        background-color: rgba(200, 200, 200, 0.4);
        overflow: hidden;
        .list-item-cover {
            position: relative;
            width: 220px;
            height: 130px;
            margin: 10px 10px 0 10px;
            cursor: pointer;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            &:hover {
                .list-item-dimention {
                    opacity: 1;
                }
            }
            .list-item-dimention {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                color: #fff;
                text-align: center;
                line-height: 30px;
                user-select: none;
                background-color: rgba(0, 0, 0, 0.6);
                opacity: 0;
                transition: .3s opacity;
            }
        }
        .list-item-operation {
            padding: 0 10px;
            text-align: right;
            .list-item-button {
                display: inline-block;
                cursor: pointer;
                user-select: none;
                line-height: 28px;
                margin-right: 5px;
            }
        }
    }
</style>
