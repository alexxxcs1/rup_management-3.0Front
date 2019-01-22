import React, { Component } from 'react'
import style from './NoticeView.scss';
import CombLoading from 'components/CombLoading';

import {api} from 'common/app';

export class NoticeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      acttitle:'',
      actstarttime:'',
      RichTextContent:'',
      LinkBtnArray:[],
    };
    this.refreshurlProps = this.refreshurlProps.bind(this);
    this.createLinkBox = this.createLinkBox.bind(this);
  }
  componentWillReceiveProps(nextprops){
    this.refreshurlProps(nextprops);
  }
  componentDidMount(){
    this.refreshurlProps(this.props);
  }
  refreshurlProps(props){
    this.setState({
      loading:true,
      acttitle:'',
      actstarttime:'',
      RichTextContent:'',
      LinkBtnArray:[],
      error:null,
    })
    api.getnoticeinfo_client(props.match.params.id).then((res) => {
      
      if (res.code==200) {
        this.setState({
            acttitle:res.result.meeting.title,
            actstarttime:res.result.meeting.start_time,
        })
        if (res.result.notices!=null) {
          let resultArray=[];
          for (let z = 0; z < res.result.notices.item.length; z++) {
              resultArray.push([res.result.notices.item[z].title,res.result.notices.item[z].url]);
          }
          this.setState({
              RichTextContent:res.result.notices.content,
              LinkBtnArray:resultArray,
          })
        }
        setTimeout(() => {
          this.setState({
            loading:false,
          })
        }, 1500);
        
      }else{
        this.setState({
          error:'错误代码'+res.code +' '+res.msg
        })
      }
    }, (err) => {
      this.setState({
        error:'加载超时'
      })
    })
  }
  createLinkBox(){
      if(this.state.LinkBtnArray.length==0) return;
      var cont = this;
      var itemNodes = this.state.LinkBtnArray.map(function(itemBase,index) {   
        return (
          <a key={'linkbtn'+index} href={itemBase[1]}><div className={style.urlitem} key={Math.random()*1024 + 'urlbtn'}>{itemBase[0]}</div></a>
        ); 
      });
      return itemNodes;
  }
  render() {
    return (
      <div className={style.outbox}>
        <div className={style.NoticeViewBox}>
          {this.state.loading?(this.state.error?<div className={style.loadingPage}>{this.state.error}</div>:<div className={style.loadingPage}><CombLoading /></div>):<div className={style.TitleKV}>

          <div className={style.title}>
              {this.state.acttitle}
          </div>
          <div className={style.time}>
              {this.state.actstarttime}
          </div>
          <div className={style.content} dangerouslySetInnerHTML={{__html:this.state.RichTextContent}}></div>
          <div className={style.LinkBox}>
            {this.createLinkBox()}
          </div>

          </div>}
          
        </div>
      </div>
    )
  }
}

export default NoticeView
