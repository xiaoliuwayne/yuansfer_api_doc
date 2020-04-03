<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="leftWidth" class="content-gb">
                <div class="desc-area">
                    <h2>Welcome</h2>
                    <p class="p-font">Welcome to the Yuansfer POS API Developer Center.</p>
                    <a href="https://www.yuansfer.com">点击查看中文文档.</a>
                    <h3>API Basic</h3>
                    <p class="p-font">
                        The Yuansfer offers the RESTful interface to help you create payments solutions that meet your needs. The Yuansfer API enables you to incorporate payment methods into your applications, including WeChat Pay, China UnionPay, Alipay and credit card. You can enable customers to make Chinese online and mobile payments with only a few clicks.
                    </p>
                    <h3>Getting Started</h3>
                    <p class="p-font">
                        The Yuansfer REST APIs use HTTP verbs and a RESTful endpoint structure. JSON is returned by all API responses, including errors.
                    </p>
                    <h3>Authentication and Authorization</h3>
                    <p class="p-font">
                        The Yuansfer API uses API credentials including <strong>API token, Merchant ID, Store ID, Store Admin ID </strong> to authenticate requests. You can retrieve and manage API credentials in your Yuansfer Dashboard.
                    </p>
                    <p class="p-font">
                        API credentials carry many privileges, so be sure to keep them secure! Do not share your secret API credentials in publicly accessible areas such as GitHub, client-side code, and so forth.
                    </p>
                    <p class="p-font">
                        All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
                    </p>
                </div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH} from "@/assets/js/common";

    export default {
        name: "welcome",
        data(){
            return{
                leftWidth: COL_WIDTH.left,
                rightWidth: COL_WIDTH.right,
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";
    .content-gb{
        a{
            font-size: 14px;
            color: #47A2FF;
            text-decoration: none;
        }
    }

</style>