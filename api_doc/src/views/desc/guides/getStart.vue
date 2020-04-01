<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div ref="getStart">
                    <h1>Yuansfer Developer Guide</h1>

                    <h3>Getting Started</h3>
                    <p>Learn how to integrate with Yuansfer to accept cross-border payments such as Alipay and WeChat Pay on your eCommerce and in-store Point of Sale System.</p>
                    <img src="../../../assets/imgs/getStart_table.png" alt=""/>

                    <h4>Integrate faster with Yuansfer Checkout</h4>
                    <p>Redirect your customer to a secure, out-of-the-box solution that is hosted by Yuansfer (or Alipay) with a single integration. </p>

                    <h4>Start with your use case</h4>
                    <a href="https://docs.yuansfer.com/">Accept online payments</a>
                    <p>Let your Chinese customers pay with their preferred payment methods on your website, App, or WeChat Mini Program by integrating to Yuansfer Integrated Payments (YIP).</p>
                    <a href="https://docs.yuansfer.com/">Accept in-store payments</a>
                    <p>Integrate Yuansfer to your point of sale.</p>

                    <h5>Sandbox <img src="" /></h5>
                    <p>Use our sandbox to test Yuansfer experience before becoming a Yuansfer merchant or going production.</p>
                </div>
            </el-col>
            <el-col :span="7" class="modify">
                <el-tabs v-model="activeName" @tab-click="handleClick"
                         type="card"
                         class="lang-tabs">
                    <el-tab-pane label="cURL" name="curl" style="color: aliceblue">
                    </el-tab-pane>
                    <el-tab-pane label="PHP" name="php">
                    </el-tab-pane>
                    <el-tab-pane label="Java" name="java">
                    </el-tab-pane>
                    <el-tab-pane label="Go" name="go"></el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "getStart",
        data(){
            return{
                activeName: 'curl',
            }
        },
        mounted(){
            this.$emit('func',this.activeName)
        },
        methods: {
            handleClick(){
                this.$emit('func',this.activeName)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.css";
    .modify /deep/ .el-tabs--card>.el-tabs__header {
        border-bottom: none;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-bottom: 1px solid transparent;
        border-left: none;
        border-right: none;
        color: #fff;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #47A2FF;
        color: #47A2FF;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav {
        border: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .lang-tabs{
        background: #0D0D1E;
        position: fixed;
        z-index: 1;
    }
</style>