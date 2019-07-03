### 聚鑫商城api接口vue封装

需安装依赖

```
axios
qs
```

跨域请求设置

```
###vue.config.js
module.exports = {
	...
    devServer: {
    	...
        proxy: {
            '/api': {
                target: 'https://api.juydd.com/api', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                '^/api': ''
                }
            }
        }

    }, 
    ...
  };
  
```

使用方式：

```
#组件中引用
import {jx_post} from '../utils/api'

#普通调用
var index = {
    "method": "goods.get.index"
}

jx_post(params);

#有无需加密参数调用
var category = {
    method: "get.category.byId",
    name: "2",
}
var categoryNotSha1 = {
    id: "413767655476953088",
}

jx_post(params,paramsNotSha1);

```

