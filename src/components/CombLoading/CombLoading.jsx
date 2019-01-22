import React, { Component } from 'react'
import style from './CombLoading.scss';
import loading from './img/loading.gif'

export class CombLoding extends Component {
  constructor(props){
    super(props);
    this.state = {
      color:'#ffffff',
    };
  }
  componentDidMount(){
    const color_1 = (parseInt(Math.random()*255,10).toString(16));
    const color_2 = (parseInt(Math.random()*255,10).toString(16));
    const color_3 = (parseInt(Math.random()*255,10).toString(16)); 
    const randomcolor = '#'+(color_1.length==2?color_1:color_1+'0')+(color_2.length==2?color_2:color_2+'0')+(color_3.length==2?color_3:color_3+'0');
    this.setState({
      color:randomcolor
    })
    console.log(randomcolor);
  }
  render() {
    return (
      <div className={style.CombLodingBox}>
        <img src={loading} alt=""/>
        {/* <div>
          <div className={[style.coulm_2,style.coulm].join(' ')}>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
          </div>
          <div className={[style.coulm_3,style.coulm].join(' ')}>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
          </div>
          <div className={[style.coulm_2_b,style.coulm].join(' ')}>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
            <div className={style.sharp} style={{'--randomcolor':this.state.color}}></div>
          </div>
        </div>
        <div className={style.circle} style={{'--randomcolor':this.state.color}}></div>        
        <div className={style.circle1} style={{'--randomcolor':this.state.color}}></div>
        <div className={style.circle2} style={{'--randomcolor':this.state.color}}></div>
        <div className={style.circle3} style={{'--randomcolor':this.state.color}}></div> */}

      </div>
    )
  }
}

export default CombLoding
