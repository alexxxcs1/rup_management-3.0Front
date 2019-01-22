import React, { Component } from 'react'
import style from './ProgressBanner.scss'

export class ProgressBanner extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        intervalReflash:null,
        loaded:false,
        prog:0,
        animatover:false,
    };
  }
  componentWillReceiveProps(nextprop)
  {
    
    this.setState({
        loaded:nextprop.loaded,
    });
    if (nextprop.color === 'random') {
        this.refs.proitem.style.backgroundColor = '#'+(parseInt(Math.random()*255,10).toString(16))+(parseInt(Math.random()*255,10).toString(16))+(parseInt(Math.random()*255,10).toString(16));
    }else{
        this.refs.proitem.style.backgroundColor = nextprop.color
    }
    
  }
  componentDidMount()
  {
    this.setState({
        loaded:this.props.loaded,
    });
    if (this.props.color === 'random') {
        this.refs.proitem.style.backgroundColor = '#'+(parseInt(Math.random()*255,10).toString(16))+(parseInt(Math.random()*255,10).toString(16))+(parseInt(Math.random()*255,10).toString(16));
    }else{
        this.refs.proitem.style.backgroundColor = this.props.color
    }
    
    
    this.setState({
        intervalReflash:setInterval(()=>{
            // console.log(this.state.loaded);
            if (this.state.loaded) {
                this.setState({prog : 100});
                var self = this;
                setTimeout(() => {
                    self.setState({
                        animatover:true,
                    })
                }, 500);
            
                clearInterval(this.state.intervalReflash);
            }else
            {
                if (this.state.prog<90) {
                    this.setState({
                        prog:this.state.prog+Math.random() * 10
                    })
                }
                
            }
        },100)
    })
  }
  refresh(steep)
  {
      this.setState({
          pro:steep
      });

  }
  render() {
    return (
      <div className={this.state.animatover?style.ProgressBannerBox+' '+style.hide:style.ProgressBannerBox} 
      style={{width:this.state.prog+'%'}}
      ref='proitem'>
        
      </div>
    )
  }
}

export default ProgressBanner
