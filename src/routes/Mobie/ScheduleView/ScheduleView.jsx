import React, { Component } from "react";
import style from "./ScheduleView.scss";

import {api} from 'common/app'

import FatherDate from "./components/FatherDate";
import ChildTable from "./components/ChildTable";
import ChildTitle from "./components/ChildTitle";
import ChildPlate from "./components/ChildPlate";

import defaultHead from './img/defaultHead.png'

export class ScheduleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content:[]
    };
    this.refreshProps = this.refreshProps.bind(this);
    this.CompileData = this.CompileData.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    this.refreshProps(nextprops);
  }
  componentDidMount() {
    this.refreshProps(this.props);
  }
  refreshProps(props) {
    api.getschedule_client(props.match.params.id).then(res=>{
      if (res.code == 200) {
        console.log(res.result.content);
        
        this.state.content = res.result.content;
        this.setState(this.state)
      }
    },err=>{
      
    })
  }
  CompileData(calldata) {
    //编译
    //编译配置表返回组件
    console.log(calldata);
    
    let _dataArray = []; //要返回的组件
    for (var z = 0; z < calldata.length; z++) {
      //遍历传递过来的数组(配置表目前是数组，直接遍历。)
      switch (
        calldata[z].type //switch组件的类型，所有组件都必须要有type属性
      ) {
        case "date": //日期组件
          let _child = []; //日期组件的子组件
          if (calldata[z].child.length != 0) {
            //判断有没有子元素(数组)
            _child.push(this.CompileData(calldata[z].child)); //如果有，该子组件的配置用编译器编译返回 真实的子组件添加到 日期组件的子组件数组里
          }
          _dataArray.push(<FatherDate data={calldata[z].data}>{_child}</FatherDate>); //添加日期组件到本次要返回的组件数组里，把配置表内的data 传递进去，并且把 日期组件的子组件 作为props添加到日期组件里 。
          break;
        case "table": //table组件
          _dataArray.push(
            <ChildTable data={calldata[z].data}/>
          );
          break;
        case "title": //标题组件
          _dataArray.push(
            <ChildTitle data={calldata[z].data}/>
          );
          break;
        case "plate":
          _dataArray.push(
            <ChildPlate data={calldata[z].data}/>
          );
          break;
        default:
          break;
      }
    }
    return _dataArray;
  }
  render() {
    return (
      <div className={style.ScheduleViewBox}>
        <img src={defaultHead} className={style.HeadImg} alt=""/>
        <div className={style.PaddingBox}>
          {this.CompileData(this.state.content)}
        </div>
      </div>
    );
  }
}
export default ScheduleView;
