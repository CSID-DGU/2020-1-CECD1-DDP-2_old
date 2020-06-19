import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route } from 'react-router-dom';
import ChatRoomApp from './components/UI_Components/ChatRoom/ChatRoomApp.js';
import CreeatChatRoomApp from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';
import CreateChatRoom from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';


function App(){
    return(
        <div>
            <h1>DDP팀 데모 사이트</h1>
            <ul className = "demoUl">
                <li className = "demoLi"><a href = "/createChatRoom"><img className = "demoImg" src = { require('./resources/images/speak.png')}/></a></li>
                <li className = "demoLi"><a href = "/chatRoomList"><img className = "demoImg" src = { require('./resources/images/list.png')}/></a></li>
                <li className = "demoLi"><a href = "/chatRoom"><img className = "demoImg" src = { require('./resources/images/chat.png')}/></a></li>
            </ul>
            <Route exact path ="/createChatRoom"><CreateChatRoom></CreateChatRoom></Route>
            <Route path = "/chatRoomList"></Route>
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
