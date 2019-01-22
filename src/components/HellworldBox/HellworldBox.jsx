import React, { Component } from 'react'
import style from './HellworldBox.scss'

export class HellworldBox extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
        actshake:false,
        pwarray:[],
        pw:'HLOW',
    };
    this.PwClick = this.PwClick.bind(this);
  }
  componentDidMount()
  {
    this.refs.homebox.style.setProperty('--randomtime', (Math.random()+0.1) +'s');
  }
  PwClick(key,e)
  {
      
      var tmppw = this.state.pwarray;
      tmppw.push(key)
      if (tmppw.length===this.state.pw.length) {
        if (tmppw.join('')===this.state.pw) {
            // hashHistory.push('/issacworld'); 
        }else
        {
            this.setState({
                pwarray:[],
                actshake:true,
            })
            var self = this;
            setTimeout(() => {
                self.setState({
                    actshake:false,
                })
            }, 500);
        }
      }
  }
  render() {
    return (
        <div className={this.state.actshake?[style.HomeBox,style.actshake].join(' '):style.HomeBox} ref='homebox'>
            <span onClick={this.PwClick.bind(this,'H')}>H</span>
            <span onClick={this.PwClick.bind(this,'E')}>E</span>
            <span onClick={this.PwClick.bind(this,'L')}>L</span>
            <span onClick={this.PwClick.bind(this,'L')}>L</span>
            <span onClick={this.PwClick.bind(this,'W')}>W</span>
            <span onClick={this.PwClick.bind(this,'O')}>O</span>
            <span onClick={this.PwClick.bind(this,'R')}>R</span>
            <span onClick={this.PwClick.bind(this,'L')}>L</span>
            <span onClick={this.PwClick.bind(this,'D')}>D</span>
        </div>
    )
  }
}

export default HellworldBox
