import React, { Component } from 'react'
import {Route,Switch  } from 'react-router-dom';
import style from './Home.scss'
import NoticeView from '../Mobie/NoticeView';
import AppView from '../Mobie/AppView';
import RichTextView from '../Mobie/RichTextView';
import ScheduleView from '../Mobie/ScheduleView'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount()
  {

  }
  render() {
    return (
      <div className={style.Box}>
        <Switch>
          <Route path='/notice/:id' component={NoticeView} / > 
          <Route path='/app/:id' component={AppView} / > 
          <Route path='/textview/:id' component={RichTextView} / > 
          <Route path='/scheduleview/:id' component={ScheduleView} / > 
        </Switch>
      </div>
    )
  }
}

export default Home
