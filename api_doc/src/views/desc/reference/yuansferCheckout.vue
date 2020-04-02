<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>Online Payments API</h3>
                    <p>Use the Online Payments API to easily and securely accept online payments. The Yuansfer secure payment interface provides online payment services, including China UnionPay, Alipay and WeChat Pay and credit card.
                    </p>
                    <h5>Online payment workflow</h5>
                    <img src="../../../assets/imgs/sflow-en.png" alt=""/>
                    <ol>
                        <li>The Merchant's system submits the order to the Yuansfer system when a customer places an order.</li>
                        <li>The Yuansfer system checks if the request is valid.</li>
                        <li>
                            The Yuansfer system leads the customer to the Cashier Page to check out. The Cashier Page displays a different payment method depending on the selected payment service.
                        </li>
                        <li>
                            The customer confirms payment on Cashier Page.
                        </li>
                        <li>The Yuansfer system sends the payment result to the Merchant's system.</li>
                        <li>The Merchant's system shows the payment result to the customer.</li>
                    </ol>

                    <p>Note: Some screenshots of the Cashier Page</p>
                    <div>
                        <img src="../../../assets/imgs/cashier-alipay.png"/>
                        <p>Cashier Page for Alipay payment service.</p>
                    </div>
                    <div>
                        <img src="../../../assets/imgs/cashier-wechatpay.png"/>
                        <p>Cashier Page for WeChat Pay payment service.</p>
                    </div>
                    <div>
                        <img src="../../../assets/imgs/cashier-unionpay.png"/>
                        <p>Cashier Page for UnionPay payment service.</p>
                    </div>
                    <div>
                        <img src="../../../assets/imgs/cashier-creditcard.png"/>
                        <p>Cashier Page for credit card payment.</p>
                    </div>

                    <h4 id="r_3_1">secure-pay()</h4>
                    <p>Use the secure-pay() API to pay for an order.</p>
                    <h5>HTTP Request</h5>
                    <p>POST https://mapi.yuansfer.com/online/v2/secure-pay</p>

                    <h5>Request Parameters</h5>
                    <div>
                        <img src="../../../assets/imgs/cashier-creditcard.png"/>
                        <p>Cashier Page for credit card payment.</p>
                    </div>
                    <h5>Response</h5>
                    <div>
                        <img src="../../../assets/imgs/cashier-creditcard.png"/>
                        <p>Cashier Page for credit card payment.</p>
                    </div>
                    <h5>result object</h5>


                    <h4 id="r_3_2">update-recurring()</h4>
                    <p>You can use the update-recurring() API modify automatic deduction rules.</p>
                    <h5>HTTP Request</h5>
                    <p>POST https://mapi.yuansfer.com/creditpay/v2/update-recurring</p>
                    <div>
                        <img src="../../../assets/imgs/cashier-creditcard.png"/>
                        <p>Cashier Page for credit card payment.</p>
                    </div>
                    <h5>Request Parameter</h5>

                    <h5>HTTP Request</h5>
                </div>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "onlinePaymentAPI"
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>