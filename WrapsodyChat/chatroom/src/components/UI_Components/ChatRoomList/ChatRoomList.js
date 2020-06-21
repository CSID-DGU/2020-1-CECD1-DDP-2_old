import React, {Component, Fragment} from 'react';

import '../../../resources/css/wrapmsgr-components.css';
import '../../../resources/css/wrapmsgr.css'

import { render } from 'react-dom';

class ChatRoomList extends Component{
    render(){
        return(
            <div className = "wrapmsgr_container">
            <div className = "wrapmsgr_chat_list">
            <Header/>
            <List/>
            </div>
        </div>
        );
    }
}

class Header extends Component{
    render(){
        return (
            <div className = "wrapmsgr_header">
                <h1 className = "wrapmsgr_title">Wrapsody Chat</h1>
                <div className="wrapmsgr-header-icon-wrap">
			 		<a href=""><i className="icon_times" title="Close" ng-click="showChatList = false"></i></a>
			 	</div>
            </div>
        )
    }
}

class List extends Component{
    render(){
        return (
            <div class="wrapmsgr_content">
			
				<div class="wrapmsgr_chatroom_search_div">
					<input type="text" placeholder="Enter a document or group room." ng-model="search.convo" ng-disabled="!loggedIn" class="ng-pristine ng-untouched ng-valid ng-empty"/>
					<i class="icon_search"></i>
				</div>
				<div class="wrapmsgr_chatroom_list">
					<ul>
						<li ng-repeat="oto in convos | filter:{convoType: 2, otoType: 1} | filter:{name: search.convo}" ng-click="showOrReplaceConvo(oto)" class="ng-scope">
							<span class="user-photo ng-binding ng-isolate-scope" user="{userName: oto.name, userId: oto.relationId, photo: parseImageUrl(oto.thumbnail)}" ></span>
							<div class="title_h5">
								<span class="chatroom-name ng-binding" title="Wrapsody Chatbot">Wrapsody Chatbot</span>
								<i ng-show="notificationEnabled" ng-class="{icon_bell_off: oto.notificationType === 0}"></i>
								<span class="chatroom-message-contents ng-binding"></span>
							</div>
							<div class="wrapmsgr_right">
								<span class="chatroom-date ng-binding">2020-05-17</span>
								
							</div>
						</li>
						    <li ng-repeat="room in convos | filter:{convoType: 1} | filter:{name: search.convo} | orderBy:['roomType', '!latestMessageAt', '-latestMessageAt']" ng-click="showOrReplaceConvo(room)" class="ng-scope">
							<span class="user-photo ng-binding ng-scope ng-isolate-scope group no-photo blue" ng-if="room.roomType == 2" user="{userName: room.name, userId: room.relationId, type:'dept'}">dd</span>
							
							<div class="title_h5">
								<span class="chatroom-name ng-binding" title="ddp_dept">ddp_dept</span>
								<span class="chatroom-user-cnt ng-binding">3</span>
								<i ng-show="notificationEnabled" ng-class="{icon_bell_off: room.notificationType === 0}" class="icon_bell_off"></i>
								<span class="chatroom-message-contents ng-binding">안녕!</span>
							</div>
							<div class="wrapmsgr_right">
								<span class="chatroom-date ng-binding">2020-05-09</span>
								<span class="wrapmsgr_unread_outer wrapmsgr_right ng-hide" ng-show="room.unread > 0">
									<span class="wrapmsgr_unread wrapmsgr_right ng-binding">3</span>
								</span>
							</div>
						</li><li ng-repeat="room in convos | filter:{convoType: 1} | filter:{name: search.convo} | orderBy:['roomType', '!latestMessageAt', '-latestMessageAt']" ng-click="showOrReplaceConvo(room)" class="ng-scope">
							<document-icon ng-if="room.roomType == 3" name="room.name" class="ng-scope ng-isolate-scope"><i ng-class="docIcon" class="icon_pdf">			<span class="path1"></span>			<span class="path2"></span>			<span class="path3"></span>			<span class="path4"></span>			<span class="path5"></span>			<span class="path6"></span>			<span class="path7"></span>			<span class="path8"></span>			<span class="path9"></span>			<span class="path10"></span>			<span class="path11"></span>			</i></document-icon>
							<div class="title_h5">
								<span class="chatroom-name ng-binding" title="Object Storage의 이해와 활용 V1.pdf">Object Storage의 이해와 활용 V1.pdf</span>
								<span class="chatroom-user-cnt ng-binding">5</span>
								<i ng-show="notificationEnabled" ng-class="{icon_bell_off: room.notificationType === 0}"></i>
								<span class="chatroom-message-contents ng-binding">ㅇ</span>
							</div>
							<div class="wrapmsgr_right">
								<span class="chatroom-date ng-binding">2020-05-29</span>
								<span class="wrapmsgr_unread_outer wrapmsgr_right ng-hide" ng-show="room.unread > 0">
									<span class="wrapmsgr_unread wrapmsgr_right ng-binding">1</span>
								</span>
							</div>
						</li><li ng-repeat="room in convos | filter:{convoType: 1} | filter:{name: search.convo} | orderBy:['roomType', '!latestMessageAt', '-latestMessageAt']" ng-click="showOrReplaceConvo(room)" class="ng-scope">
							<document-icon ng-if="room.roomType == 3" name="room.name" class="ng-scope ng-isolate-scope"><i ng-class="docIcon" class="icon_txt">			<span class="path1"></span>			<span class="path2"></span>			<span class="path3"></span>			<span class="path4"></span>			<span class="path5"></span>			<span class="path6"></span>			<span class="path7"></span>			<span class="path8"></span>			<span class="path9"></span>			<span class="path10"></span>			<span class="path11"></span>			</i></document-icon>
							<div class="title_h5">
								<span class="chatroom-name ng-binding" title="wrapsody.txt">wrapsody.txt</span>
								<span class="chatroom-user-cnt ng-binding">4</span>
								<i ng-show="notificationEnabled" ng-class="{icon_bell_off: room.notificationType === 0}"></i>
								<span class="chatroom-message-contents ng-binding"></span>
							</div>
							<div class="wrapmsgr_right">
								<span class="chatroom-date ng-binding"></span>
								
							</div>
						</li>
					</ul>
				</div>
			</div>
        )
    }
}

export default ChatRoomList;
