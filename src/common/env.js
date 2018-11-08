/*
    *配置测试环境和线上环境之间的切换，
    * baseUrl： 域名地址
    *routeMode: 路由模式
*/
let baseUrl = '';
let routerMode = 'history';
let DEBUG = false;
let cancleHTTP = [];//取消请求头设置；
//注：下面的baseUrl地址为假地址，只是模拟的，无法调通。
if (process.env.NODE_ENV == 'development') {
   baseUrl = "https://10.248.65.100:8080";
   DEBUG = true;
}else if(process.env.NODE_ENV == 'production'){
   baseUrl = "https://10.248.65.200:9090";
   DEBUG = false;
}else if(process.env.NODE_ENV == 'testing'){
   baseUrl = "https://10.248.65.150:10000";
   DEBUG = false;
}

export{
   baseUrl,
   routerMode,
   DEBUG,
   ROLE,
   cancleHTTP
}