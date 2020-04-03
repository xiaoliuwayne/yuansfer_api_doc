<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div class="desc-area">
                    <h2 id="title_yip">Yuansfer Integrated Payments (YIP)</h2>
                    <p class="p-font">
                        Optimized for mobile apps and WeChat Mini Program, YIP is a secure integration path that renders Alipay, WeChat Pay, and Union Pay in your own payment form.
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
                            <td>PC Web</td>
                            <td>N/A</td>
                            <td><span @click="handleCellClick('yip_pcWechatpayQRcode')">Generate QR Code</span></td>
                            <td>Keyed-in</td>
                        </tr>
                        <tr>
                            <td>Mobile Web</td>
                            <td>N/A</td>
                            <td>Generate QR Code</td>
                            <td>Keyed-in</td>
                        </tr>
                        <tr>
                            <td>In-App</td>
                            <td><span @click="handleCellClick('yip_appAlipayWallet')">Redirect Alipay Wallet</span></td>
                            <td>Redirect WeChat Wallet</td>
                            <td>Keyed-in</td>
                        </tr>
                        <tr>
                            <td>WeChat Mini Program</td>
                            <td>N/A</td>
                            <td><span @click="handleCellClick('yip_miniProgramWechatpay')">WeChat Wallet</span></td>
                            <td>N/A</td>
                        </tr>
                    </table>

                    <div class="mark-box">
                        <table>
                            <tr>
                                <td class="one-line-1td">
                                    <img src="../../../assets/imgs/icon/tanhao.png" alt=""/>
                                </td>
                                <td class="one-line-2td">
                                    <div>
                                        <span @click="handleCellClick('title_yuansfer_checkout')">Yuansfer Checkout</span> is the only available integration option to enable Alipay on Web platforms.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div class="mark-box">
                        <table>
                            <tr>
                                <td class="one-line-1td">
                                    <img src="../../../assets/imgs/icon/tanhao.png" alt=""/>
                                </td>
                                <td class="one-line-2td">
                                    <div>
                                        Contact <span>Yuansfer Tech Support</span>  to enable Alipay and WeChat Pay using Yuansfer mobile SDKs.
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <h3>How It Works</h3>
                    <p class="p-font">
                        During the in-app payment process, your customer authorizes the push of funds through a direct to Alipay or WeChat Wallet. There is immediate confirmation about the success or failure of a payment.
                    </p>

                    <h4>YIP payment flows:</h4>
                    <div class="step-img">
                        <p class="p-subtitle" id="yip_pcWechatpayQRcode">PC Web/WeChat Pay Generate QR Code</p>
                        <el-row v-for="(rowData,index) in pcWechatpayQRcode" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>

                    <div class="step-img">
                        <p class="p-subtitle" id="yip_appAlipayWallet">In-app/redirect Alipay Wallet</p>
                        <el-row v-for="(rowData,index) in appAlipayWallet" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>

                    <div class="step-img">
                        <p class="p-subtitle" id="yip_miniProgramWechatpay">WeChat Mini Program/WeChat Pay Wallet</p>
                        <el-row v-for="(rowData,index) in miniProgramWechatpay" :key="index">
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
        name: "yuansferIntegratedPayments",
        data(){
            return{
                pcWechatpayQRcode: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YIP/WEB_WeChat_QRcode_1.svg'),
                            stepDesc: '1. Customer selects WeChat Pay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YIP/WEB_WeChat_QRcode_2.svg'),
                            stepDesc: '2. Generate QR Code shows up on PC Web'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YIP/WEB_WeChat_QRcode_3.svg'),
                            stepDesc: '3. Customer scan with WeChat App'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YIP/WEB_WeChat_QRcode_5.svg'),
                            stepDesc: '4. Customer authenticates payment'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YIP/WEB_WeChat_QRcode_6.svg'),
                            stepDesc: '5. Payment successful'
                        },
                        {
                            index:5,
                            img: require('@/assets/imgs/guides/YIP/WEB_Alipay_QRcode_7 Copy.svg'),
                            stepDesc: '6. Redirects customer back to site'
                        }
                    ],
                ],
                appAlipayWallet: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YIP/MobileApp_Alipay_1.svg'),
                            stepDesc: '1. Customer selects Alipay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YIP/MobileApp_Alipay_2.svg'),
                            stepDesc: '2. Review transaction on Alipay App'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YIP/MobileApp_Alipay_3.svg'),
                            stepDesc: '3. Customer authenticates payment'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YIP/MobileApp_Alipay_4.svg'),
                            stepDesc: '4. Payment successful'
                        },
                        {
                            index:4,
                            img: require('@/assets/imgs/guides/YIP/MobileApp_Alipay_5.svg'),
                            stepDesc: '5. Redirects customer back to mobile site'
                        },
                    ],
                ],
                miniProgramWechatpay: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/YIP/MiniProgram_WeChat_3.svg'),
                            stepDesc: '1. Customer checkout with WeChat Pay'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/YIP/MiniProgram_WeChat_4.svg'),
                            stepDesc: '2. Review transaction on WeChat'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/YIP/App_WeChat_3.svg'),
                            stepDesc: '3. Customer authenticates payment'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/YIP/App_WeChat_4.svg'),
                            stepDesc: '4. Payment successful'
                        },
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