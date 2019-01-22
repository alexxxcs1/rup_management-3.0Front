import React, { Component } from 'react'
import style from './RichTextView.scss';
import {api} from 'common/app';
import CombLoading from 'components/CombLoading';


export class RichTextView extends Component {
  constructor(props){
    super(props);
    this.state={
        content:'',
        loading:true,
        error:null,
    };
    this.refreshProps = this.refreshProps.bind(this);
  }
  componentWillReceiveProps(nextprops){
    this.refreshProps(nextprops)
  }
  componentDidMount(){
    this.refreshProps(this.props)      
  }
  refreshProps(props){
    this.setState({
        content:'',
    })
    api.getrichtext_client(props.match.params.id).then((res) => {
        if (res.code==200) {

            document.title = res.result.name,
            this.setState({
                content:res.result.content,
                loading:false,
            })
        }else{
            this.setState({
                error:'错误代码:'+res.code+' '+res.msg 
            })
        }
      }, (err) => {
          this.setState({
              error:'服务器错误，请刷新重试'
          })
      })
  }
  render() {
    return (
      <div className={style.RichTextViewBox} >
        {this.state.loading?(this.state.error?this.state.error:<CombLoading />):
        <div className={style.content} dangerouslySetInnerHTML={{__html:this.state.content}}>

        </div>}
      </div>
    )
  }
}

export default RichTextView
