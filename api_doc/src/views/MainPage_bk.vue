<template>
    <div>
        <el-container>
            <el-aside width="299px">
                <el-menu
                        :default-active="curMenu"
                        @select="handleMenu"
                        class="el-menu-vertical"
                        @open="handleOpen"
                        @close="handleClose"
                        menu-trigger="hover"
                        background-color="#fff"
                        text-color="#3C414D"
                        active-text-color="#47A2FF">
                    <div>
                        <el-row>
                            <el-col :span="12">
                                <div><img src="../assets/imgs/yuansfer_logo.png" alt="logo"/></div>
                            </el-col>
                            <el-col :span="12" style="text-align: left;line-height: 31px;">
                                <a href="http:www.baidu.com" style="text-decoration: none;color: #47A2FF">DOCS</a>
                            </el-col>
                        </el-row>
                    </div>
                    <div>
                        <el-input placeholder="search" v-model="search"
                                  prefix-icon="el-icon-search">
                        </el-input>
                    </div>
                    <p>GUIDES</p>
                    <el-menu-item index="g_1">
                        <span slot="title">Getting Started</span>
                    </el-menu-item>
                    <el-menu-item index="g_2">
                        <span slot="title">Integrate faster with Yuansfer Checkout</span>
                    </el-menu-item>

                    <el-menu-item index="g_3">
                        <span slot="title">
                             Accept online payment with YIP
                        </span>
                    </el-menu-item>
                    <el-menu-item index="g_4">
                        <span slot="title">Accept in-store payments</span>
                    </el-menu-item>

                    <!--api reference-->
                    <p style="margin-top: 100px">API REFERENCE</p>
                    <el-menu-item index="r_1">
                        <span slot="title">Welcome</span>
                    </el-menu-item>
                    <el-menu-item index="r_2">
                        <span slot="title">Signing API parameters</span>
                    </el-menu-item>
                    <el-submenu index="r_3">
                        <template slot="title">
                            <span>Online Payments API</span>
                        </template>
                        <el-menu-item index="r_3_1">
                            secure-pay()
                        </el-menu-item>
                        <el-menu-item index="r_3_2">
                            update-recurring()
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_4">
                        <template slot="title">
                            <span>In-Store Payments API</span>
                        </template>
                        <el-menu-item index="r_4_1">
                            add()
                        </el-menu-item>
                        <el-menu-item index="r_4_2">
                            pay()
                        </el-menu-item>
                        <el-menu-item index="r_4_3">
                            create-trans-qrcode()
                        </el-menu-item>
                        <el-menu-item index="r_4_4">
                            reverse()
                        </el-menu-item>
                        <el-menu-item index="r_4_5">
                            auth-capture()
                        </el-menu-item>
                        <el-menu-item index="r_4_6">
                            auth-unfreeze()
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_5">
                        <template slot="title">
                            <span>Mobile Application Payments API</span>
                        </template>
                        <el-menu-item index="r_5_1">
                            prepay()
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_6">
                        <template slot="title">
                            <span>Data Search API</span>
                        </template>
                        <el-menu-item index="r_6_1">
                            refund()
                        </el-menu-item>
                        <el-menu-item index="r_6_2">
                            tran-query()
                        </el-menu-item>
                        <el-menu-item index="r_6_3">
                            trans-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_4">
                            settle-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_5">
                            withdrawal-list()
                        </el-menu-item>
                        <el-menu-item index="r_6_6">
                            data-status()
                        </el-menu-item>
                        <el-menu-item index="r_6_7">
                            Common Object Definition
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_7">
                        <template slot="title">
                            <span>Notes</span>
                        </template>
                        <el-menu-item index="r_7_1">
                            Response return code
                        </el-menu-item>
                        <el-menu-item index="r_7_2">
                            Transaction status
                        </el-menu-item>
                        <el-menu-item index="r_7_3">
                            Instant Payment Notification
                        </el-menu-item>
                        <el-menu-item index="r_7_4">
                            Callback Parameters
                        </el-menu-item>
                        <el-menu-item index="r_7_5">
                            Yuansfer Timezone
                        </el-menu-item>
                        <el-menu-item index="r_7_6">
                            Demo of Online Payments API
                        </el-menu-item>
                        <el-menu-item index="r_7_6">
                            Demo of In-Store Payments API
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="r_8">
                        <template slot="title">
                            <span>Sandbox Environment</span>
                        </template>
                        <el-menu-item index="r_8_1">
                            Pay Treasure Sandbox Apk
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <el-row>
                <el-col :span="14"><div>
                    <h1>Yuansfer Developer Guide</h1>

                    <h3 id="g_1">Getting Started</h3>
                    <p>Learn how to integrate with Yuansfer to accept cross-border payments such as Alipay and WeChat Pay on your eCommerce and in-store Point of Sale System.</p>
                    <img src="../assets/imgs/getStart_table.png" alt=""/>

                    <h4>Integrate faster with Yuansfer Checkout</h4>
                    <p>Redirect your customer to a secure, out-of-the-box solution that is hosted by Yuansfer (or Alipay) with a single integration. </p>

                    <h4>Start with your use case</h4>
                    <a href="https://docs.yuansfer.com/">Accept online payments</a>
                    <p>Let your Chinese customers pay with their preferred payment methods on your website, App, or WeChat Mini Program by integrating to Yuansfer Integrated Payments (YIP).</p>
                    <a href="https://docs.yuansfer.com/">Accept in-store payments</a>
                    <p>Integrate Yuansfer to your point of sale.</p>

                    <h5>Sandbox <img src="" /></h5>
                    <p>Use our sandbox to test Yuansfer experience before becoming a Yuansfer merchant or going production.</p>



                    <h3 id="g_2">Yuansfer Checkout</h3>
                    <p>A secure Payment Page hosted by Yuansfer that makes processing Alipay, WeChat Pay, and CUP transactions easier than ever. Yuansfer Checkout can be added to a site or an App in a few hours and easily configured to an existing payment page; this allows merchants to build, market, scale, and internationalize online business quickly.</p>
                    <img src="../assets/imgs/yuansferCheckout_table.png" alt=""/>
                    <div><img src="../assets/imgs/tanhao.png" alt=""/>
                        <span>Yuansfer Checkout is best use on a PC Web, since scanning a Generate QR Code with WeChat App on the same mobile device requires extra steps. It is recommended that you use YIP for In-App integration. </span>
                    </div>
                    <div><img src="../assets/imgs/tanhao.png" alt=""/>
                        <span>Contact <a href="https://www.yuansfer.com">Yuansfer Support</a> to also accept Visa, Mastercard, Discover, and Amex on Yuansfer Checkout.</span></div>

                    <h4>How It Works</h4>
                    <p>When customers finish shopping and check out at your online store, they are seamlessly taken to our secure hosted payment page to complete the payment process.</p>

                    <h5>Yuansfer Checkout payment flow:</h5>
                    <p>PC Web/Alipay Generate QR Code</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on Alipay hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3.Customer scan with Alipay App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Customer authenticates payment</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>5. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>6. Redirects customer back to site</p>
                        </el-col>
                    </el-row>
                    <p>PC Web/ login Alipay Wallet Website</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer authenticates payment on Alipay hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Redirects customer back to site</p>
                        </el-col>
                    </el-row>
                    <p>PC Web/WeChat Generate Pay QR Code </p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on Yuansfer hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3.Customer scan with WeChat App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Customer authenticates payment</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>5. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>6. Redirects customer back to site</p>
                        </el-col>
                    </el-row>
                    <p>In-app/redirect Alipay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction on Alipay App</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p> 5. Redirects customer back to mobile site</p>
                        </el-col>
                    </el-row>
                    <p>WeChat Official Account/WeChat Pay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p> 5. Redirects customer back to mobile site</p>
                        </el-col>
                    </el-row>
                    <p>PC Web/UnionPay Keyed-in</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects UnionPay </p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer enters card number on Yuansfer hosted page</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Redirects customer back to site</p>
                        </el-col>
                    </el-row>

                    <h3 id="g_3">Yuansfer Integrated Payments (YIP)</h3>
                    <p>Optimized for mobile apps and WeChat Mini Program, YIP is a secure integration path that renders Alipay, WeChat Pay, and Union Pay in your own payment form.</p>
                    <img src="../assets/imgs/yip_table.png"/>
                    <div><img src="../assets/imgs/tanhao.png" alt=""/>
                        <span><a href="https://www.yuansfer.com">Yuansfer Checkout</a> is the only available integration option to enable Alipay on Web platforms.</span>
                    </div>
                    <div><img src="../assets/imgs/tanhao.png" alt=""/>
                        <span>Contact <a href="https://www.yuansfer.com">Yuansfer Tech Support</a>  to enable Alipay and WeChat Pay using Yuansfer mobile SDKs.
                    </span></div>
                    <h4>How It Works</h4>
                    <p>During the in-app payment process, your customer authorizes the push of funds through a direct to Alipay or WeChat Wallet. There is immediate confirmation about the success or failure of a payment.</p>

                    <h5>Yuansfer Checkout payment flow:</h5>
                    <p>PC Web/WeChat Pay Generate QR Code</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on PC Web</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3.Customer scan with WeChat App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Customer authenticates payment</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>5. Payment successful</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>6. Redirects customer back to site</p>
                        </el-col>
                    </el-row>

                    <p>In-app/redirect Alipay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer selects Alipay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction on Alipay App</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p> 5. Redirects customer back to mobile site</p>
                        </el-col>
                    </el-row>

                    <p>WeChat Mini Program/WeChat Pay Wallet</p>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Customer checkout with WeChat Pay</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Review transaction on WeChat</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer authenticates payment</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>

                    <h3 id="g_4">POS Integration</h3>
                    <p>Integrate Alipay and WeChat Pay in your point of sale via Yuansfer API or an SDK; enabling you to seamlessly accept Chinese customer’s preferred home payment method in-store. There are two integration options you can use to initiate Alipay and WeChat Pay depending on your need.
                    </p>

                    <h4>Available integration options</h4>
                    <h5>Generate QR Code</h5>
                    <p>If your point of sale has a customer facing screen that you can use to generate and launch a QR Code at checkout, then your customers can scan the QR Code on the screen with their wallet app to complete the payment.</p>
                    <h5>POS Generate QR Code payment flow:</h5>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Cashier selects WeChat Pay on POS</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Generate QR Code shows up on screen</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Customer scans the QR Code with WeChat App</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>

                    <h5>Scan QR Code</h5>
                    <p>Your cashier uses a QR Code Scanner or a Yuansfer Smart Terminal (terminal) to complete payment by scanning a customer’s QR Code presented at checkout. It is the most familiar payment flow to your shoppers from abroad. It also does not require your shopper to have an active internet connection to complete a payment.
                    </p>
                    <h5>POS Generate QR Code payment flow:</h5>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>1. Merchant selects Alipay Pay on POS</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>2. Customer presents QR Code</p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/select_alipay.png" alt=""/></div>
                            <p>3. Terminal prompts cashier to scan customer’s QR Code</p>
                        </el-col>
                        <el-col :span="12">
                            <div><img src="../assets/imgs/generate_qrcode.png" alt=""/></div>
                            <p>4. Payment successful</p>
                        </el-col>
                    </el-row>

