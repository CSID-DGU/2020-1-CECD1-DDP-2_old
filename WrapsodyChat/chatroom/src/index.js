import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route } from 'react-router-dom';
import ChatRoomApp from './components/UI_Components/ChatRoom/ChatRoomApp.js';
import CreeatChatRoomApp from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';
import CreateChatRoom from './components/UI_Components/CreateChatRoom/CreateChatRoom.js';

function Home(){
    return(
        <div>
            <h2>Home</h2>
            Home..
        </div>
    )
}
function Topics(){
    return(
        <div>
            <h2>Topics</h2>
            Topics..
        </div>
    )
}
function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            Contact..
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>DDP팀 데모 사이트</h1>
            <ul>
                <li><a href = "/">채팅방 생성</a></li>
                <li><a href = "/topics">채팅방 리스트</a></li>
                <li><a href = "/contact">채팅방</a></li>
            </ul>
            <Route exact path =""><CreateChatRoom></CreateChatRoom></Route>
            <Route path = "/topics"><Topics></Topics></Route>
            <Route path = "/contact"><ChatRoomApp></ChatRoomApp></Route>
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
