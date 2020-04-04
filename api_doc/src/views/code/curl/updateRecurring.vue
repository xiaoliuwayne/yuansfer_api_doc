<template>
    <div v-highlight class="code-area">
        <p>HTTP Request</p>
        <p class="http-code">{{showCode.httpRequest}}</p>
        <p>Example Request</p>
        <pre>
            <code class="json">{{showCode.exampleRequest}}</code>
        </pre>
        <p>Example Response</p>
        <pre>
            <code class="json">{{showCode.exampleResponse}}</code>
        </pre>
    </div>
</template>

<script>
    export default {
        name: "updateRecurring",
        data(){
            return{
                showCode: {
                    httpRequest: 'POST https://mapi.yuansfer.com/creditpay/v2/update-recurring',
                    exampleRequest: `
        curl "https://mapi.yuansfer.com/creditpay/v2/update-recurring" \\
        -d scheduleNo="123123" \\
        -d storeNo="300014" \\
        -d currency="USD" \\
        -d merchantNo="200043" \\
        -d paymentCount="12"\\
        -d frequency="1"\\
        -d verifySign="4f0cc35728849e4b4aa4a176f4a5edac"\\`,
                    exampleResponse: `
        {
            "ret_msg": "update success ",
            "ret_code": "000100"
        }`
                },
            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>