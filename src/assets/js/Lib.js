// ajax请求控制
import axios from 'axios';
import ajaxCache from './ajaxcache';
let Rxports = {};
Rxports.ajaxPost = (opts) => {
    if(!opts.url) {
        alert('请填写接口地址');
        return false;
    }
    // 避免重复多次；
    if(ajaxCache.add(opts.url)) return;
    axios.post(opts.url,opts.params).then((res) => {
        ajaxCache.del(opts.url);
        if(res.status == 200 ){
            if(opts.success){
                opts.success(res.data);
            }
        }else {
            if (opts.error) {
                opts.error(res);
            }else {
                alert("连接超时，请检查网络连接");
            }
        }
    }).then((err) => {
        ajaxCache.del(opts.url);
    })
}
// Rxports.ajaxPost = (opts) => {
//     if (!opts.url) {
//         alert('请填写接口地址');
//         return false;
//     }
//     // 避免重复请求多次；
//     if (ajaxCache.add(opts)) return;
//     axios.post(opts.url,opts.params).then((res) => {
//         ajaxCache.del(opts);
//         //console.log(res.response);
//         if(res.status == 200 ){
//             if(opts.success){
//                 opts.success(res.data);
//             }
//         }else{

//             if (opts.error) {
//                 opts.error(res);
//             }else {
//                 showTimeOutError(3000, '连接超时，请检查网络连接');
//             }
//         }
//     }).catch((error)=>{

//         ajaxCache.del(opts);
//         let status = error.response && error.response.status;
//         console.log(error);
//         if(opts.error) {
//             opts.error(error);
//         }else if ('ECONNABORTED' === error.code) {
//             showTimeOutError(3000, '连接超时，请检查网络连接');
//         } else if (status >= 500) {
//             showTimeOutError(3000, '连接超时，请检查网络连接');
//         } else {
//             throw new Error(error);
//         }

//     });

// }
export default Rxports;