<!--                    api reference-->

                    <h3 id="r_1">Authentication and Authorization</h3>
                    <p>The Yuansfer API uses API credentials including API token, Merchant ID, Store ID, Store Admin ID to authenticate requests. You can retrieve and manage API credentials in your Yuansfer Dashboard.</p>
                    <p>API credentials carry many privileges, so be sure to keep them secure! Do not share your secret API credentials in publicly accessible areas such as GitHub, client-side code, and so forth.</p>
                    <p>
                        All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
                    </p>

                    <h3 id="r_2">Signing API parameters</h3>
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

                    <online-payment-api></online-payment-api>
<!--                    <h3 id="r_3">Online Payments API</h3>-->
<!--                    <p>Use the Online Payments API to easily and securely accept online payments. The Yuansfer secure payment interface provides online payment services, including China UnionPay, Alipay and WeChat Pay and credit card.-->
<!--                    </p>-->
<!--                    <h5>Online payment workflow</h5>-->
<!--                    <img src="../assets/imgs/sflow-en.png" alt=""/>-->
<!--                    <ol>-->
<!--                        <li>The Merchant's system submits the order to the Yuansfer system when a customer places an order.</li>-->
<!--                        <li>The Yuansfer system checks if the request is valid.</li>-->
<!--                        <li>-->
<!--                            The Yuansfer system leads the customer to the Cashier Page to check out. The Cashier Page displays a different payment method depending on the selected payment service.-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            The customer confirms payment on Cashier Page.-->
<!--                        </li>-->
<!--                        <li>The Yuansfer system sends the payment result to the Merchant's system.</li>-->
<!--                        <li>The Merchant's system shows the payment result to the customer.</li>-->
<!--                    </ol>-->

