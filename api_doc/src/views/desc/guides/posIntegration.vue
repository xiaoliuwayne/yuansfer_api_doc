<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h2 id="title_pos_integration">POS Integration</h2>
                    <p class="p-font">
                        Integrate Alipay and WeChat Pay in your point of sale via Yuansfer API or an SDK; enabling you to seamlessly accept Chinese customer’s preferred home payment method in-store. There are two integration options you can use to initiate Alipay and WeChat Pay depending on your need.
                    </p>

                    <h3>Available integration options</h3>

                    <p class="p-subtitle font-bold">Generate QR Code</p>
                    <p class="p-font">
                        If your point of sale has a customer facing screen that you can use to generate and launch a QR Code at checkout, then your customers can scan the QR Code on the screen with their wallet app to complete the payment.
                    </p>
                    <h4>POS Generate QR Code payment flow:</h4>
                    <div class="step-img">
                        <el-row v-for="(rowData,index) in posGenerateQRcode" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>

                    <p class="p-subtitle font-bold">Scan QR Code</p>
                    <p class="p-font">
                        Your cashier uses a QR Code Scanner or a Yuansfer Smart Terminal (terminal) to complete payment by scanning a customer’s QR Code presented at checkout. It is the most familiar payment flow to your shoppers from abroad. It also does not require your shopper to have an active internet connection to complete a payment.
                    </p>

                    <h4>POS Generate QR Code payment flow:</h4>
                    <div class="step-img">
                        <el-row v-for="(rowData,index) in posScanQRcode" :key="index">
                            <el-col :span="12" v-for="colData in rowData" :key="colData.index">
                                <div><img :src="colData.img" alt=""/></div>
                                <p>{{colData.stepDesc}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH} from "@/assets/js/common";

    export default {
        name: "posIntegration",
        data(){
            return{
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                posGenerateQRcode: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_WeChat_1.svg'),
                            stepDesc: '1. Cashier selects WeChat Pay on POS'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_WeChat_2.svg'),
                            stepDesc: '2. Generate QR Code shows up on screen'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_WeChat_3.svg'),
                            stepDesc: '3. Customer scans the QR Code with WeChat App'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_WeChat_4.svg'),
                            stepDesc: '4. Payment successful'
                        },
                    ],
                ],
                posScanQRcode: [
                    [
                        {
                            index:0,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_Alipay_1.svg'),
                            stepDesc: '1. Merchant selects Alipay Pay on POS'
                        },
                        {
                            index:1,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_Alipay_2.svg'),
                            stepDesc: '2. Customer presents QR Code'
                        },
                        {
                            index:2,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_Alipay_3.svg'),
                            stepDesc: '3. Terminal prompts cashier to scan customer’s QR Code'
                        },
                        {
                            index:3,
                            img: require('@/assets/imgs/guides/POSIntegration/POS_WeChat_4 Copy.svg'),
                            stepDesc: '4. Payment successful'
                        },
                    ],
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
    .font-bold{
        font-weight: bold;
    }
</style>