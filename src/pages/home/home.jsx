import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../../store/store.js';
import { increment, decrement } from '../../store/home/action';
import logo from '../../assets/logo.svg';
import './home.less';
import Hello from '../../components/hello/hello';

//tab切换
class TabsControl extends React.Component{
    constructor(){
        super();
        this.state={ 
            currentIndex : 0,
        };
    }
    check_tittle_index(index){
        return index === this.state.currentIndex ? "active" : "";
    }
    check_item_index(index){
        return index === this.state.currentIndex ? "show" : "Tab_item";
    }
    render(){
        return(
            <div>
                {/*动态生成Tab导航*/}
                <div className="Tab_tittle_wrap">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>{ element.props.name }</div>
                            );
                    }) }
                </div>
                {/*Tab内容区域*/}
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                            );
                    })}
                </div>
            </div>
            );
    }
}

class App extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value:'123',
      selected:'coconut',
      list:[
        {name:'导航一',id:1},
        {name:'导航二',id:2},
        {name:'导航三',id:3},
      ],
      currentIndex:1,
    }
  }
  
  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState((preState, preProps) => { return { count: preState.count + 1 } });
    //提交dispatch
    this.props.increment();
  }

  handleZero = () => {
    this.setState({ count: 0 });
  }
  
  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  handleSelect = e => {
    this.setState({ selected: e.target.value });
  } 

  handleClick = i => {
    this.setState({
      currentIndex:i+1
    });
  }


  render() {
    let html = <h1>标题123</h1>;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" title="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1><Link to="/lesson1/lee">跳转lesson1</Link></h1>
        <h1><Link to="/lesson2">跳转lesson2</Link></h1>
        <h1><Link to="/lesson3">跳转lesson3</Link></h1>

        <div className="App-box">
          <p className="m-t-20">1.HTML变量</p>
          {html}
          
          <p className="m-t-20">2.组件通信</p>
          {<Hello count={this.state.count} name="组件通信props数据传递"/>}

          <p className="m-t-20">3.Redux</p>
          <p>Redux:{this.props.stateData.count}</p>
          <button onClick={this.handleAdd}>加</button>
          <button onClick={this.handleZero}>清零</button>

          <div className="m-t-20">
            <p>4.表单数据绑定</p>
            <form>
              <input type="text"  value={this.state.value} onChange={this.handleChange}/>
            </form>
            <p>{this.state.value}</p>
          </div>

          <div className="m-t-20" style={{color:"red"}}>
            <p>5.下拉菜单数据绑定</p>
            <select  value={this.state.selected} onChange={this.handleSelect}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <p>{this.state.selected}</p>
          </div>
        </div> 

         <div className="m-t-20"> 
          <p>6.tab切换</p> 
          <ul className="tab-list">
              {
                this.state.list.map((item,i) => {
                  var tabStyle = item.id === this.state.currentIndex ? 'active' : '';
                  return <li key={i} onClick={this.handleClick.bind(this,i)} className={tabStyle}>{item.name}</li>
                })
              }
          </ul>
          <TabsControl>
              <div name="社会新闻">
                  <span>社会新闻的内容</span>
              </div>
              <div name="体育世界">
                  体育世界的内容
              </div>
              <div name="娱乐圈">
                  娱乐圈的内容
              </div>
          </TabsControl>
        </div>
      </div>
    );
  }
}

//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(state => ({
  stateData:state.home //将store注入 props
}), {
  increment, 
  decrement
})(App);