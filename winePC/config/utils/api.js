import {sha1} from "./sha1";
import {get, post} from './http';

function objKeySort(obj) {//排序的函数
    var newkey = Object.keys(obj).sort();
    var newObj = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj;//返回排好序的新对象
}

function juxin_api(paramplus,paramnosha1){
    var in_parm={
        locale:'zh_CN',
        format:'json',
        v:'1.0',
        appKey: '00001',
    };
    var lists=[];
    var key="abcdeabcdeabcdeabcdeabcd";
    var parm_a={};
    var parm_b={};
    Object.assign(parm_a,in_parm,paramplus);

    parm_a.timestamp=new Date().getTime();

    for(var i in objKeySort(parm_a)){
        lists.push(i+parm_a[i]);
    }
    var parm_str=lists.join('');
    var parm_key=key+parm_str+key;
    parm_a.sign=sha1(parm_key);
    
    if(paramnosha1!==null){
        Object.assign(parm_b,parm_a,paramnosha1);
        return parm_b;
    }else{
        return parm_a;
    }
    
}

export function jxPost(method,nosha1){
    
    if(nosha1!==null){
        return post("/api",juxin_api(method,nosha1));
    }else{
        return post("/api",juxin_api(method));
    }
}

