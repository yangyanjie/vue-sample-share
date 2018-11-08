// ajax请求控制
import axios from 'axios';
import ajaxCache from './ajaxcache';
let Rxports = {};
Rxports.ajaxPost = (opts) => {
    if (!opts.url) {
        alert('请填写接口地址');
        return false;
    }
    // 避免重复请求多次
    if (ajaxCache.add(opts)) return;
    axios.post(opts.url,opts.params).then((res) => {
        ajaxCache.del(opts);
        //console.log(res.response);
        if(res.status == 200 ){
            if(opts.success){
                opts.success(res.data);
            }
        }else{

            if (opts.error) {
                opts.error(res);
            }else {
                showTimeOutError(3000, '连接超时，请检查网络连接');
            }
        }
    }).catch((error)=>{

        ajaxCache.del(opts);
        let status = error.response && error.response.status;
        // console.log(error);
        if(opts.error) {
            opts.error(error);
        }else if ('ECONNABORTED' === error.code) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else if (status >= 500) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else {
            throw new Error(error);
        }

    });
Rxports.fileUpLoad = (opts) => {
    if (!opts.url) {
        alert('请填写接口地址');
        return false;
    }
    // 避免重复请求多次
    if (ajaxCache.add(opts)) return;
    axios({
        url: opts.url,
        method:'post',
        data:opts.params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        ajaxCache.del(opts);
        console.log(res);
        if(res.status == 200 ){
            if(opts.success){
                opts.success(res.data);
            }
        }else{
            if (opts.error) {
                opts.error(error);
            }else {
                showTimeOutError(3000, '连接超时，请检查网络连接');
            }
        }
    }).catch((error)=>{
        ajaxCache.del(opts);
        let status = error.response && error.response.status;
        console.log(error);
        if(opts.error) {
            opts.error(error);
        }else if ('ECONNABORTED' === error.code) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else if (status >= 500) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else {
            throw new Error(error);
        }
    })
}
function showTimeOutError (time, msg) {
    var timeout = document.getElementById('ui-ajax-timeout');
    if (!!timeout) {
        return;
    }
    var div = document.createElement('div');
    var body = document.body.children[0];

    div.style.zIndex = 2000;
    div.style.width = '60%';
    div.style.height = '0.8rem';
    div.id = 'ui-ajax-timeout';
    div.style.position = 'absolute';
    div.style.bottom = '2rem';
    div.style.opacity = '1';
    div.style.background = 'rgba(0,0,0,.5)';
    div.style.fontSize = '0.4rem';
    div.style.color = '#fff';
    div.style.textAlign = 'center';
    div.style.lineHeight = '0.8rem';
    div.style.margin = '0 20%';
    div.style.border = '1px solid #ddd';
    div.style.borderRadius = '0.1rem';
    div.innerHTML = msg;
    body.parentNode.insertBefore(div, body);
    //自动隐藏
    setTimeout(function () {
        var timeoutHide = document.getElementById('ui-ajax-timeout');
        if (!!timeoutHide) {
            timeoutHide.remove();
        }
    }, time);
}

}
Rxports.ajaxGet = (opts) => {
    if (!opts.url) {
        alert('请填写接口地址');
        return false;
    }
    // 避免重复请求多次
    if (ajaxCache.add(opts)) return;
    axios.get(opts.url,{
        params: opts.params
    }).then((res) => {
        ajaxCache.del(opts);
        //console.log(res);
        if(res.status == 200 ){
            if(opts.success){
                opts.success(res.data);
            }
        }else{
            if (opts.error) {
                opts.error(error);
            }else {
                showTimeOutError(3000, '连接超时，请检查网络连接');
            }
        }
    }).catch((error)=>{
        ajaxCache.del(opts);
        let status = error.response && error.response.status;
        console.log(error);
        if(opts.error) {
            opts.error(error);
        }else if ('ECONNABORTED' === error.code) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else if (status >= 500) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else {
            throw new Error(error);
        }

    });
Rxports.fileUpLoad = (opts) => {
    if (!opts.url) {
        alert('请填写接口地址');
        return false;
    }
    // 避免重复请求多次
    if (ajaxCache.add(opts)) return;
    axios({
        url: opts.url,
        method:'post',
        data:opts.params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => {
        ajaxCache.del(opts);
        console.log(res);
        if(res.status == 200 ){
            if(opts.success){
                opts.success(res.data);
            }
        }else{
            if (opts.error) {
                opts.error(error);
            }else {
                showTimeOutError(3000, '连接超时，请检查网络连接');
            }
        }
    }).catch((error)=>{
        ajaxCache.del(opts);
        let status = error.response && error.response.status;
        console.log(error);
        if(opts.error) {
            opts.error(error);
        }else if ('ECONNABORTED' === error.code) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else if (status >= 500) {
            showTimeOutError(3000, '连接超时，请检查网络连接');
        } else {
            throw new Error(error);
        }
    })
}
function showTimeOutError (time, msg) {
    var timeout = document.getElementById('ui-ajax-timeout');
    if (!!timeout) {
        return;
    }
    var div = document.createElement('div');
    var body = document.body.children[0];

    div.style.zIndex = 2000;
    div.style.width = '60%';
    div.style.height = '0.8rem';
    div.id = 'ui-ajax-timeout';
    div.style.position = 'absolute';
    div.style.bottom = '2rem';
    div.style.opacity = '1';
    div.style.background = 'rgba(0,0,0,.5)';
    div.style.fontSize = '0.4rem';
    div.style.color = '#fff';
    div.style.textAlign = 'center';
    div.style.lineHeight = '0.8rem';
    div.style.margin = '0 20%';
    div.style.border = '1px solid #ddd';
    div.style.borderRadius = '0.1rem';
    div.innerHTML = msg;
    body.parentNode.insertBefore(div, body);
    //自动隐藏
    setTimeout(function () {
        var timeoutHide = document.getElementById('ui-ajax-timeout');
        if (!!timeoutHide) {
            timeoutHide.remove();
        }
    }, time);
}

}
export default Rxports;
