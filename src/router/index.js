import React, { Component } from 'react';
//HashRouter打包本地静态
import { Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import home from "../pages/home/home";
import lesson1 from "../pages/lesson1/Lesson1.jsx";
import lesson2 from "../pages/lesson2/Lesson2.jsx";
import lesson3 from "../pages/lesson3/Lesson3.jsx";
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/lesson1/:name" exact component={lesson1} /> 
          <Route path="/lesson2" exact component={lesson2} /> 
          <Route path="/lesson3" exact component={lesson3} />
          <Redirect to="/"/>
        </Switch>
      </HashRouter>
    )
  }
}