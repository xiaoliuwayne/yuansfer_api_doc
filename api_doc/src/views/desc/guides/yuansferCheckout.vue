<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div class="desc-area">
                    <h2>Yuansfer Checkout</h2>
                    <p class="p-font">
                        A secure Payment Page hosted by Yuansfer that makes processing Alipay, WeChat Pay, and CUP transactions easier than ever. Yuansfer Checkout can be added to a site or an App in a few hours and easily configured to an existing payment page; this allows merchants to build, market, scale, and internationalize online business quickly.
                    </p>
                    <table>
                        <tr>
                            <th style="width: 116px">
                                Supported platforms
                            </th>
                            <th style="width: 180px">Alipay</th>
                            <th style="width: 135px">WeChat Pay</th>
                            <th style="width: 72px">CUP</th>
                        </tr>
                        <tr>
                            <td>
                               PC Web
                            </td>
                            <td>
                                <span @click="handleCellClick('yuansfer_checkout_pcalipayqrcode')" style="display: inline-block">Generate QR Code</span>
                                <span @click="handleCellClick('yuansfer_checkout_pcAlipayWallet')" style="display: inline-block">Login Alipay Wallet website</span>
                            </td>
                            <td><span @click="handleCellClick('yuansfer_checkout_pcWechatpayQRcode')">Generate QR Code</span></td>
                            <td><span @click="handleCellClick('yuansfer_checkout_pcUnionpayKeyin')">Keyed-in</span></td>
                        </tr>
                        <tr>
                            <td>Mobile Web</td>
                            <td>Redirect Alipay Wallet</td>
                            <td>Generate QR Code</td>
                            <td>Keyed-in</td>
                        </tr>
                        <tr>
                            <td>In-App</td>
                            <td><span @click="handleCellClick('yuansfer_checkout_appAlipayWallet')">Redirect Alipay Wallet</span></td>
                            <td>Generate QR Code</td>
                            <td>Keyed-in</td>
                        </tr>
                        <tr>
                            <td>WeChat Official Account</td>
                            <td>N/A</td>
                            <td><span @click="handleCellClick('yuansfer_checkout_pcWechatpayWallet')">WeChat Wallet</span></td>
                            <td>Keyed-in</td>
                        </tr>
                    </table>

                    <div class="mark-box">
                        <table>
                            <tr>
                                <td>
                                    <img src="../../../assets/imgs/tanhao.png" alt=""/>
                                </td>
                                <td>
                                    <div>
                                        Yuansfer Checkout is best use on a PC Web, since scanning a Generate QR Code with WeChat App on the same mobile device requires extra steps. It is recommended that you use YIP for In-App integration.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="mark-box">
                        <table>
                            <tr>
                                <td class="one-line-1td">
                                    <img src="../../../assets/imgs/tanhao.png" alt=""/>
                                </td>
                                <td class="one-line-2td">
                                    <div>
                                        Contact <span>Yuansfer Support</span> to also accept Visa, Mastercard, Discover, and Amex on Yuansfer Checkout.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <h3>How It Works</h3>
                    <p class="p-font">
                        When customers finish shopping and check out at your online store, they are seamlessly taken to our secure hosted payment page to complete the payment process.
                    </p>

                    <h4>Yuansfer Checkout payment flow:</h4>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_pcalipayqrcode">PC Web/Alipay Generate QR Code</p>
                        <el-row v-for="(rowData,index) in pcAlipayQRcode" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_pcAlipayWallet">PC Web/ login Alipay Wallet Website</p>
                        <el-row v-for="(rowData,index) in pcAlipayWallet" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_pcWechatpayQRcode">PC Web/WeChat Generate Pay QR Code</p>
                        <el-row v-for="(rowData,index) in pcWechatpayQRcode" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_appAlipayWallet">In-app/redirect Alipay Wallet</p>
                        <el-row v-for="(rowData,index) in appAlipayWallet" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_pcWechatpayWallet">WeChat Official Account/WeChat Pay Wallet</p>
                        <el-row v-for="(rowData,index) in pcWechatpayWallet" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="step-img">
                        <p class="p-subtitle" id="yuansfer_checkout_pcUnionpayKeyin">PC Web/UnionPay Keyed-in</p>
                        <el-row v-for="(rowData,index) in pcUnionpayKeyin" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "yuansferCheckout",
        data(){
            return{
                pcAlipayQRcode: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_1.svg'),
                            stepDesc: '1. Customer selects Alipay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_2.svg'),
                            stepDesc: '2. Generate QR Code shows up on Alipay hosted page'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_3.svg'),
                            stepDesc: '3.Customer scan with Alipay App'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_5.svg'),
                            stepDesc: '4. Customer authenticates payment'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_6.svg'),
                            stepDesc: '5. Payment successful'
                        },
                        {
                            index:5,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_7.svg'),
                            stepDesc: '6. Redirects customer back to site'
                        }
                    ],
                ],
                pcAlipayWallet: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_1 Copy.svg'),
                            stepDesc: '1. Customer selects Alipay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/Web_Alipay_2.svg'),
                            stepDesc: '2. Customer authenticates payment on Alipay hosted page'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/Web_Alipay_3.svg'),
                            stepDesc: '3. Payment successful'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/Web_Alipay_4.svg'),
                            stepDesc: '4. Redirects customer back to site'
                        }
                    ],
                ],
                pcWechatpayQRcode: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_WeChat_QRcode_1.svg'),
                            stepDesc: '1. Customer selects WeChat Pay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_WeChat_QRcode_2.svg'),
                            stepDesc: '2. Generate QR Code shows up on Yuansfer hosted page'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_WeChat_QRcode_3.svg'),
                            stepDesc: '3.Customer scan with WeChat App'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_WeChat_QRcode_5.svg'),
                            stepDesc: '4. Customer authenticates payment'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_WeChat_QRcode_6.svg'),
                            stepDesc: '5. Payment successful'
                        },
                        {
                            index:5,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_Alipay_QRcode_7 Copy.svg'),
                            stepDesc: '6. Redirects customer back to site'
                        }
                    ],
                ],
                appAlipayWallet: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_1.svg'),
                            stepDesc: '1. Customer selects Alipay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_2.svg'),
                            stepDesc: '2. Review transaction on Alipay App'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_3.svg'),
                            stepDesc: '3. Customer authenticates payment'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_4.svg'),
                            stepDesc: '4. Payment successful'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_5.svg'),
                            stepDesc: '5. Redirects customer back to mobile site'
                        },
                    ],
                ],
                pcWechatpayWallet: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/App_WeChat_1.svg'),
                            stepDesc: '1. Customer selects WeChat Pay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/App_WeChat_2.svg'),
                            stepDesc: '2. Review transaction'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/App_WeChat_3.svg'),
                            stepDesc: '3. Customer authenticates payment'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/App_WeChat_4.svg'),
                            stepDesc: '4. Payment successful'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YuansferCheckout/MobileApp_Alipay_5 Copy.svg'),
                            stepDesc: '5. Redirects customer back to mobile site'
                        }
                    ],
                ],
                pcUnionpayKeyin: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_UnionPay_1.svg'),
                            stepDesc: '1. Customer selects UnionPay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_UnionPay_3.svg'),
                            stepDesc: '2. Customer enters card number on Yuansfer hosted page'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YuansferCheckout/WEB_UnionPay_2.svg'),
                            stepDesc: '3. Customer authenticates payment'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YuansferCheckout/Web_Alipay_4 Copy.svg'),
                            stepDesc: '4. Redirects customer back to site'
                        }
                    ],
                ],
            }
        },
        methods: {
            returnTop(id){
                console.log('id', id)
                document.querySelector('#'+id).scrollIntoView(true);
            },
            handleCellClick(id){
                if(id){
                    this.returnTop(id)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
</style>