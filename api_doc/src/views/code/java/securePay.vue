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
        name: "securePay",
        data(){
            return{
                showCode: {
                    httpRequest: 'POST https://mapi.yuansfer.com/online/v2/secure-pay',
                    exampleRequest: `
        public class SecurepayTest {
            public static final String TEST_URL = "https://mapi.yuansfer.yunkeguan.com";            //Testing domain
            public static final String PROD_URL = "https://mapi.yuansfer.com";                      //Production domain
            public static final String YUANSFER_TOKEN = "5c5fe30183be69fceff8174358d4b8ae";

            public static void main(String[] args) {
                YuansferVerifySignHelper helper = new YuansferVerifySignHelper();

                YuansferSecurepayDto dto = paramSetting();
                Map<String, Object> params = ReflectionUtils.convertBean2MapIgnoreNullVal(dto, new String[]{"serialVersionUID"});
                String verifySign = helper.getYuansferVerifySign(params, YUANSFER_TOKEN);
                params.put("verifySign", verifySign);

                String url = TEST_URL + "/online/v2/secure-pay";
                String ret = HttpClientUtils.post(url, null, params);
                System.out.println(ret);
            }

            public static YuansferSecurepayDto paramSetting() {
                YuansferSecurepayDto dto = new YuansferSecurepayDto();
                /**
                 * merchantNo,storeNo is necessory, and they are provided by Yuansfer
                 */
                dto.setMerchantNo("200043");                                                //The Merchant NO.
                dto.setStoreNo("300014");                                                   //The Store NO.

                /**
                 * transaction infomation is necessory
                 */
                dto.setAmount("0.01");                                                      //The amount, unit "division"
                dto.setCurrency("USD");                                                     //currency, "USD"
                dto.setIpnUrl("https://nengjtian.s1.natapp.cc/login/test");                 //Asynchronous callback address
                dto.setCallbackUrl("https://nengjtian.s1.natapp.cc/login/test2");           //Synchronous callback address
                dto.setReference("9091023122");                                             //order NO. of client's system
                dto.setTerminal("ONLINE");                                                  //"ONLINE" or "WAP"
                dto.setTimeout("120");                                                      //unit "minute"
                dto.setVendor("alipay");                                                    //“alipay","wechatpay" or "unionpay"

                /**
                 * note，desription are optional
                 */
                dto.setDescription("test-description");                                     //description
                dto.setNote("test-note");                                                   //note

                return dto;
            }
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