<!--                    <p>Note: Some screenshots of the Cashier Page</p>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-alipay.png"/>-->
<!--                        <p>Cashier Page for Alipay payment service.</p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-wechatpay.png"/>-->
<!--                        <p>Cashier Page for WeChat Pay payment service.</p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-unionpay.png"/>-->
<!--                        <p>Cashier Page for UnionPay payment service.</p>-->
<!--                    </div>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-creditcard.png"/>-->
<!--                        <p>Cashier Page for credit card payment.</p>-->
<!--                    </div>-->

<!--                    <h4 id="r_3_1">secure-pay()</h4>-->
<!--                    <p>Use the secure-pay() API to pay for an order.</p>-->
<!--                    <h5>HTTP Request</h5>-->
<!--                    <p>POST https://mapi.yuansfer.com/online/v2/secure-pay</p>-->

<!--                    <h5>Request Parameters</h5>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-creditcard.png"/>-->
<!--                        <p>Cashier Page for credit card payment.</p>-->
<!--                    </div>-->
<!--                    <h5>Response</h5>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-creditcard.png"/>-->
<!--                        <p>Cashier Page for credit card payment.</p>-->
<!--                    </div>-->
<!--                    <h5>result object</h5>-->


<!--                    <h4 id="r_3_2">update-recurring()</h4>-->
<!--                    <p>You can use the update-recurring() API modify automatic deduction rules.</p>-->
<!--                    <h5>HTTP Request</h5>-->
<!--                    <p>POST https://mapi.yuansfer.com/creditpay/v2/update-recurring</p>-->
<!--                    <div>-->
<!--                        <img src="../assets/imgs/cashier-creditcard.png"/>-->
<!--                        <p>Cashier Page for credit card payment.</p>-->
<!--                    </div>-->
<!--                    <h5>Request Parameter</h5>-->

