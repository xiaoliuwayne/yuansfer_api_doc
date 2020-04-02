<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>Yuansfer Integrated Payments (YIP)</h3>
                    <p>Optimized for mobile apps and WeChat Mini Program, YIP is a secure integration path that renders Alipay, WeChat Pay, and Union Pay in your own payment form.</p>
                    <img src="../../../assets/imgs/yip_table.png"/>
                    <div><img src="../../../assets/imgs/tanhao.png" alt=""/>
                        <span><a href="https://www.yuansfer.com">Yuansfer Checkout</a> is the only available integration option to enable Alipay on Web platforms.</span>
                    </div>
                    <div><img src="../../../assets/imgs/tanhao.png" alt=""/>
                        <span>Contact <a href="https://www.yuansfer.com">Yuansfer Tech Support</a>  to enable Alipay and WeChat Pay using Yuansfer mobile SDKs.
                    </span></div>
                    <h4>How It Works</h4>
                    <p>During the in-app payment process, your customer authorizes the push of funds through a direct to Alipay or WeChat Wallet. There is immediate confirmation about the success or failure of a payment.</p>

                    <h5>Yuansfer Checkout payment flow:</h5>
                    <p>PC Web/WeChat Pay Generate QR Code</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on PC Web</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3.Customer scan with WeChat App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Customer authenticates payment</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>5. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>6. Redirects customer back to site</p>
                        </el-col>
                    </el-row>

                    <p>In-app/redirect Alipay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction on Alipay App</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p> 5. Redirects customer back to mobile site</p>
                        </el-col>
                    </el-row>

                    <p>WeChat Mini Program/WeChat Pay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer checkout with WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction on WeChat</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
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
        name: "yuansferIntegratedPayments"
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>