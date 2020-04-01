<template>
    <div>
        <el-container>
            <el-aside width="299px" class="modify-menu">
                <el-menu
                        :default-active="curMenu"
                        @select="handleMenu"
                        class="el-menu-vertical"
                        @open="handleOpen"
                        @close="handleClose"
                        menu-trigger="hover"
                        :unique-opened="true"
                        background-color="#fff"
                        text-color="#3C414D"
                        active-text-color="#47A2FF">
                    <div>
                        <el-row>
                            <el-col :span="14">
                                <div><img src="../assets/imgs/yuansfer_logo.png" alt="logo"/></div>
                            </el-col>
                            <el-col :span="10">
                                <a href="http:www.baidu.com">DOCS</a>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <el-input placeholder="Search" v-model="search"
                                  prefix-icon="el-icon-search">
                        </el-input>
                    </div>
                    <p>GUIDES</p>
                    <el-menu-item index="g_1" class="modify-menu">
                        <span slot="title">Getting Started</span>
                    </el-menu-item>
                    <el-menu-item index="g_2" class="modify-menu">
                        <span slot="title">Integrate faster with Yuansfer Checkout</span>
                    </el-menu-item>

                    <el-menu-item index="g_3" class="modify-menu">
                        <span slot="title">
                             Accept online payment with YIP
                        </span>
                    </el-menu-item>
                    <el-menu-item index="g_4" class="modify-menu">
                        <span slot="title">Accept in-store payments</span>
                    </el-menu-item>

                    <!--api reference-->
                    <p style="margin-top: 60px">API REFERENCE</p>
                    <el-menu-item index="r_1" class="modify-menu">
                        <span slot="title">Welcome</span>
                    </el-menu-item>
                    <el-menu-item index="r_2" class="modify-menu">
                        <span slot="title">Signing API parameters</span>
                    </el-menu-item>
                    <el-submenu index="r_3" class="modify-menu">
                        <template slot="title">
                            <span>Yuansfer Checkout</span>
                        </template>
                        <el-menu-item index="r_3_1" class="modify-menu">
                            <span slot="title">secure-pay()</span>
                        </el-menu-item>
                        <el-menu-item index="r_3_2" class="modify-menu">
                            <span slot="title">update-recurring()</span>
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_4" class="modify-menu">
                        <template slot="title">
                            <span>Yuansfer Integrated Payment(VIP)</span>
                        </template>
                        <el-menu-item index="r_4_1">
                            add()
                        </el-menu-item>
                        <el-menu-item index="r_4_2">
                            pay()
                        </el-menu-item>
                        <el-menu-item index="r_4_3">
                            create-trans-qrcode()
                        </el-menu-item>
                        <el-menu-item index="r_4_4">
                            reverse()
                        </el-menu-item>
                        <el-menu-item index="r_4_5">
                            auth-capture()
                        </el-menu-item>
                        <el-menu-item index="r_4_6">
                            auth-unfreeze()
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_5">
                        <template slot="title">
                            <span>Point of Sale Integration API</span>
                        </template>
                        <el-menu-item index="r_5_1">
                            prepay()
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_6">
                        <template slot="title">
                            <span>Data Search API</span>
                        </template>
                        <el-menu-item index="r_6_1">
                            refund()
                        </el-menu-item>
                        <el-menu-item index="r_6_2">
                            tran-query()
                        </el-menu-item>
                        <el-menu-item index="r_6_3">
                            trans-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_4">
                            settle-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_5">
                            withdrawal-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_6">
                            data-status()
                        </el-menu-item>
                        <el-menu-item index="r_6_7">
                            Common Object Definition
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_7">
                        <template slot="title">
                            <span>Notes</span>
                        </template>
                        <el-menu-item index="r_7_1">
                            Response return code
                        </el-menu-item>
                        <el-menu-item index="r_7_2">
                            Transaction status
                        </el-menu-item>
                        <el-menu-item index="r_7_3">
                            Instant Payment Notification
                        </el-menu-item>
                        <el-menu-item index="r_7_4">
                            Callback Parameters
                        </el-menu-item>
                        <el-menu-item index="r_7_5">
                            Yuansfer Timezone
                        </el-menu-item>
                        <el-menu-item index="r_7_6">
                            Demo of Online Payments API
                        </el-menu-item>
                        <el-menu-item index="r_7_7">
                            Demo of In-Store Payments API
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_8">
                        <template slot="title">
                            <span>Sandbox Environment</span>
                        </template>
                        <el-menu-item index="r_8_1">
                            Pay Treasure Sandbox Apk
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <el-row>
                <el-col :span="24"><div>
