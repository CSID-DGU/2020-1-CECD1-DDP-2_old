import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { WrapmsgrHeader3 } from '../..';
import WrapmsgrContent from '../WrapmsgrContent';

class ChatRoomApp extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapmsgr_container">
          <div className="wrapmsgr_chat wrapmsgr_state_normalize wrapmsgr_viewmode_full" ng-class="[chatroomState, viewModeClass, {false: 'disabled'}[loggedIn]]" ng-show="current.convo">
            <WrapmsgrHeader3 />
            <WrapmsgrContent />         
          </div>
        </div>
      </Fragment>

    );
  }
}

export default ChatRoomApp;
