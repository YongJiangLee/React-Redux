import axios from 'axios'
let $http = axios.create({
	baseURL: 'http://10.120.0.45/olp/api/0.2/',
	  // baseURL: 'http://10.120.0.26:8080/mmkt',
    // headers :{
    // 	'Content-Type':'application/x-www-form-urlencoded'
    // }
});
//请求拦截	
$http.interceptors.request.use(
    config => {
    	if ( config.method === 'get') {
	      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	    } 
        
        return config;
    },
    err => {
        return Promise.reject(err);
	}
);

//响应拦截
$http.interceptors.response.use(
	response => {
	    return response;
	},
	error => {
	    if (error.response) {
	    	
	    	if (error.response.status !== 401) {
	    		
	    	}
		    switch (error.response.status) {
		        case 401: 
	           
		    }
   		}
   		// 返回接口返回的错误信息
    	return Promise.reject(error.response.data)
	}
);
export default $http