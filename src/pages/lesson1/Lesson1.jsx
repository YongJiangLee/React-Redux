import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Lesson1 extends Component {
	//在渲染前调用,在客户端也在服务端。
	componentWillMount() {
        console.log('componentWillMount')
    }
    //在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
	componentDidMount() {
	    console.log(this.props.match.params.name);
	}
	//在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }
    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使
    shouldComponentUpdate(newProps, newState) {
        return true; //当该值设为false的时候，不会更新组件，即componentWillUpdate和componentDidUpdate不会被执行
    }
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    //在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
	
	handleClick = ()=>{
		this.props.history.push('/');
		
	}
  	render() {
	    return (
	      	<div className="center">
		        <h1><Link to="/">路由返回</Link></h1>
		        <h1 onClick={this.handleClick}>JS返回</h1>
	      	</div>
	    );
	}
}


export default Lesson1;
