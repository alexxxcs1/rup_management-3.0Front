import React, { Component } from 'react'
import style from './ChildTitle.scss'
  
export class ChildTitle extends Component {
constructor(props) {
  super(props);
  this.state = {
    data:{
      value:null
    }
  };
     this.refreshProps = this.refreshProps.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  this.state.data = props.data;
  this.setState(this.state);
}
render() {
  return (
    <div className={style.ChildTitleBox}>
        {this.state.data.value}
    </div>
   )
   }
}
export default ChildTitle