<!--                    <h5>HTTP Request</h5>-->

                </div></el-col>
                <el-col :span="10" class="modify">
                    <el-tabs v-model="activeName" @tab-click="handleClick"
                             type="card"
                             style="background: #0D0D1E;position: fixed;z-index: 1;">
                        <el-tab-pane label="cURL" name="cURL" style="color: aliceblue">
<!--                            <div v-highlight>-->
<!--                                <pre>-->
<!--                                    <code class="css">-->
<!--                                [css]-->
<!--                                {-->
<!--                                    width:'100px'-->
<!--                                }-->
<!--                                    </code>-->
<!--                                </pre>-->
<!--                            </div>-->
                        </el-tab-pane>
                        <el-tab-pane label="PHP" name="PHP">
<!--                            <div v-highlight>-->
<!--                                <pre>-->
<!--                                    <code class="javascript">-->
<!--                                    [javascript]-->
<!--                                    let i = 3;-->
<!--                                    console.log(i);-->
<!--                                    </code>-->
<!--                                </pre>-->
<!--                            </div>-->
                        </el-tab-pane>
                        <el-tab-pane label="Java" name="Java">
<!--                            <div v-highlight>-->
<!--                                <pre>-->
<!--                                    <code class="java">-->
<!--                                    [java]-->
<!--                                    //add-->
<!--                                    public static String transactionAdd() {-->
<!--                                        String url = DOMAIN_URL + TRANSACTION_ADD;-->
<!--                                        Map &lt;String, Object&gt; params = new TreeMap &lt;String, Object&gt; ();-->
<!--                                        params.put("merchantNo", MERCHANT_NO);-->
<!--                                        params.put("storeNo", STORE_NO);-->
<!--                                        if (StringUtils.isNotEmpty(STORE_ADMIN_NO)) {-->
<!--                                            params.put("storeAdminNo", STORE_ADMIN_NO);-->
<!--                                        }-->

<!--                                        params.put("amount", "0.01");-->
<!--                                        String verifySign = verifySignHelper.getYuansferVerifySign(params, YUANSFER_TOKEN);-->
<!--                                        params.put("verifySign", verifySign);-->
<!--                                        String ret = HttpClientUtils.post(url, null, params);-->
<!--                                        System.out.println("-&#45;&#45;transaction add&#45;&#45;&#45;&#45;");-->
<!--                                        System.out.println(ret);-->
<!--                                        JSONObject retInfo = (JSONObject)JSONValue.parse(ret);-->
<!--                                        JSONObject transaction = (JSONObject)retInfo.get("transaction");-->
<!--                                        String transactionNo = transaction.get("transactionNo").toString();-->
<!--                                        return transactionNo;-->
<!--                                    }-->
<!--                                    </code>-->
<!--                                </pre>-->
<!--                            </div>-->
                        </el-tab-pane>
                        <el-tab-pane label="Go" name="Go">Go</el-tab-pane>
                    </el-tabs>
                    <div style="background: #0D0D1E;width: 100%;padding-top: 72px">
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay id="r_3_1_c"></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                        <secure-pay></secure-pay>
                    </div>
                </el-col>
            </el-row>
            </el-main>
        </el-container>

    </div>
