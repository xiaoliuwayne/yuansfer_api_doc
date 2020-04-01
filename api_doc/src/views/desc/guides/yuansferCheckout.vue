<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>Yuansfer Checkout</h3>
                    <p>A secure Payment Page hosted by Yuansfer that makes processing Alipay, WeChat Pay, and CUP transactions easier than ever. Yuansfer Checkout can be added to a site or an App in a few hours and easily configured to an existing payment page; this allows merchants to build, market, scale, and internationalize online business quickly.</p>
                    <img src="../../../assets/imgs/yuansferCheckout_table.png" alt=""/>
                    <div><img src="../../../assets/imgs/tanhao.png" alt=""/>
                        <span>Yuansfer Checkout is best use on a PC Web, since scanning a Generate QR Code with WeChat App on the same mobile device requires extra steps. It is recommended that you use YIP for In-App integration. </span>
                    </div>
                    <div><img src="../../../assets/imgs/tanhao.png" alt=""/>
                        <span>Contact <a href="https://www.yuansfer.com">Yuansfer Support</a> to also accept Visa, Mastercard, Discover, and Amex on Yuansfer Checkout.</span></div>

                    <h4>How It Works</h4>
                    <p>When customers finish shopping and check out at your online store, they are seamlessly taken to our secure hosted payment page to complete the payment process.</p>

                    <h5>Yuansfer Checkout payment flow:</h5>
                    <p>PC Web/Alipay Generate QR Code</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on Alipay hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3.Customer scan with Alipay App</p>
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
                    <p>PC Web/ login Alipay Wallet Website</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer authenticates payment on Alipay hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Redirects customer back to site</p>
                        </el-col>
                    </el-row>
                    <p>PC Web/WeChat Generate Pay QR Code </p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on Yuansfer hosted page</p>
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
                    <p>WeChat Official Account/WeChat Pay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction</p>
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
                    <p>PC Web/UnionPay Keyed-in</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects UnionPay </p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer enters card number on Yuansfer hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../../../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Redirects customer back to site</p>
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
        name: "yuansferCheckout"
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.css";

</style>