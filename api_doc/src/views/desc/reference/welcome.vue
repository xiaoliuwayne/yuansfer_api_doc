<template>
    <div>
        <el-row class="row-gb">
            <el-col :span="17" class="content-gb">
                <div>
                    <h3>Welcome</h3>
                    <p>Welcome to the Yuansfer POS API Developer Center.</p>
                    <a ref="https://www.yuansfer.com">点击查看中文文档.</a>
                    <h4>API Basic</h4>
                    <p>
                        The Yuansfer offers the RESTful interface to help you create payments solutions that meet your needs. The Yuansfer API enables you to incorporate payment methods into your applications, including WeChat Pay, China UnionPay, Alipay and credit card. You can enable customers to make Chinese online and mobile payments with only a few clicks.
                    </p>
                    <h4>Getting Started</h4>
                    <p>
                        The Yuansfer REST APIs use HTTP verbs and a RESTful endpoint structure. JSON is returned by all API responses, including errors.
                    </p>
                    <h4>Authentication and Authorization</h4>
                    <p>The Yuansfer API uses API credentials including API token, Merchant ID, Store ID, Store Admin ID to authenticate requests. You can retrieve and manage API credentials in your Yuansfer Dashboard.</p>
                    <p>API credentials carry many privileges, so be sure to keep them secure! Do not share your secret API credentials in publicly accessible areas such as GitHub, client-side code, and so forth.</p>
                    <p>
                        All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
                    </p>
                </div>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "welcome"
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>