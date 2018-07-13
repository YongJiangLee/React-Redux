import React, { Component } from 'react';


class InnerHtml extends Component {
  static defaultProps = {
    name:'默认数据'
  }

  render() {
    return (
      <div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
        	{this.props.count}
        	<InnerHtml></InnerHtml>
        </div>
      </div>
    );
  }
}


export default Hello;
