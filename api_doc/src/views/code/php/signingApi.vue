<template>
    <div v-highlight>
        <pre>
            <code class="php">
                {{curCode}}
            </code>
        </pre>
    </div>
</template>

<script>
    export default {
        name: "signingApi",
        data(){
            return{
                curCode: `
        <?php
        function getVerifySign()
        {
            $params = [
                'merchantNo' => '200043',
                'storeNo' => '300014',
                'date' => '20180620',
                'currency' => 'USD',
                'vendor' => 'alipay'
            ];

            ksort($params, SORT_STRING);
            $str = '';
            foreach ($params as $k => $v) {
                $str .= $k . '=' . $v . '&';
            }
            $params['verifySign'] = md5($str . md5($token));

            echo 'verifySign:', $params['verifySign'];
        }

        getVerifySign();
        ?>`
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
    code{
        padding: 30px 0 0 10px;
        text-align: left;
        color: #fff;
    }

</style>