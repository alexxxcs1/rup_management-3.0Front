import React, { Component } from "react";
import style from "./FatherDate.scss";

const Number_chweek = ["日", "一", "二", "三", "四", "五", "六"];
export class FatherDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        content: null,
        date: null
      },
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
      <div className={style.FatherDateBox}>
        <div className={style.FatherBox}>
          <div className={style.FatherDateTitle}>{this.state.data.content}</div>
          <div className={style.DateTime}>
            <span>{new Date(this.state.data.date).format("MM月dd日")}</span>
            <span>周{Number_chweek[new Date(this.state.data.date).getDay()]}</span>
          </div>
        </div>
        <div className={style.ChildrenBox}>{this.props.children}</div>
      </div>
    );
  }
}
export default FatherDate;
