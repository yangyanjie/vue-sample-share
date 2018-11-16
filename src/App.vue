<template>
    <div id="app">
        <!-- <div class="view" v-if="loading">
           
        </div> -->
        <button class="btn" @click="handleGetList">Click Me</button>
        <!-- <router-view class="view" :class="{hide:loading}"></router-view> -->
    </div>
</template>

<script>
    import Lib from '@/assets/js/Lib'
    import {
        mapGetters
    } from 'vuex';

    export default {
        name: 'app',
        computed: {
            ...mapGetters({
                loading: 'loading',
            })
        },
        mounted() {
            Lib.ajaxPost({
                url: '/diamondConfig/getDiamondConfigListByPage',
                params: {
                    pageSize: 10,
                    pageNum: 0
                    
                },
                success: (res) => {
                    console.log(res);
                },
                error: (err) => {
                    
                }
            })
        },
        methods: {
            handleGetList() {
                 Lib.ajaxPost({
                    url: '/diamondConfig/getDiamondConfigListByPage',
                    params: {
                        pageSize: 10,
                        pageNum: 0
                        
                    },
                    success: (res) => {
                        console.log(res);
                    },
                    error: (err) => {
                        
                    }
                })
            }
        },
        
    };
</script>

<style lang="scss">
    @import './assets/css/reset.css';
    #app {
        width: 100%;
        height: 100%;
        .btn {
            display: block;
            margin: 100px auto;
            width: 200px;
            height: 50px;
            font-size: 30px;
        }
    }
</style>
