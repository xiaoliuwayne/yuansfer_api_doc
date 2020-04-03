<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h2>Signing API parameters</h2>
                    <p class="p-font">
                        Signing the API parameters is a feature that allows you to secure your Yuansfer API calls, by using MD5 encryption and authenticated hash.
                    </p>
                    <p class="p-font">
                        You will need to retrieve your <strong>API token</strong> from the Yuansfer Dashboard in order to build the parameters of your API calls. API parameters must be
                        signed with MD5 encryption.
                    </p>
                    <h3>
                        Building the API parameter signature
                    </h3>
                    <p class="p-font">
                        To sign the API parameters, you need to follow these steps:
                    </p>
                    <ol>
                        <li v-for="(item,index) in steps" :key="index" v-html="item"></li>
                    </ol>

                    <h3>
                        EXAMPLE
                    </h3>
                    <p class="p-subtitle">
                        Consider the following parameters:
                    </p>
                    <ul>
                        <li v-for="(item,index) in parameters" :key="index" v-html="'<strong>'+item.name+'</strong>'+item.value"></li>
                    </ul>
                    <h5>1. Sort the parameters alphabetically</h5>
                    <ul>
                        <li v-for="(item,index) in parametersSort" :key="index" v-html="'<strong>'+item.name+'</strong>'+item.value"></li>
                    </ul>

                    <h5>2. Concatenate the parameter names and values using '=' and '&' character</h5>
                    <p class="p-font p-bg">
                        amount=1.00&callbackUrl=https://wx.yuansfer.yunkeguan.com/wx& currency=USD&goodsInfo=[{"goods_name":"Yuansfer","quantity":"1"}]&ipnUrl=https://wx.yuansfer.yunkeguan.com/wx&merchantNo=200043&reference=seq_1525922323&storeNo=300014&terminal=ONLINE&timeout=120&vendor=alipay
                    </p>

                    <h5>3. Append MD5 hash value of API token with '&' prefix.</h5>
                    <p class="p-font">
                        When the <strong>API token</strong> is <span class="p-bg">5cbfb079f15b150122261c8537086d77a</span>, the <strong>MD5 hash value</strong> is <span class="p-bg">186abea4b8610d7ff03768255588597a</span>.
                    </p>
                    <p class="p-font">So the <strong>result string</strong> is :</p>
                    <p class="p-font p-bg">
                        amount=1.00&callbackUrl=https://wx.yuansfer.yunkeguan.com/wx& currency=USD&goodsInfo=[{"goods_name":"Yuansfer","quantity":"1"}]&ipnUrl=https://wx.yuansfer.yunkeguan.com/wx&merchantNo=200043&reference=seq_1525922323&storeNo=300014&terminal=ONLINE&timeout=120&vendor=alipay&186abea4b8610d7ff03768255588597a
                    </p>
                    <h5>4. Calculate MD5 hash value of Step 3 result string.</h5>
                    <p class="p-font">
                        <strong>MD5 hash value</strong> is <span class="p-bg">b6bfd66531ae7c9499115c7480a2c8aa</span>
                    </p>
                </div>
            </el-col>
            <el-col :span="rightWidth">
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
    import {COL_WIDTH} from "@/assets/js/common";

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
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                steps: [
                    'Sort the parameters alphabetically according to the parameter name.',
                    "Concatenate the parameter names and values using '=' and '&' character.",
                    "Append the MD5 hash value of your <strong>API token</strong> to the end of your parameters with the '&' prefix.",
                    'Calculate the MD5 hash value of the Step 3 result.'
                ],
                parameters: [
                    {
                        name: 'amount',
                        value: " = '1.00'",
                    },
                    {
                        name: 'storeNo',
                        value: " = '300014'",
                    },
                    {
                        name: 'currency',
                        value: " = 'USD'",
                    },
                    {
                        name: 'merchantNo',
                        value: " = '200043'",
                    },
                    {
                        name: 'callbackUrl',
                        value: " = 'https://wx.yuansfer.yunkeguan.com/wx'",
                    },
                    {
                        name: 'terminal',
                        value: " = 'ONLINE'",
                    },
                    {
                        name: 'ipnUrl',
                        value: " = 'https://wx.yuansfer.yunkeguan.com/wx'",
                    },
                    {
                        name: 'reference',
                        value: " = 'seq_1525922323'",
                    },
                    {
                        name: 'vendor',
                        value: " = 'alipay'",
                    },
                    {
                        name: 'goodsInfo',
                        value: " = '[{\"goods_name\":\"Yuansfer\",\"quantity\":\"1\"}]'",
                    },
                    {
                        name: 'timeout',
                        value: " = '120'",
                    }
                ]
            }
        },
        computed: {
            parametersSort: function () {
                let tmp = []
                for(let item of this.parameters){
                    tmp.push(item)
                }
                return this.sortByKey(tmp, 'name')
            }
        },
        methods: {
            sortByKey(ary, key) {
                return ary.sort(function (a, b) {
                    let x = a[key]
                    let y = b[key]
                    return ((x < y) ? -1 : (x > y) ? 1 : 0)
                })

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
    h5{
        font-size: 14px;
    }

</style>