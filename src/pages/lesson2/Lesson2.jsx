import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lesson2.less';
import API from '../../api/index';
class Lesson2 extends Component {
    constructor(){
        super();
        this.state = { 
            currentIndex : 13
        };
    }
	//在渲染前调用,在客户端也在服务端。
    componentWillMount() {
       /* var url = "http://10.120.0.45/olp/api/0.2/home/getBannerData";
        fetch(url,{
          method:"get",
          headers:{
              "Content-type":"application/x-www-form-urlencoded"
          },
          //body:"name=luwenjing&age=22"
        })
        .then(function (response){
            if (response.status == 200){
                return response;
            }
        })
        .then(function (data) {
          console.log(data)
          return data.text();
        })
        .then(function(data){
            console.log(JSON.parse(data))
        })
        .catch(function(err){
            console.log("Fetch错误:"+err);
        });*/    
    }
	handleClick = ()=>{
		this.props.history.push('/');
        return new Promise( (resolve, reject) => {
            if (true) {
                resolve();
            } else {
                reject();
            }
         })
	}
    
    ajaxClick = ()=>{
        API.get('home/getBannerData').then( data => {
            console.log(data.data);
          
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    async asyncFn (){
       return 123;
    }

    asyncClick = () => {
        this.asyncFn().then(val => {
            console.log(val)
        })
    }

  	render() {
        var boxStyle = {
            color:'blue'
        }
	    return (
	      	<div className="center"  style={boxStyle}>
		        <h1 className="m-t-20"><Link to="/">路由返回</Link></h1>
		        <h1 className="m-t-20" onClick={this.handleClick}>JS返回</h1>
                <h1 className="m-t-20" onClick={this.ajaxClick.bind(this)}>
                   ajax获取数据 
                </h1>            
                <h1 className="m-t-20" onClick={this.asyncClick.bind(this)}>async</h1>     
	      	</div>
	    );
	}
}


export default Lesson2;
