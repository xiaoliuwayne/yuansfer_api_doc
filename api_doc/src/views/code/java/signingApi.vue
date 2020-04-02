<template>
    <div v-highlight>
        <pre>
            <code class="java">
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
        import java.util.Map;
        import java.util.TreeMap;
        import org.json.simple.JSONObject;
        import com.nengjian.yuansfer.pos.utils.MapUrlUtils;
        import com.nengjian.yuansfer.pos.utils.Md5Utils;

        public class VerifySignExample {
            public static void main(String[] args) {
                Map<String, Object> map = new TreeMap<String, Object>();
                String yuansferToken = "59600f2a9ad644c6a9570233560cc94e";
                map.put("merchantNo", "200043");
                map.put("storeNo", "300014");
                map.put("storeAdminNo", "3000140001");
                map.put("amount","0.01");
                VerifySignExample example = new VerifySignExample();
                String verifySign = example.getYuansferVerifySign(map, yuansferToken);
                JSONObject json = new JSONObject();
                json.put("verifySign", verifySign);
                System.out.println(json);
            }

            public String getYuansferVerifySign(final Map<String, Object> map, final String yuansferToken) {
                String calculateValue = commonGetVerifySign(map, yuansferToken);
                return calculateValue;
            }

            private String commonGetVerifySign(final Map<String, Object> map, final String yuansferToken) {
                Map<String, Object> treeMap = new TreeMap<String, Object>(map);
                String str = MapUrlUtils.getUrlParamsByMap(treeMap);
                str = str + "&" + Md5Utils.cryptHash(yuansferToken);

                String calculateValue = Md5Utils.cryptHash(str);
                return calculateValue;
            }
        }


        public class MapUrlUtils {
            public static String getUrlParamsByMap(Map<String, Object> map) {
                if (map == null) {
                    return "";
                }
                StringBuilder sbuilder = new StringBuilder();
                for (Map.Entry<String, Object> entry : map.entrySet()) {
                    sbuilder.append(entry.getKey()).append("=").append(entry.getValue());
                    sbuilder.append("&");
                }
                String s = sbuilder.toString();
                if (s.endsWith("&")) {
                    s = StringUtils.substringBeforeLast(s, "&");
                }
                return s;
            }
        }


        public class Md5Utils {
            public static String cryptHash(String hashStr) {
                String strCrypt = hashStr;
                if (strCrypt.length() > 0) {
                    strCrypt = hash(strCrypt);
                }
                return strCrypt;
            }

            public static  String hash(String str) {
                try {
                    MessageDigest md = MessageDigest.getInstance("MD5");
                    md.update(str.getBytes());
                    byte b[] = md.digest();

                    int i;

                    StringBuilder buf = new StringBuilder("");
                    for (int offset = 0; offset < b.length; offset++) {
                        i = b[offset];
                        if (i < 0)
                            i += 256;
                        if (i < 16)
                            buf.append("0");
                        buf.append(Integer.toHexString(i));
                    }
                    //32-bit Encryption
                    return buf.toString();
                    //16-bit Encryption
                    //return buf.toString().substring(8, 24);
                } catch (NoSuchAlgorithmException e) {
                    e.printStackTrace();
                    return null;
                }
            }
        }
                `
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/common.less";

</style>