<!--                    guides-->
                    <get-start id="g_1" @func="getCurrentTab"></get-start>
                    <yuansfer-checkout id="g_2"></yuansfer-checkout>
                    <yuansfer-integrated-payment id="g_3"></yuansfer-integrated-payment>
                    <pos-integration id="g_4"></pos-integration>
<!--                    api reference-->
                    <welcome id="r_1"></welcome>
                    <signing-api-parameters id="r_2" :curTab="activeName"></signing-api-parameters>
                    <online-payment-api id="r_3"></online-payment-api>
                </div></el-col>
            </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import GetStart from '@/views/desc/guides/getStart'
    import YuansferCheckout from '@/views/desc/guides/yuansferCheckout'
    import YuansferIntegratedPayment from '@/views/desc/guides/yuansferIntegratedPayments'
    import PosIntegration from '@/views/desc/guides/posIntegration'

    import Welcome from '@/views/desc/reference/welcome'
    import SigningApiParameters from '@/views/desc/reference/signingApiParameters'
    import OnlinePaymentApi from '@/views/desc/reference/yuansferCheckout'
    export default {
        components: {
            GetStart,
            YuansferCheckout,
            YuansferIntegratedPayment,
            PosIntegration,
            Welcome,
            SigningApiParameters,
            OnlinePaymentApi,
            // SecurePay,
        },
        name: "mainPage",
        data(){
            return{
                curMenu: 'g_1',
                search: '',
                activeName: ''
            }
        },
        watch: {},
        methods: {
            getCurrentTab(data){
                this.activeName = data
            },
            handleMenu(index, indexPath){
                // click menu
                console.log('index', index, 'indexPath', indexPath)
                if(index){
                    this.returnTop(index)
                }
                if(index=='r_3_1'){
                    // index
                    let top = document.querySelector('#'+index).offsetTop
                    document.querySelector('#r_3_1_c').offsetTop = top
                }
            },
            handleOpen(key, keyPath) {
                // open menu that have submenu
                console.log('key+keyPath', key + keyPath);
                if(key){
                    this.returnTop(key)
                }
            },
            handleClose(key, keyPath) {
                console.log(key + '=' + keyPath);
            },
            returnTop(id){
                console.log('id', id)
                document.querySelector('#'+id).scrollIntoView(true);
            }
        }
    }
</script>

<style scoped lang="less">
    .el-menu-vertical{
        position:fixed;
        z-index:1;
        text-align: left;
    }
    .el-main{
        padding: 0;
    }
    .modify-menu /deep/ .el-menu-item, .el-submenu__title {
        height: 30px;
        line-height: 30px;
        position: relative;
        -webkit-box-sizing: border-box;
        white-space: nowrap;
    }
    .modify-menu /deep/ .el-submenu__title{
        height: 30px!important;
        line-height: 30px!important;
    }
    .modify-menu{
        p{
            padding: 0 20px;
        }
        a{
            text-decoration: none;
            color: #47A2FF;
            line-height: 74px;
            padding: 3px;
            background: rgba(71,162,255,0.1);
        }
        img{
            width:141px;
            padding: 20px 5px 20px 20px;
        }
        .el-input{
            width: 83%;
            margin-left: 20px;
        }
    }

</style>