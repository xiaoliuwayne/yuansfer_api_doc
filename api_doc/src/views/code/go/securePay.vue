<template>
    <div v-highlight class="code-area">
        <p>HTTP Request</p>
        <p class="http-code">{{showCode.httpRequest}}</p>
        <p>Example Request</p>
        <pre>
            <code class="go">{{showCode.exampleRequest}}</code>
        </pre>
        <p>Example Response</p>
        <pre>
            <code class="json">{{showCode.exampleResponse}}</code>
        </pre>
    </div>
</template>

<script>
    export default {
        name: "securePay",
        data(){
            return{
                showCode: {
                    httpRequest: 'POST https://mapi.yuansfer.com/online/v2/secure-pay',
                    exampleRequest: `
        import (
            "fmt"
            "time"
            yuan "github.com/yuansfer/golang_sdk"
        )

        func securepay() {
            req := &yuan.Securepay{
                MerchantNo:  "200043", //customer The merchant NO.
                StoreNo:     "300014",
                Currency:    "USD",
                Amount:      "0.01",
                Vendor:      "wechatpay",
                Reference:   fmt.Sprintf("demo_%d", time.Now().Unix()), //sequence number of customer system
                IpnUrl:      "https://customer-ipn",        //internet accessible
                CallbackUrl: "https://customer-callback",   //internet accessible
                Description: "description",
                Note:        "note",
                Terminal:    "ONLINE",
                Timeout:     "120",
            }

            goods := "Yuansfer"
            quantity := "1"
            if quantity != "" && goods != "" {
                goodsInfos := []yuan.GoodsInfomation{
                    yuan.GoodsInfomation{
                        GoodsName: goods,
                        Quantity:  quantity,
                    },
                }
                _ = req.Format(goodsInfos)
            }

            resp, err := req.PostToYuansfer(yuansferToken)
            if err != nil {
                fmt.Println(err)
                return
            }
            fmt.Println(resp)
        }`,
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
            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>