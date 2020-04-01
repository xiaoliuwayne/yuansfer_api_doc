<template>
    <div v-highlight>
        <pre>
            <code class="json">{{curCode}}</code>
        </pre>
    </div>
</template>

<script>
    export default {
        name: "securePay",
        data(){
            return{
                request: "<p>POST https://mapi.yuansfer.com/online/v2/secure-pay</p>",
                respond: '<p>curl "https://mapi.yuansfer.com/online/v2/secure-pay" \\' +
                    '-d amount="1.00" \\' +
                    '-d storeNo="300014" \\' +
                    '-d currency="USD" \\' +
                    '-d merchantNo="200043" \\' +
                    '</p>',
                result: '<p>{ "result":{ "amount": "0.01","transactionNo": "297245675773319174"},"ret_msg": "prepay success ",' +
                    '"ret_code": "000100"</p>'
            }
        },
        computed:{
            curCode: function () {
                return {"result":{ "amount": "0.01","transactionNo": "297245675773319174"},"ret_msg": "prepay success ","ret_code": "000100"}
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.css";

</style>