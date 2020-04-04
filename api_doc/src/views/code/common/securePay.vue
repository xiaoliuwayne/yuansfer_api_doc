<template>
    <div v-highlight class="code-area">
        <p>HTTP Request</p>
        <p class="http-code">{{curCode.httpRequest}}</p>
        <p>Example Request</p>
        <pre>
            <code :class="curCode.hlClass">{{curCode.exampleRequest}}</code>
        </pre>
        <p>Example Response</p>
        <pre>
            <code class="json">{{curCode.exampleResponse}}</code>
        </pre>
    </div>
</template>

<script>
    export default {
        name: "securePay",
        props:{
            curTab: {
                type: String,
                default: '',
            }
        },
        data(){
            return{
                showCode: {
                    curl: {
                        hlClass: 'json',
                        httpRequest: 'POST https://mapi.yuansfer.com/online/v2/secure-pay',
                        exampleRequest: `
        curl "https://mapi.yuansfer.com/online/v2/secure-pay" \\
        -d amount="1.00" \\
        -d storeNo="300014" \\
        -d currency="USD" \\
        -d merchantNo="200043" \\
        -d callbackUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d terminal="ONLINE" \\
        -d ipnUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d reference="seq_1525922323" \\
        -d vendor="alipay" \\
        -d verifySign="4f0cc35728849e4b4aa4a176f4a5edac"`,
                        exampleResponse: `
        {
            "result":{
                "amount": "0.01",
                "reference": "44444",
                "transactionNo": "297245675773319174",
                "cashierUrl": "https://*****"
            },
            "ret_msg": "prepay success ",
            "ret_code": "000100"
        }`
                    },
                    php: {
                        hlClass: 'php',
                        httpRequest: 'POST https://mapi.yuansfer.com/online/v2/secure-pay',
                        exampleRequest: `
        php "https://mapi.yuansfer.com/online/v2/secure-pay" \\
        -d amount="1.00" \\
        -d storeNo="300014" \\
        -d currency="USD" \\
        -d merchantNo="200043" \\
        -d callbackUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d terminal="ONLINE" \\
        -d ipnUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d reference="seq_1525922323" \\
        -d vendor="alipay" \\
        -d verifySign="4f0cc35728849e4b4aa4a176f4a5edac"`,
                        exampleResponse: `
        {
            "result":{
                "amount": "0.01",
                "reference": "44444",
                "transactionNo": "297245675773319174",
                "cashierUrl": "https://*****"
            },
            "ret_msg": "prepay success ",
            "ret_code": "000100"
        }`
                    },
                    java: {
                        hlClass: 'java',
                        httpRequest: 'POST https://mapi.yuansfer.com/online/v2/secure-pay',
                        exampleRequest: `
        java "https://mapi.yuansfer.com/online/v2/secure-pay" \\
        -d amount="1.00" \\
        -d storeNo="300014" \\
        -d currency="USD" \\
        -d merchantNo="200043" \\
        -d callbackUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d terminal="ONLINE" \\
        -d ipnUrl="https://wx.yuansfer.yunkeguan.com/wx" \\
        -d reference="seq_1525922323" \\
        -d vendor="alipay" \\
        -d verifySign="4f0cc35728849e4b4aa4a176f4a5edac"`,
                        exampleResponse: `
        {
            "result":{
                "amount": "0.01",
                "reference": "44444",
                "transactionNo": "297245675773319174",
                "cashierUrl": "https://*****"
            },
            "ret_msg": "prepay success ",
            "ret_code": "000100"
        }`
                    },
                },
                curCode: {
                    hlClass: '',
                    httpRequest: '',
                    exampleRequest: ``,
                    exampleResponse: ``
                }
            }
        },
        watch: {
            curTab: function (curVal) {
                if(curVal){
                    this.curCode = Object.assign(this.curCode, this.showCode[curVal]);
                    console.log('curCode', this.curCode)
                }
            }
        },
        mounted(){}
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>