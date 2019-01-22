import React, { Component } from 'react'
import style from './TopNav.scss'

export class TopNav extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      actNav:false,
    };   
  }
  componentDidMount()
  {
    var self = this;
    var ScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
    if (ScrollTop == 0) {
      self.setState({
        actNav:true,
      })
    }
    
    window.addEventListener('scroll',()=>
    {
      ScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      if (ScrollTop < 300) {
        self.setState({
          actNav:true,
        })
      }else
      {
        self.setState({
          actNav:false,
        })
      }

    });
  }
  render() {
    return (
      <div className={this.state.actNav?[style.TopNav,style.actNav].join(' '):style.TopNav}>
        
      </div>
    )
  }
}

export default TopNav
