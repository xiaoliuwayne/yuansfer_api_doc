<template>
    <div v-highlight class="code-area">
        <p>HTTP Request</p>
        <p class="http-code">{{showCode.httpRequest}}</p>
        <p>Example Request</p>
        <pre>
            <code class="java">{{showCode.exampleRequest}}</code>
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
                    exampleRequest: ``,
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