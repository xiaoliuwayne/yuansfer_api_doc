<template>
    <div v-highlight class="code-area">
        <p>HTTP Request</p>
        <p class="http-code">{{showCode.httpRequest}}</p>
        <p>Example Request</p>
        <pre>
            <code class="php">{{showCode.exampleRequest}}</code>
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
        <?php
        function securepay()
        {
            $url = 'https://mapi.yuansfer.com/online/v2/secure-pay';
            $token = '5cbfb079f15b150122261c8537086d77a';

            $params = [
                'merchantNo' => '200043',
                'storeNo' => '300014',
                'amount' => '0.01',
                'currency' => 'USD',
                'vendor' => 'alipay',
                'ipnUrl' => 'https://nengjtian.s1.natapp.cc/login/test',
                'callbackUrl' => 'https://nengjtian.s1.natapp.cc/login/test2?transactionId={transactionId}&status={status}&amount={amount}&time={time}&reference={reference}&note={note}',
                'terminal' => 'ONLINE',
                'reference' => 'test2018070101',
                'description' => 'test_description',
                'note' => 'test_note',
                'timeout' => '120'
            ];

            ksort($params, SORT_STRING);
            $str = '';
            foreach ($params as $k => $v) {
                $str .= $k . '=' . $v . '&';
            }
            $params['verifySign'] = md5($str . md5($token));

            echo 'verifySign:', $params['verifySign'];
            echo "\\n";

            $ch = curl_init($url);
            curl_setopt_array($ch, array(
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HEADER => false,
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => http_build_query($params),
            ));

            $result = curl_exec($ch);
            curl_exec($ch);

            echo $result;
            echo "\\n";
            return json_decode($result, true);
        }

        securepay();
        ?>`,
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