</template>

<script>
    import OnlinePaymentApi from './desc/reference/yuansferCheckout'
    import SecurePay from '../views/code/curl/securePay'
    export default {
        components: {
            OnlinePaymentApi,
            SecurePay,
        },
        name: "mainPage",
        data(){
            return{
                curMenu: 'g_1',
                search: '',
                activeName: ''
            }
        },
        watch: {},
        methods: {
            handleMenu(index, indexPath){
                // click menu
                console.log('index', index, 'indexPath', indexPath)
                if(index){
                    this.returnTop(index)
                }
                if(index=='r_3_1'){
                    // index
                    let top = document.querySelector('#'+index).offsetTop
                    document.querySelector('#r_3_1_c').offsetTop = top
                }
            },
            handleOpen(key, keyPath) {
                // open menu that have submenu
                console.log('key+keyPath', key + keyPath);
                if(key){
                    this.returnTop(key)
                }
            },
            handleClose(key, keyPath) {
                console.log(key + '=' + keyPath);
            },
            handleClick(tab){
                console.log('cur tab', tab)
            },
            returnTop(id){
                console.log('id', id)
                document.querySelector('#'+id).scrollIntoView(true);
            }
        }
    }
</script>

<style scoped lang="less">
    .modify /deep/ .el-tabs--card>.el-tabs__header {
        border-bottom: none;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item {
        border-bottom: 1px solid transparent;
        border-left: none;
        border-right: none;
        color: #fff;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: #47A2FF;
        color: #47A2FF;
    }
    .modify /deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav {
        border: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-menu-vertical{
        position:fixed;
        z-index:1;
    }
    .el-main{
        padding: 0;
    }

</style>