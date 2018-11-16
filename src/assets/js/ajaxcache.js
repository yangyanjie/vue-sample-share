/**
 * Author: yangyanjie
 * Create Date: 2018-07-24
 * Description: 请求处理
 */

let AJAXCACHE = [];
console.log(AJAXCACHE);
export default {
    add: (val) => {
        // !~AJAXCHCHE.indexOf(val) 不存在；
        console.log(AJAXCACHE);
        if (!!~AJAXCACHE.indexOf(val)) return 1;
        AJAXCACHE.push(val);
        return 0;
    },
    del: (val) => {
        let pos = AJAXCACHE.indexOf(val);
        if (!~pos) return 0;
        AJAXCACHE.splice(pos, 1);
        return 1;
    }
}