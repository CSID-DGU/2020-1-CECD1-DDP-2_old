import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route } from 'react-router-dom';
import ChatRoomApp from './components/UI_Components/ChatRoom/ChatRoomApp.js';
import CreeatChatRoomApp from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';
import CreateChatRoom from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';
import ChatRoomList from './components/UI_Components/ChatRoomList/ChatRoomList.js';


function App(){
    return(
        <div>
            <h1>DDP팀 데모 사이트</h1>
            <ul className = "demoUl">
                <li className = "demoLi"><a href = "/createChatRoom">채팅방 생성</a></li>
                <li className = "demoLi"><a href = "/chatRoomList">채팅방 리스트</a></li>
                <li className = "demoLi"><a href = "/chatRoom">채팅방</a></li>
            </ul>
            <Route exact path ="/createChatRoom"><CreateChatRoom></CreateChatRoom></Route>
            <Route path = "/chatRoomList"><ChatRoomList></ChatRoomList></Route>
            <Route path = "/chatRoom"><ChatRoomApp></ChatRoomApp></Route>
        </div>
    )
   
}

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
