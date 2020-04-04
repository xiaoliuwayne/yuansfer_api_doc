<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h2>Online Payments API</h2>
                    <p class="p-font">
                        Use the Online Payments API to easily and securely accept online payments. The Yuansfer secure payment interface provides online payment services, including China UnionPay, Alipay and WeChat Pay and credit card.
                    </p>
                    <h3>Online payment workflow</h3>
                    <div class="single-img">
                        <img src="../../../assets/imgs/reference/yuansferCheckout/flow.jpg" alt=""/>
                    </div>
                    <ol>
                        <li v-for="(item,index) in orderList" :key="index">{{item}}</li>
                    </ol>

                    <p class="p-font"><strong>Note</strong>: Some screenshots of the <strong>Cashier Page</strong></p>
                    <div class="single-img" v-for="(item,index) in cashierScreenshot" :key="index">
                        <img :src="item.img" alt=""/>
                        <p class="p-font" v-html="item.desc"></p>
                    </div>
                    <hr/>
                </div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
        <secure-pay :curTab="curTab"></secure-pay>
        <update-recurring :curTab="curTab"></update-recurring>
    </div>
</template>

<script>
    import {COL_WIDTH} from "@/assets/js/common";
    import SecurePay from "@/views/desc/reference/yuansferCheckout/securePay"
    import UpdateRecurring from "@/views/desc/reference/yuansferCheckout/updateRecurring"

    export default {
        name: "onlinePaymentAPI",
        components: {
            SecurePay,
            UpdateRecurring
        },
        props:{
            curTab: {
                type: String,
                default: '',
            }
        },
        data(){
            return{
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                orderList: [
                    "The Merchant's system submits the order to the Yuansfer system when a customer places an order.",
                    "The Yuansfer system leads the customer to the Cashier Page to check out. The Cashier Page displays a different payment method depending on the selected payment service.",
                    "The customer confirms payment on Cashier Page.",
                    "The Yuansfer system sends the payment result to the Merchant's system.",
                    "The Merchant's system shows the payment result to the customer.",
                ],
                cashierScreenshot: [
                    {
                        img: require('../../../assets/imgs/reference/yuansferCheckout/cashier-alipay.png'),
                        desc:'<strong>Cashier Page</strong> for Alipay payment service.'
                    },
                    {
                        img: require('../../../assets/imgs/reference/yuansferCheckout/cashier-wechatpay.png'),
                        desc:'<strong>Cashier Page</strong>  for WeChat Pay payment service.'
                    },
                    {
                        img: require('../../../assets/imgs/reference/yuansferCheckout/cashier-unionpay.png'),
                        desc:'<strong>Cashier Page</strong>  for UnionPay payment service.'
                    },
                    {
                        img: require('../../../assets/imgs/reference/yuansferCheckout/cashier-creditcard.png'),
                        desc:'<strong>Cashier Page</strong>  for credit card payment.'
                    }
                ],
            }
        },
        watch: {},
        mounted(){},
        methods: {}
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
    .desc-area{
        .single-img{
            img{
                width: 100%;
            }
            p{
                text-align: center;
            }
        }
        hr{
            margin-top: 60px;
        }
        h3{
            font-weight: bold;
        }
    }

</style>