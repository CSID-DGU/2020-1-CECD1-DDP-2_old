import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/css/wrapmsgr.css';

function WrapmsgrContent2() {
    return (
        <div class="wrapmsgr_content" ng-class="{'no-header': current.convo.convoType == 2}">
            <div class="wrapmsgr_messages" in-view-container="">
                <ul>
                    <li id="message_5" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope"  >
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 8일 (금요일)</span>
                        </div>
                        <div class="wrapmsgr_msg_system ng-scope" ng-class="{revision: message.messageType == MESSAGE_TYPE_SYSTEM_REVISION}" ng-if="message.messageType >= MESSAGE_TYPE_SYSTEM">
                            <span class="ng-binding">Administrator joined room.<a href="" class="wrapmsgr_right"></a></span>
                        </div>

                    </li><li id="message_6" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">

                        <div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="Administrator">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo cyan group-remove" user="users[message.sendUserId]"  >Ad</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">Administrator</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">안녕하세요.</div>

                                </div>
                                <div class="wrapmsgr_msg_time ng-hide" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 7:16</span>
                                </div>
                            </div>
                        </div>

                    </li><li id="message_7" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_msg ng-scope continuous" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="Administrator">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo cyan group-remove" user="users[message.sendUserId]"  >Ad</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">Administrator</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">어라?</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 7:16</span>
                                </div>
                            </div>
                        </div></li><li id="message_8" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">

                        <div class="wrapmsgr_msg_system ng-scope" ng-class="{revision: message.messageType == MESSAGE_TYPE_SYSTEM_REVISION}" ng-if="message.messageType >= MESSAGE_TYPE_SYSTEM">
                            <span class="ng-binding">DDP joined room by invitation from Administrator.<a href="" class="wrapmsgr_right"></a></span>
                        </div>

                    </li><li id="message_29" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 9일 (토요일)</span>
                        </div>
                        <div class="wrapmsgr_msg_system ng-scope" ng-class="{revision: message.messageType == MESSAGE_TYPE_SYSTEM_REVISION}" ng-if="message.messageType >= MESSAGE_TYPE_SYSTEM">
                            <span class="ng-binding">DDP2 joined room.<a href="" class="wrapmsgr_right"></a></span>
                        </div>

                    </li><li id="message_30" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 10일 (일요일)</span>
                        </div><div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="DDP2">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo purple group-remove" user="users[message.sendUserId]"  >DD</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">DDP2</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">안녕하세요!</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 6:17</span>
                                </div>
                            </div>
                        </div>
                    </li><li id="message_52" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 15일 (금요일)</span>
                        </div>
                        <div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="Administrator">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo cyan group-remove" user="users[message.sendUserId]"  >Ad</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">Administrator</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">오브젝트 스토리지 PPT 자료 입니다.</div>

                                </div>
                                <div class="wrapmsgr_msg_time ng-hide" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 2:10</span>
                                </div>
                            </div>
                        </div>
                    </li><li id="message_53" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">

                        <div class="wrapmsgr_msg ng-scope continuous" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="Administrator">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo cyan group-remove" user="users[message.sendUserId]"  >Ad</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">Administrator</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">과련된 부분은 추가 확인 해 보시길...</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 2:10</span>
                                </div>
                            </div>
                        </div>
                    </li><li id="message_62" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 23일 (토요일)</span>
                        </div>
                        <div class="wrapmsgr_msg_system ng-scope" ng-class="{revision: message.messageType == MESSAGE_TYPE_SYSTEM_REVISION}" ng-if="message.messageType >= MESSAGE_TYPE_SYSTEM">
                            <span class="ng-binding">DDP3 joined room.<a href="" class="wrapmsgr_right"></a></span>
                        </div>
                    </li><li id="message_63" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 28일 (목요일)</span>
                        </div>
                        <div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="DDP">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo orange group-remove" user="users[message.sendUserId]"  >DD</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">DDP</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">테스트</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 7:09</span>
                                </div>
                            </div>
                        </div>
                    </li><li id="message_64" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope">
                        <div class="wrapmsgr_date ng-scope" ng-if="diffDays(current.messages[$index-1].createdAt, message.createdAt) >= 1">
                            <span class="ng-binding">5월 29일 (금요일)</span>
                        </div><div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="DDP">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo orange group-remove" user="users[message.sendUserId]"  >DD</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">DDP</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">안녕하세요</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 1:38</span>
                                </div>
                            </div>
                        </div>
                    </li><li id="message_65" ng-repeat="message in current.messages" ng-class="{'li-right': user.id == message.sendUserId}" class="ng-scope li-right"  >
                        <div class="wrapmsgr_msg ng-scope" ng-if="message.messageType < MESSAGE_TYPE_SYSTEM" ng-class="{'continuous': isContinuous(current.messages[$index-1], message)}">
                            <div class="wrapmsgr_msg_user ng-isolate-scope" ng-attr-title="{{users[message.sendUserId].userName}}" wrapmsgr-user-profile="users[message.sendUserId]" user-profile-disabled="message.sendUserId.substr(0, 5) == '@BOT@'" title="DDP3">
                                <span class="user-photo ng-binding ng-isolate-scope no-photo cyan" user="users[message.sendUserId]">DD</span>
                            </div>
                            <div class="wrapmsgr_msg_userid ng-binding">DDP3</div>
                            <div class="wrapmsgr_msg_bubble-wrap">
                                <div class="wrapmsgr_msg_bubble">

                                    <div class="wrapmsgr_msg_body ng-binding" ng-bind-html="message.body | linky:'_blank'">ㅇ</div>

                                </div>
                                <div class="wrapmsgr_msg_time" ng-hide="isContinuous(message, current.messages[$index+1])">
                                    <span class="ng-binding">오후 1:41</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="wrapmsgr_latest_message ng-hide" ng-show="current.latestMessage" ng-click="messagesScrollToLatestMessage()">
                    <i class="icon_arrow_down"></i>
                </div>
            </div>
        </div>
    )
}


export default WrapmsgrContent2;