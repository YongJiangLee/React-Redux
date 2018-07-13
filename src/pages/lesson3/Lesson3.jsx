import React, { Component } from 'react';

//列表循环
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class User extends Component {

  handleClick = (user,index) => {
    console.log(user,index)
  }

  render () {

    let user = this.props.user;
    let index = this.props.index;
    return (
      <div className="center" onClick={this.handleClick.bind(this,user,index)}>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <div>序号：{index}</div>
        <p>{this.props.stateData}</p>
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        {users.map((item,i) => <User key={i} index={i} user={item} />)}
      </div>
    )
  }
}

export default Index;
