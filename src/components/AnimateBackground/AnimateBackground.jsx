import React, { Component } from 'react'
import style from './AnimateBackground.scss'

export class AnimateBackground extends Component {
  componentDidMount()
  {
    this.refs.Box.style.setProperty('--randomtime', (Math.random()*10 + 10) +'s');
  }
  render() {
    return (
      <div className={style.AnimateBackgroundBox}>
        <div className={style.Box} ref='Box'>

            <span></span>
            <span></span>
            <span></span>

        </div>
      </div>
    )
  }
}

export default AnimateBackground
