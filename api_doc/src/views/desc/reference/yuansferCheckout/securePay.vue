<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h3 id="r_3_1">secure-pay()</h3>
                    <p class="p-font">Use the secure-pay() API to pay for an order.</p>
                    <h4>HTTP Request</h4>
                    <p class="p-font">
                        <span class="p-bg">
                             POST https://mapi.yuansfer.com/online/v2/secure-pay
                        </span>
                    </p>

                    <h4>Request Parameters</h4>
                    <div class="param-table">
                        <table>
                            <tr>
                                <th v-for="(item,index) in requestColumn" :key="index" :style="'width:'+item.curWidth">{{item.label}}</th>
                            </tr>
                            <tr v-for="(rowData,index) in requestTableData" :key="index">
                                <td v-for="colKey in Object.keys(rowData)" :key="colKey">
                                    <div v-if="colKey=='param'">
                                        <div v-html="'<strong>'+rowData[colKey][0]+'</strong>'"></div>
                                        <div v-html="rowData[colKey][1]" :class="rowData[colKey][1]=='required'? 'redColor':'normalColor'"></div>
                                    </div>
                                    <div class="param-desc" v-else v-html="rowData[colKey]"></div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <h4>Response</h4>
                    <div class="param-table">
                        <table>
                            <tr>
                                <th v-for="(item,index) in requestColumn" :key="index" :style="'width:'+item.curWidth">{{item.label}}</th>
                            </tr>
                            <tr v-for="(rowData,index) in responseTableData" :key="index">
                                <td v-for="colKey in Object.keys(rowData)" :key="colKey">
                                    <div v-if="colKey=='param'">
                                        <div v-html="'<strong>'+rowData[colKey][0]+'</strong>'"></div>
                                        <div v-if="rowData[colKey][1]" v-html="rowData[colKey][1]" :class="rowData[colKey][1]=='required'? 'redColor':'normalColor'"></div>
                                    </div>
                                    <div class="param-desc" v-else v-html="rowData[colKey]"></div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <h4><span class="p-bg">result</span> object</h4>
                    <div class="param-table">
                        <table>
                            <tr>
                                <th v-for="(item,index) in requestColumn" :key="index" :style="'width:'+item.curWidth">{{item.label}}</th>
                            </tr>
                            <tr v-for="(rowData,index) in resultTableData" :key="index">
                                <td v-for="colKey in Object.keys(rowData)" :key="colKey">
                                    <div v-if="colKey=='param'">
                                        <div v-html="'<strong>'+rowData[colKey][0]+'</strong>'"></div>
                                        <div v-if="rowData[colKey][1]" v-html="rowData[colKey][1]" :class="rowData[colKey][1]=='required'? 'redColor':'normalColor'"></div>
                                    </div>
                                    <div class="param-desc" v-else v-html="rowData[colKey]"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <hr/>
                </div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH, TABLE_COL} from "@/assets/js/common";

    export default {
        name: "securePay",
        data(){
            return{
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                requestColumn: TABLE_COL,
                requestTableData: [
                    {
                        param: ['merchantNo','required'],
                        type: 'string',
                        desc: `The ID of the merchant.`,
                    },
                    {
                        param: ['storeNo','required'],
                        type: 'string',
                        desc: `The ID of the store.`,
                    },
                    {
                        param: ['amount','optional'],
                        type: 'decimal',
                        desc: `<div>The transaction amount.</div>
<div>Either <span class="p-bg">amount</span> or <span class="p-bg">rmbAmount</span> is required.</div>`,
                    },
                    {
                        param: ['rmbAmount','optional'],
                        type: 'decimal',
                        desc: `<div>The transaction amount in RMB.</div>
<div>Either <span class="p-bg">amount</span> or <span class="p-bg">rmbAmount</span> is required.</div>`,
                    },
                    {
                        param: ['currency','required'],
                        type: 'enum',
                        desc: `<div>The three-character currency code that identifies the currency.</div>
<div>The possible values are: "<strong>USD</strong>".</div>`,
                    },
                    {
                        param: ['vendor','required'],
                        type: 'enum',
                        desc: `<div>The payment method.</div>
<div>The possible values are: "<strong>alipay</strong>", "<strong>wechatpay</strong>", "<strong>unionpay</strong>", "<strong>creditcard</strong>".</div>`,
                    },
                    {
                        param: ['ipnUrl','required'],
                        type: 'string',
                        desc: `<div>The Instant Payment Notification Handler url. IPN url must be secure.</div>
<div>For more details, see <span class="jump-method" data-param="1211" >here</span>.</div><div>For a list of parameters, see <span class="jump-method" data-param="1211" >here</span>.</div>`,
                    },
                    {
                        param: ['callbackUrl','required'],
                        type: 'string',
                        desc: `<div>The synchronous callback HTTP address to receive notification messages for events. The callback url follows macro substitution rules like <span class="p-bg">xxxcallback_url?trans_no={amount}&amount={amount}</span>, then Yuansfer will automatically replace the values of {}.</div>
<div>For a list of parameters, see <span class="jump-method" data-param="233">here</span>.</div>`,
                    },
                    {
                        param: ['terminal','required'],
                        type: 'enum',
                        desc: `<div>The terminal code.</div>
<div>The possible values are: "<strong>ONLINE</strong>", "<strong>WAP</strong>".</div>`,
                    },
                    {
                        param: ['reference','required'],
                        type: 'string',
                        desc: `<div>The ID of the transaction in the merchant’s system.</div>`
                    },
                    {
                        param: ['description','optional'],
                        type: 'string',
                        desc: `<div>The description of the transaction which will be displayed on the invoice.</div>`
                    },
                    {
                        param: ['note','optional'],
                        type: 'string',
                        desc: `<div>The payment note.</div>`
                    },
                    {
                        param: ['timeout','optional'],
                        type: 'integer',
                        desc: `<div>The timeout in minutes.</div><div>Default value is <strong>120</strong>.</div>`
                    },
                    {
                        param: ['goodsInfo','required'],
                        type: 'string',
                        desc: `<div>JSON encoded string of an array of items that the customer purchases from the merchant. Special characters are not supported.</div>
<div>e.g.: <span class="p-bg">[{"goods_name":"name1","quantity":"quantity1"},{"goods_name":"name2","quantity":"quantity2"}]</span></div>`,
                    },
                    {
                        param: ['creditType','optional'],
                        type: 'string',
                        desc: `<div>The payment type. This is only required when vendor = creditcard. The values are "normal" or "recurring". The default is "normal"</div>`
                    },
                    {
                        param: ['paymentCount','optional'],
                        type: 'integer',
                        desc: `<div>The number of automatic deductions to make. It is required only when vendor = creditcard and credittype = recurring. 0 = no limit.</div>`
                    },
                    {
                        param: ['frequency','optional'],
                        type: 'integer',
                        desc: `<div>Automatic deduction frequency. It is required only when vendor = creditcard, credittype = recurring, and the unit is 'Day'</div>`
                    },
                    {
                        param: ['verifySign','required'],
                        type: 'string',
                        desc: `<div>The parameter signature.</div>`
                    },
                ],
                responseTableData: [
                    {
                        param: ['merchantNo'],
                        type: 'object',
                        desc: `The result of the refund.`,
                    },
                    {
                        param: ['ret_msg'],
                        type: 'string',
                        desc: `The response return message.`,
                    },
                    {
                        param: ['ret_code'],
                        type: 'string',
                        desc: `The response return code. For more details, see <span class="jump-method" data-param="111">here</span>.`,
                    },
                ],
                resultTableData: [
                    {
                        param: ['amount'],
                        type: 'string',
                        desc: `The transaction amount. It returns when you use USD as the price currency.`,
                    },
                    {
                        param: ['rmbAmount'],
                        type: 'string',
                        desc: `The transaction amount in RMB. It returns when you use RMB as the price currency.`,
                    },
                    {
                        param: ['transactionNo'],
                        type: 'string',
                        desc: `The ID of the transaction in the Yuansfer system.`,
                    },
                    {
                        param: ['reference'],
                        type: 'string',
                        desc: `The ID of the transaction in the merchant’s system.`,
                    },
                    {
                        param: ['cashierUrl'],
                        type: 'string',
                        desc: `The url to the cashier page.`,
                    },
                ],
            }
        },
        mounted(){
            let jumps = document.getElementsByClassName('jump-method')
            for(let item of jumps){
                console.log('item',item)
                item.onclick = function () {
                    alert(item.dataset.param)
                }
            }
        },
        methods:{
            test(){
                alert(3)
            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/css/common.less";
    .desc-area{
        hr{
            margin-top: 60px;
        }
        h3{
            font-weight: bold;
        }
    }

</style>