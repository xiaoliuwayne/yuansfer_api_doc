<template>
    <div v-highlight>
        <pre>
            <code class="go">
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
        package main
        import (
            "crypto/md5"
            "encoding/hex"
            "sort"
        )

        func main() {
            var token string = "5cbfb079f15b150122261c8537086d77a"
            var data = make(map[string]string)

            data["amount"] = "1.00"
            data["storeNo"] = "300014"
            data["currency"] = "USD"
            data["merchantNo"] = "200043"
            data["callbackUrl"] = "https://wx.yuansfer.yunkeguan.com/wx"
            data["terminal"] = "ONLINE"
            data["ipnUrl"] = "https://wx.yuansfer.yunkeguan.com/wx"
            data["reference"] = "seq_1525922323"
            data["vendor"] = "alipay"
            data["timeout"] = "120"
            data["goodsInfo"] = \`[{"goods_name":"Yuansfer","quantity":"1"}]\`

            //Step 1, 2:
            step2 := map2Str(data)
            //Step 3:
            step3 := step2 + md5Token(token)
            //Step 4:
            verifySign := md5Token(step3)
        }

        func md5Token(data string) string {
            md5 := md5.New()
            md5.Write([]byte(data))
            md5Data := md5.Sum([]byte(""))
            return hex.EncodeToString(md5Data)
        }

        func map2Str(m map[string]string) string {
            var keys []string
            for k := range m {
                if m[k] != "" {
                    keys = append(keys, k)
                }
            }
            sort.Strings(keys)
            dec := ""
            for _, key := range keys {
                dec += key + "=" + m[key] + "&"
            }
            return dec
        }
        `
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>