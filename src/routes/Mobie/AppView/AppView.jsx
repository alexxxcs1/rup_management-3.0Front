import React, { Component } from 'react'
import style from './AppView.scss';
import CombLoading from 'components/CombLoading';

import {api} from 'common/app';

export class AppView extends Component {
  constructor(props){
      super(props);
      this.state = {
        HeadImgUrl:'',
        HeadLinkUrl:'',
        BotomImgUrl:'',
        BotomLinkUrl:'',
        AppIconData:[],
        loading:true,
        error:null,
      }
      this.refreshApp = this.refreshApp.bind(this);
      this.createAppIcon = this.createAppIcon.bind(this);
      this.HandleWxShare = this.HandleWxShare.bind(this);
  }
  componentWillReceiveProps(nextprops){
      this.refreshApp(nextprops);
  }
  componentDidMount(){
      this.refreshApp(this.props);
  }
  refreshApp(props){
    this.setState({
        HeadImgUrl:'',
        HeadLinkUrl:'',
        BotomImgUrl:'',
        BotomLinkUrl:'',
        AppIconData:[],
        loading:true,
        error:null,
    })
    api.getappinfo_client(!isNaN(props.match.params.id)?props.match.params.id:null).then((res) => {
        console.log(res);
        if (res.code==200) {
            if (res.result) {
              this.setState({
                HeadImgUrl:res.result.top_banner,
                HeadLinkUrl:res.result.top_banner_url,
                BotomImgUrl:res.result.bottom_banner,
                BotomLinkUrl:res.result.bottom_banner_url,
                AppIconData:res.result.item,
              })
              this.HandleWxShare(res.result.title,res.result.desc,res.result.imgurl);
              document.title = res.result.title;
              setTimeout(() => {
                  this.setState({
                    loading:false,
                  })
              }, 1500);
            }else {
                this.setState({
                    error:'错误:九宫格内容为空'
                })
            }
        }else{
            this.setState({
                error:'错误代码'+res.code +' '+res.msg
              })
        }
      }, (err) => {
        this.setState({
            error:err
        })
      });
      
  }
  HandleWxShare(share_title,share_content,share_img){
    let share_url = window.location.href;
    console.log('asd');
    
    api.getWxShare(share_url).then((response) => {
        if (response.code==200) {
            window.wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: response.data.appid, // 必填，公众号的唯一标识
                timestamp: response.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: response.data.noncestr, // 必填，生成签名的随机串
                signature: response.data.signature, // 必填，签名，见附录1
                jsApiList: ['chooseImage', 'onMenuShareTimeline',
                    'onMenuShareAppMessage', 'previewImage', 'uploadImage',
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'hideMenuItems',
                    'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice',
                    'pauseVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice'
                ]
            });
            window.wx.ready(function(){
            window.wx.onMenuShareAppMessage({
                        title: share_title, // 分享标题
                        desc: share_content, // 分享描述
                        link: share_url, // 分享链接
                        imgUrl: share_img, // 分享图标
                        type: 'link', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            api.postShare().then((response) => {
                                console.log(response);
                            },(err) => {
                                console.log(err)
                            });
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
    
                    window.wx.onMenuShareTimeline({
                        title: share_title, // 分享标题
                        desc: share_content, // 分享描述
                        link: share_url, // 分享链接
                        imgUrl: share_img, // 分享图标
                        type: 'link', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            api.postShare().then((response) => {
                                console.log(response);
                            },(err) => {
                                console.log(err)
                            });
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
            });
            window.wx.error(function(res){
            });
        }
      }, (err) => {
        console.log(err)
      })
  }
  createAppIcon(){
    if ( this.state.AppIconData.length == 0) return;
    var cont = this;
    var itemNodes = this.state.AppIconData.map(function(itemBase,index) {   
      return (
        <a key={'icon'+index} href={itemBase.link}>
            <div className={style.Icon}>
                <div className={style.IconBox}>
                    <img src={itemBase.icon} alt="" />
                </div>
                <div className={style.IconName}>
                    {itemBase.title}
                </div>
            </div>
        </a>
      ); 
    });
    return itemNodes;
  }
  render() {
    return (
      <div className={style.AppViewBox}>
        
        {this.state.loading?(this.state.error?this.state.error:<CombLoading />):(<div className={style.AppViewContent}>

            <div className={style.AppHeadBanner}>
                <img src={this.state.HeadImgUrl} alt=""/>
            </div>

            <div className={style.AppIconBox}>
                <div className={style.AppIconListBox}>
                    {this.createAppIcon()}
                </div>
            </div>
        
            <div className={style.AppBotBanner}>
                <img src={this.state.BotomImgUrl} alt=""/>
            </div>

        </div>)}
      </div>
    )
  }
}

export default AppView
