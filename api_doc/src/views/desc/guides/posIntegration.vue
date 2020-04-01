<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>POS Integration</h3>
                    <p>Integrate Alipay and WeChat Pay in your point of sale via Yuansfer API or an SDK; enabling you to seamlessly accept Chinese customer’s preferred home payment method in-store. There are two integration options you can use to initiate Alipay and WeChat Pay depending on your need.
                    </p>

                    <h4>Available integration options</h4>
                    <h5>Generate QR Code</h5>
                    <p>If your point of sale has a customer facing screen that you can use to generate and launch a QR Code at checkout, then your customers can scan the QR Code on the screen with their wallet app to complete the payment.</p>
                    <h5>POS Generate QR Code payment flow:</h5>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Cashier selects WeChat Pay on POS</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on screen</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer scans the QR Code with WeChat App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>

                    <h5>Scan QR Code</h5>
                    <p>Your cashier uses a QR Code Scanner or a Yuansfer Smart Terminal (terminal) to complete payment by scanning a customer’s QR Code presented at checkout. It is the most familiar payment flow to your shoppers from abroad. It also does not require your shopper to have an active internet connection to complete a payment.
                    </p>
                    <h5>POS Generate QR Code payment flow:</h5>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Merchant selects Alipay Pay on POS</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer presents QR Code</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Terminal prompts cashier to scan customer’s QR Code</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>

                </div>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "posIntegration"
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.css";

</style>