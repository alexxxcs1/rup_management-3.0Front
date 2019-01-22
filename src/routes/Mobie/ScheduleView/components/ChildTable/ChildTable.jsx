import React, { Component } from 'react'
import style from './ChildTable.scss'
  
export class ChildTable extends Component {
constructor(props) {
  super(props);
  this.state = {
    data:[],
  };
     this.refreshProps = this.refreshProps.bind(this);
     this.createRow = this.createRow.bind(this);
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
createRow(){
  if (this.state.data.length == 0) return;
    var cont = this;
    var itemNodes = this.state.data.map(function(itemBase, index) {
      let startTimeArray = itemBase.time[0].split(':');
      let endTimeArray = itemBase.time[1].split(':');
      let startDate = new Date(new Date(new Date(new Date().setHours(startTimeArray[0])).setMinutes(startTimeArray[1])).setSeconds(startTimeArray[2]))
      let endDate = new Date(new Date(new Date(new Date().setHours(endTimeArray[0])).setMinutes(endTimeArray[1])).setSeconds(endTimeArray[2]))
      return (
        <div className={style.TableRow}>
            <div className={[style.TableCoulm,style.TimeStyle].join(' ')}>{startDate.format("hh:mm")}-{endDate.format("hh:mm")}</div>
            <div className={[style.TableCoulm,style.ContentStyle].join(' ')}>{(()=>{
              let result = [];
              let item = itemBase.content.split(',');
              for (let x = 0; x < item.length; x++) {
                result.push(<div className={style.contents}>{item[x]}</div>)
              }
              return result
            })()}</div>
            <div className={[style.TableCoulm,style.HostStyle].join(' ')}>{(()=>{
              let result=[];
              let item = itemBase.host.split(',');
              for (let x = 0; x < item.length; x++) {
                result.push(<div className={style.hosts}>{item[x]}</div>)
              }
              return result
            })()}</div>
        </div>
      );
    });
    return itemNodes;
}
render() {
  return (
    <div className={style.ChildTableBox}>
        <div className={style.TableRow}>
            <div className={[style.TableCoulm,style.TableHead,style.TableHeadTime].join(' ')} >时间</div>
            <div className={[style.TableCoulm,style.TableHead].join(' ')} >内容</div>
            <div className={[style.TableCoulm,style.TableHead].join(' ')} >主持</div>
        </div>
        
        {this.createRow()}
    </div>
   )
   }
}
export default ChildTable