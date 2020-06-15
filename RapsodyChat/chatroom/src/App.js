import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/UI_Components/Member/index';
import ChatRoom from './components/UI_Components/ChatRoom/index';
import RoomInfo from './components/UI_Components/RoomInfo/index';
import SearchBox from './components/UI_Components/SearchDiv/index';
import ButtonBox from './components/UI_Components/ButtonBox/index';
import { WrapmsgrHeader3 } from './components';
import WrapmsgrContent from './components/UI_Components/WrapmsgrContent';
import './resources/css/base.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="wrapmsgr_container">
          <div className="wrapmsgr_chat wrapmsgr_state_normalize wrapmsgr_viewmode_full" ng-class="[chatroomState, viewModeClass, {false: 'disabled'}[loggedIn]]" ng-show="current.convo">
            <WrapmsgrHeader3 />
            <WrapmsgrContent />
            {/* <RoomInfo>
            <ButtonBox />
            <SearchBox />
          </RoomInfo> */}
            {/* <Member profile="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" name="wl수" dept="개발" /> */}
          </div>
          {/* <ChatRoom>
            </ChatRoom> */}
        </div>
      </Fragment>

    );
  }
}

export default App;
