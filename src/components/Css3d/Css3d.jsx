import React, { Component } from 'react'
import style from './Css3d.scss';
const requireContext = require.context("./imgs/bkg", true, /^\.\/.*\.png$/);    //读取图片
const images = requireContext.keys().map(requireContext);           //生成图片数组

export class Css3d extends Component {
  constructor(prop)
  { 
    super(prop);
    this.state = {};
    this.createBkgItem = this.createBkgItem.bind(this);
    this.calTranslateZ = this.calTranslateZ.bind(this);
  }
  componentDidMount()
  {
      
  }
  calTranslateZ(opts) {
    return Math.round(opts.width / (2 * Math.tan(Math.PI / opts.number)))
  }
  createBkgItem()
  {
    var deg = 360 / 20;
    
    
    var R = parseInt((93 / 2) / Math.tan((deg/ 2 )* Math.PI / 180) - 1) // tan@ = 对边(R) / 临边(W/2)
    console.log(R);
    var cont = this;
    var startDeg = 180;
    var itemNodes = images.map(function(itemBase,index) {   
      startDeg -= deg;
      return (
        <div key={'css3d'+ Math.random()*1024} className={style.item} style={{backgroundImage:'url('+itemBase+')',transform:'translateX(-50%) rotateY('+startDeg+'deg) translateZ('+(-R)+'px)',}}/>
      ); 
    });
    return itemNodes;
  }
  render() {
    return (
        <div className={style.hiddenbox}>
            <div className={style.outbox}>
                <div className={style.Box}>
                    {this.createBkgItem()}
                </div>
            </div>
        </div>
    )
  }
}

export default Css3d
