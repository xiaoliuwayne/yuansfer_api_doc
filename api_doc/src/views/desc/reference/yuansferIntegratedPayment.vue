<template>
    <div>
        <el-row>
            <el-col :span="leftWidth">
                <div></div>
            </el-col>
            <el-col :span="rightWidth"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH} from "@/assets/js/common";

    export default {
        name: "storePaymentApi",
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

</style>