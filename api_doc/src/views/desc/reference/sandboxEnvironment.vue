<template>
    <div>
        <el-row>
            <el-col :span="17">
                <div></div>
            </el-col>
            <el-col :span="7"></el-col>
        </el-row>
    </div>
</template>

<script>
    import {COL_WIDTH} from "@/assets/js/common";

    export default {
        name: "sandboxEnvironment",
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