<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h3 id="r_3_2">update-recurring()</h3>
                    <p class="p-font">
                        You can use the <strong>update-recurring()</strong> API modify automatic deduction rules.
                    </p>
                    <h4>HTTP Request</h4>
                    <p class="p-font">
                        <span class="p-bg">
                             POST https://mapi.yuansfer.com/creditpay/v2/update-recurring
                        </span>
                    </p>
                    <div v-for="(item,index) in showTableData" :key="index">
                        <h4>{{item.title}}</h4>
                        <div class="param-table">
                            <table>
                                <tr>
                                    <th v-for="(col,index) in item.colName" :key="index" :style="'width:'+col.curWidth">{{col.label}}</th>
                                </tr>
                                <tr v-for="(row,index) in item.rowData" :key="index">
                                    <td v-for="colKey in Object.keys(row)" :key="colKey">
                                        <div v-if="colKey=='param'">
                                            <div v-html="'<strong>'+row[colKey][0]+'</strong>'"></div>
                                            <div v-html="row[colKey][1]" :class="row[colKey][1]=='required'? 'redColor':'normalColor'"></div>
                                        </div>
                                        <div class="param-desc" v-else v-html="row[colKey]"></div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH, TABLE_COL} from "@/assets/js/common";

    export default {
        name: "updateRecurring",
        data(){
            return{
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
                showTableData: [
                    {
                        title: 'Request Parameters',
                        colName: TABLE_COL,
                        rowData: [
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
                                param: ['scheduleNo','required'],
                                type: 'string',
                                desc: `<div>The Id of the recurring deduction.</div>`,
                            },
                            {
                                param: ['paymentCount','optional'],
                                type: 'integer',
                                desc: `<div>The number of automatic deduction occurrences. It is only required when vendor = creditcard and credittype = recurring.</div>
<div>The new paymentCount value must be greater than the current setting, or set to 0 for no limit.</div>`,
                            },
                            {
                                param: ['status','optional'],
                                type: 'enum',
                                desc: `<div>In auto deduction status, only 'CANCELLED' is supported (temporarily), which means the auto deduction is terminated.</div>`,
                            },
                            {
                                param: ['verifySign','required'],
                                type: 'string',
                                desc: `<div>The parameter signature.</div>`
                            },
                        ]
                    },
                    {
                        title: 'Response',
                        colName: TABLE_COL,
                        rowData: [
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
                        ]
                    },
                ]
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
                alert(666)
            }
        },
    }
</script>

<style scoped lang="less">
    @import "../../../../assets/css/common.less";
    .desc-area{
        h3{
            font-weight: bold;
        }
    }

</style>