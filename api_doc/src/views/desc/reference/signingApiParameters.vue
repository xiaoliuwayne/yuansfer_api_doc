<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>Signing API parameters</h3>
                    <p>Signing the API parameters is a feature that allows you to secure your Yuansfer API calls, by using MD5 encryption and authenticated hash.
                    </p>
                    <p>
                        You will need to retrieve your API token from the Yuansfer Dashboard in order to build the parameters of your API calls. API parameters must be
                        signed with MD5 encryption.
                    </p>

                    <h4>
                        Building the API parameter signature
                    </h4>
                    <p>To sign the API parameters, you need to follow these steps:
                    </p>
                    <ol>
                        <li>Sort the parameters alphabetically according to the parameter name.</li>
                        <li>Concatenate the parameter names and values using '=' and '&' character.</li>
                        <li>Append the MD5 hash value of your API token to the end of your parameters with the '&' prefix.
                        </li>
                        <li>Calculate the MD5 hash value of the Step 3 result.</li>
                    </ol>

                    <h4>
                        EXAMPLE
                    </h4>
                    <p>
                        Consider the following parameters:
                    </p>
                    <ul>
                        <li>amount = '1.00'</li>
                        <li>storeNo = '300014'</li>
                        <li>currency = 'USD'</li>
                        <li>merchantNo = '200043'</li>
                        <li>callbackUrl = 'https://wx.yuansfer.yunkeguan.com/wx'</li>
                        <li>terminal = 'ONLINE'</li>
                        <li>ipnUrl = 'https://wx.yuansfer.yunkeguan.com/wx'</li>
                        <li>reference = 'seq_1525922323'</li>
                        <li>vendor = 'alipay'</li>
                        <li>goodsInfo = '[{"goods_name":"Yuansfer","quantity":"1"}]'</li>
                        <li>timeout = '120'</li>
                    </ul>

                    <p>1. Sort the parameters alphabetically</p>
                    <ul>
                        <li>amount = '1.00'</li>
                        <li>callbackUrl = 'https://wx.yuansfer.yunkeguan.com/wx'</li>
                        <li>currency = 'USD'</li>
                        <li>goodsInfo = '[{"goods_name":"Yuansfer","quantity":"1"}]'</li>
                        <li>ipnUrl = 'https://wx.yuansfer.yunkeguan.com/wx'</li>
                        <li>merchantNo = '200043'</li>
                        <li>reference = 'seq_1525922323'</li>
                        <li>storeNo = '300014'</li>
                        <li>terminal = 'ONLINE'</li>
                        <li>timeout = '120'</li>
                        <li>vendor = 'alipay'</li>
                    </ul>

                    <p>2. Concatenate the parameter names and values using '=' and '&' character</p>
                    <p>
                        amount=1.00&callbackUrl=https://wx.yuansfer.yunkeguan.com/wx& currency=USD&goodsInfo=[{"goods_name":"Yuansfer","quantity":"1"}]&ipnUrl=https://wx.yuansfer.yunkeguan.com/wx&merchantNo=200043&reference=seq_1525922323&storeNo=300014&terminal=ONLINE&timeout=120&vendor=alipay
                    </p>

                    <p>3. Append MD5 hash value of API token with '&' prefix.</p>
                    <p>When the API token is 5cbfb079f15b150122261c8537086d77a, the MD5 hash value is 186abea4b8610d7ff03768255588597a.
                    </p>
                    <p>So the result string is :</p>
                    <p>amount=1.00&callbackUrl=https://wx.yuansfer.yunkeguan.com/wx& currency=USD&goodsInfo=[{"goods_name":"Yuansfer","quantity":"1"}]&ipnUrl=https://wx.yuansfer.yunkeguan.com/wx&merchantNo=200043&reference=seq_1525922323&storeNo=300014&terminal=ONLINE&timeout=120&vendor=alipay&186abea4b8610d7ff03768255588597a</p>


                    <p>4. Calculate MD5 hash value of Step 3 result string.</p>
                    <p>MD5 hash value is b6bfd66531ae7c9499115c7480a2c8aa</p>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="show-code">
                    <signing-api-php v-show="curTab=='php'"></signing-api-php>
                    <signing-api-java v-show="curTab=='java'"></signing-api-java>
                    <signing-api-go v-show="curTab=='go'"></signing-api-go>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import SigningApiPhp from '@/views/code/php/signingApi'
    import SigningApiGo from '@/views/code/go/signingApi'
    import SigningApiJava from '@/views/code/java/signingApi'

    export default {
        name: "signingApiParameters",
        components:{
            SigningApiPhp,
            SigningApiGo,
            SigningApiJava
        },
        props:{
            curTab: {
                type: String,
                default: '',
            }
        },
        data(){
            return{

            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>