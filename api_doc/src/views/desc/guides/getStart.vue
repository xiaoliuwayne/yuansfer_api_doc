<template>
    <div class="enhance">
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h1>Yuansfer Developer Guide</h1>
                    <hr />
                    <h2>Getting Started</h2>
                    <p class="p-font">
                        Learn how to integrate with Yuansfer to accept cross-border payments such as Alipay and WeChat Pay on your eCommerce and in-store Point of Sale System.
                    </p>
                    <img src="../../../assets/imgs/guides/GetStarted.svg" alt=""/>

                    <h3 @click="handleTitleClick('title_yuansfer_checkout')" class="title-curson">Integrate faster with Yuansfer Checkout</h3>
                    <p class="p-font">
                        Redirect your customer to a secure, out-of-the-box solution that is hosted by Yuansfer (or Alipay) with a single integration.
                    </p>

                    <h3>Start with your use case</h3>
                    <a class="p-a title-curson" @click="handleTitleClick('title_yip')">Accept online payments</a>
                    <p class="p-font">
                        Let your Chinese customers pay with their preferred payment methods on your website, App, or WeChat Mini Program by integrating to Yuansfer Integrated Payments (YIP).
                    </p>
                    <a class="p-a title-curson" @click="handleTitleClick('title_pos_integration')">Accept in-store payments</a>
                    <p class="p-font">Integrate Yuansfer to your point of sale.</p>

                    <h5 @click="handleSandbox">Sandbox <img class="sandbox-img" src="../../../assets/imgs/icon/link.svg"/></h5>
                    <p class="p-font">Use our sandbox to test Yuansfer experience before becoming a Yuansfer merchant or going production.</p>
                </div>
            </el-col>
            <el-col :span="rightWidth" class="modify">
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

        <el-dialog
                width="30%"
                :show-close="false"
                :visible.sync="curDialog">
            <div slot="title">
                <label class="dialog-title">Create a Sandbox Account</label>
                <hr>
            </div>
            <el-form :model="form" :rules="rules" ref="form">
                <h6>Merchant Name (required)</h6>
                <el-form-item label="" prop="applyName">
                    <el-input v-model.trim="form.applyName" auto-complete="off"></el-input>
                </el-form-item>
                <h6>Email (required)</h6>
                <el-form-item label="" prop="applyEmail">
                    <el-input v-model.trim="form.applyEmail" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-btn">
                <el-button type="primary" @click="submit" :disabled="disabled">Create</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {validateNull, COL_WIDTH} from '@/assets/js/common'
    export default {
        name: "getStart",
        data(){
            return{
                activeName: 'curl',
                curDialog: false,
                disabled: false,
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                // https://onlinecontract.yuansfer.com/contract/storeTestaccount/add?applyName=test2222&applyEmail=2222%40dd.dd&isvFlag=0
                form: {
                    applyName:'',
                    applyEmail:'',
                    isvFlag: 0
                },
                rules: {
                    applyName: [
                        { validator: validateNull, trigger: 'blur', label: 'Merchant Name'}
                    ],
                    applyEmail: [
                        { validator: validateNull, trigger: 'blur', label: 'Email'},
                    ],
                }
            }
        },
        mounted(){
            this.$emit('func',this.activeName)
        },
        watch:{
            curDialog:{
                handler: function (curVal, oldVal) {
                    console.log(curVal, oldVal);
                    if(!curVal){
                        this.form = {
                            applyName: '',
                            applyEmail: '',
                            isvFlag: 0
                        };
                        this.disabled = false;
                    }
                }
            }
        },
        methods: {
            handleClick(){
                // for tab click
                this.$emit('func',this.activeName)
            },
            handleSandbox(){
                this.curDialog = true
            },
            submit(){
                this.disabled = true;
                this.curDialog = false;
            },
            returnTop(id){
                console.log('id', id)
                document.querySelector('#'+id).scrollIntoView(true);
            },
            handleTitleClick(id){
                if(id){
                    this.returnTop(id)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
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
        width: 33%;
    }
    img{
        padding-top: 30px;
    }
    h5{
        font-size: 14px;
    }
    h6{
        font-size: 14px;
        margin-bottom: 5px;
    }
    .sandbox-img{
        padding: 0;
        width: 8px;
    }
    .dialog-title{
        font-size: 24px;
        color: #000;
        font-weight: bold;
    }
    .el-input{
        width: 55%;
    }
    .enhance /deep/ .el-dialog__body{
        padding: 5px 20px;
    }
    .dialog-btn{
        text-align: left;
    }
    .title-curson{
        cursor: pointer;
    }
</style>