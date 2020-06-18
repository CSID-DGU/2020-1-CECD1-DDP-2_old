import React,{Component, useState,useEffect} from 'react';
import {TreeView, TreeItem} from "@material-ui/lab"
import './CreateChatRoom.css';
import Checkbox from '@material-ui/core/Checkbox';
const TreeViewContext = require('@material-ui/lab/esm/TreeView/TreeViewContext');

class CreateChatRoom extends Component{
    render(){
        return(
            <div className = "wrapmsgr_container">
                <div className = "wrapmsgr_popup_contrainer active">
                    <div className = "wrapmsgr_popup manage_doc_room">
                        <Header/>
                        <ManageDocRoomForm/>
                    </div>
                </div>
            </div>
            
        );
    }
}

class Header extends Component{
    render(){
        return(
            <>
            <div className = "wrapmsgr_popup_header">
                <h2 className = "title_h2">
                    <span>Create Document Chat Room</span>
                </h2>
                <a href>
                    <i className = "icon_times">
                    </i>
                </a>
            </div>
            </>
        );
    }
}

class ManageDocRoomForm extends Component{
    render(){
        return(
            <>
            <form name = "manageDocRoomForm" className = "">
                <div className = "wrapmsgr_popup_body">
                    <InfoBar/>
                    <Group/>
                </div>
                <WrapmsgrPopupFooter/>
            </form>
            </>

        );
    }
}

function Checkboxes() {
    const [checked, setChecked] = useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
        <Checkbox
          checked = {true}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        /> 
    );    
}


function App(){
    const [count, setCount] = useState(0)
    //count는 변수, setCount는 count를 설정하기 위한 함수 var, setVar로 이름 설정하는것이 코드관행임
    return (
        <div className = "App">
            <header className = "App-header">
                <button onClick = {() => setCount(count + 1)}/>{count}
            </header>
        </div>
    );
}

function PossibleMember(){
    return(
        <div className = "wrapmsgr_oran_tree">
            <div className="wrapmsgr_organ_tree_header">
                <input type="checkbox" id="manage_doc_room_select_all" ng-disabled="!loggedIn || organTreeOptions.disabled" ng-checked="checkAllMembers()" ng-click="toggleAllMembers($event)"/>
                <label for="manage_doc_room_select_all">
                    <i class="icon_checkbox" ng-class="{disabled: organTreeOptions.disabled}"></i>
                </label>
                <span>Select All</span>
            </div>
            <TreeView>
                <TreeItem nodeId = "1" label = {
                    <>
                    <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                        <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
                        <label for="member-adminobject:79" data-nodrag="">
                            <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
                        </label>
                    </span>
                    <span className = "user-photo no-photo blue">페이</span>
                    <span className = "wrapmsgr_member" styles = "padding-left: 20px">페이레터</span>
                    <span className = "wrapmsgr_master">                           Owner</span>
                    </>  
                }/>
                <TreeItem nodeId = "2" label = {
                    <>
                        <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                        <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
                        <label for="member-adminobject:79" data-nodrag="">
                            <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
                        </label>
                    </span>
                    <span className = "user-photo no-photo blue">D</span>
                    <span className = "wrapmsgr_member">ddp1</span>
                    <span className = "wrapmsgr_master"></span>
                    </>  
                }/>
                <TreeItem nodeId = "3" label = {
                    <>
                        <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                        <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
                        <label for="member-adminobject:79" data-nodrag="">
                            <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
                        </label>
                    </span>
                    <span className = "user-photo no-photo blue">D</span>
                    <span className = "wrapmsgr_member">ddp2</span>
                    <span className = "wrapmsgr_master"></span>
                    </>  
                }/>
            </TreeView>
        </div>
    );
}

{/* <div class="wrapmsgr_organ_tree right-list-col ng-scope angular-ui-tree" ui-tree="inviteTreeOptions">
    <ol ui-tree-nodes="" ng-model="inviteMembers" ng-show="inviteMembers.length > 0" class="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-not-empty" style="">
        <!-- ngRepeat: member in inviteMembers | orderBy:['-disabled', 'userName'] --><li ng-repeat="member in inviteMembers | orderBy:['-disabled', 'userName']" ui-tree-node="" data-collapsed="true" class="ng-scope angular-ui-tree-node" expand-on-hover="false" style="">
            <div wrapmsgr-user-profile="users[member.userId] || member.userId" class="ng-isolate-scope">
                <span class="user-photo ng-binding ng-isolate-scope no-photo purple" user="member">DD</span>
                <span class="wrapmsgr_member ng-binding">
                    DDP2
                    <a href=""><!-- ngIf: member.userId != user.id && !member.disabled --></a>
                </span>
            </div>
        </li><!-- end ngRepeat: member in inviteMembers | orderBy:['-disabled', 'userName'] -->
    </ol>
</div> */}



class SelectedMember extends Component{
    render(){
        return(
            <div className="wrapmsgr_organ_tree right-list-col ng-scope angular-ui-tree" ui-tree="inviteTreeOptions">
                <ol ui-tree-nodes="" ng-model="inviteMembers" ng-show="inviteMembers.length > 0" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-not-empty">
                    <li ng-repeat="member in inviteMembers | orderBy:['-disabled', 'userName']" ui-tree-node="" data-collapsed="true" class="ng-scope angular-ui-tree-node" expand-on-hover="false">
                        <div wrapmsgr-user-profile="users[member.userId] || member.userId" class="ng-isolate-scope">
                            <span className="user-photo ng-binding ng-isolate-scope no-photo purple" user="member">DD</span>
                            <span className="wrapmsgr_member ng-binding">
                                DDP2
                                <a href=""></a>
                            </span>
                        </div>
                    </li>
                </ol>
            </div>
        );
    }
}

// function Group(){
//     return(
//         <div className = "group">
//             <div className = "wrapmsgr_oran_tree">
//             <div className="wrapmsgr_organ_tree_header">
//                 <input type="checkbox" id="manage_doc_room_select_all" ng-disabled="!loggedIn || organTreeOptions.disabled" ng-checked="checkAllMembers()" ng-click="toggleAllMembers($event)"/>
//                 <label for="manage_doc_room_select_all">
//                     <i class="icon_checkbox" ng-class="{disabled: organTreeOptions.disabled}"></i>
//                 </label>
//                 <span>Select All</span>
//             </div>
//             <TreeView>
//                 <TreeItem nodeId = "1" label = {
//                     <>
//                     <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
//                         <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
//                         <label for="member-adminobject:79" data-nodrag="">
//                             <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
//                         </label>
//                     </span>
//                     <span className = "user-photo no-photo blue">페이</span>
//                     <span className = "wrapmsgr_member" styles = "padding-left: 20px">페이레터</span>
//                     <span className = "wrapmsgr_master">                           Owner</span>
//                     </>  
//                 }/>
//                 <TreeItem nodeId = "2" label = {
//                     <>
//                         <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
//                         <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
//                         <label for="member-adminobject:79" data-nodrag="">
//                             <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
//                         </label>
//                     </span>
//                     <span className = "user-photo no-photo blue">D</span>
//                     <span className = "wrapmsgr_member">ddp1</span>
//                     <span className = "wrapmsgr_master"></span>
//                     </>  
//                 }/>
//                 <TreeItem nodeId = "3" label = {
//                     <>
//                         <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
//                         <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
//                         <label for="member-adminobject:79" data-nodrag="">
//                             <i class="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
//                         </label>
//                     </span>
//                     <span className = "user-photo no-photo blue">D</span>
//                     <span className = "wrapmsgr_member">ddp2</span>
//                     <span className = "wrapmsgr_master"></span>
//                     </>  
//                 }/>
//             </TreeView>
//         </div>
//         <div className="wrapmsgr_organ_tree right-list-col ng-scope angular-ui-tree" ui-tree="inviteTreeOptions">
//             <ol ui-tree-nodes="" ng-model="inviteMembers" ng-show="inviteMembers.length > 0" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-not-empty">
//                 <li ng-repeat="member in inviteMembers | orderBy:['-disabled', 'userName']" ui-tree-node="" data-collapsed="true" class="ng-scope angular-ui-tree-node" expand-on-hover="false">
//                     <div wrapmsgr-user-profile="users[member.userId] || member.userId" class="ng-isolate-scope">
//                         <span className="user-photo ng-binding ng-isolate-scope no-photo purple" user="member">DD</span>
//                         <span className="wrapmsgr_member ng-binding">
//                             DDP2
//                             <a href=""></a>
//                         </span>
//                     </div>
//                 </li>
//             </ol>
//         </div>
//         </div>
//     );
// }

function Group(){
    return(
        <div className="group">
            <div className="wrapmsgr_organ_tree ng-scope angular-ui-tree" ui-tree="organTreeOptions" data-clone-enabled="true" data-nodrop-enabled="true" data-drag-delay="100">
                <div className="wrapmsgr_organ_tree_header">
                    <input type="checkbox" id="manage_doc_room_select_all" ng-disabled="!loggedIn || organTreeOptions.disabled" ng-checked="checkAllMembers()" ng-click="toggleAllMembers($event)"/>
                    <label for="manage_doc_room_select_all">
                        <i class="icon_checkbox" ng-class="{disabled: organTreeOptions.disabled}"></i>
                    </label>
                    <span>Select All</span>
                </div>
                <ol ui-tree-nodes="" ng-model="docInfo.organ" ng-show="docInfo.organ.length > 0" class="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-not-empty" >
                    <li ng-repeat="node in docInfo.organ" ng-class="{selected: isInviteMembers(node) >= 0}" ui-tree-node="" data-collapsed="true" ng-include="'organ_renderer'" className="ng-scope angular-ui-tree-node" expand-on-hover="false">
                        <div className="organ_wrapper ng-scope">
                            <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                                <input type="checkbox" id="member-adminobject:79" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
                                <label for="member-adminobject:79" data-nodrag="">
                                    <i className="icon_checkbox" ng-class="{disabled: node.disabled}"></i>
                                </label>
                            </span>
                            <div wrapmsgr-user-profile="users[node.value] || node.value" user-profile-disabled="node.type === 'dept'" className="ng-isolate-scope">
                                <span className="user-photo ng-binding ng-isolate-scope no-photo cyan" user="{userName: node.columnText, userId: node.value, type: node.type}">Ad</span>
                                <span className="wrapmsgr_member ng-binding">Administrator</span>
                            </div>
                            <span className="wrapmsgr_master" ng-show="node.value == docInfo.detail.masterUserId">Owner</span>
                            <ol ui-tree-nodes="" ng-model="node.subTree" ng-className="{expanded: !collapsed}" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-empty">
                            </ol>
                        </div>
                    </li>
                    <li ng-repeat="node in docInfo.organ" ng-className="{selected: isInviteMembers(node) >= 0}" ui-tree-node="" data-collapsed="true" ng-include="'organ_renderer'" className="ng-scope angular-ui-tree-node selected" expand-on-hover="false"
                    >
                        <div className="organ_wrapper ng-scope">
                            <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                                <input type="checkbox" id="member-ddp2object:80" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)" checked="checked" disabled="disabled"/>
                                <label for="member-ddp2object:80" data-nodrag="">
                                    <i className="icon_checkbox disabled" ng-className="{disabled: node.disabled}"></i>
                                </label>
                            </span>
                            <div wrapmsgr-user-profile="users[node.value] || node.value" user-profile-disabled="node.type === 'dept'" className="ng-isolate-scope">
                                <span className="user-photo ng-binding ng-isolate-scope no-photo purple" user="{userName: node.columnText, userId: node.value, type: node.type}">DD</span>
                                <span className="wrapmsgr_member ng-binding">DDP2</span>
                            </div>
                            <span className="wrapmsgr_master ng-hide" ng-show="node.value == docInfo.detail.masterUserId">Owner</span>
                            <ol ui-tree-nodes="" ng-model="node.subTree" ng-className="{expanded: !collapsed}" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-empty">
                            </ol>
                        </div>
                    </li>
                    <li ng-repeat="node in docInfo.organ" ng-className="{selected: isInviteMembers(node) >= 0}" ui-tree-node="" data-collapsed="true" ng-include="'organ_renderer'" className="ng-scope angular-ui-tree-node" expand-on-hover="false">
                        <div className="organ_wrapper ng-scope">
                            <span ng-style="node.type === 'dept' &amp;&amp; !node.hasChildren &amp;&amp; {'visibility': 'hidden'}">
                                <input type="checkbox" id="member-pay_adminobject:81" ng-disabled="node.disabled" ng-checked="isInviteMembers(node) >= 0" ng-click="toggleMember(node, $event)"/>
                                <label for="member-pay_adminobject:81" data-nodrag="">
                                    <i className="icon_checkbox" ng-className="{disabled: node.disabled}"></i>
                                </label>
                            </span>
                            <div wrapmsgr-user-profile="users[node.value] || node.value" user-profile-disabled="node.type === 'dept'" className="ng-isolate-scope">
                                <span className="user-photo ng-binding ng-isolate-scope no-photo blue" user="{userName: node.columnText, userId: node.value, type: node.type}">페이</span>
                                <span className="wrapmsgr_member ng-binding">페이레터_관리자</span>
                            </div>
                            <span className="wrapmsgr_master ng-hide" ng-show="node.value == docInfo.detail.masterUserId">Owner</span>
                            <ol ui-tree-nodes="" ng-model="node.subTree" ng-className="{expanded: !collapsed}" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-empty">
                            </ol>
                        </div>
                    </li>
				</ol>
			</div>
            <div className="wrapmsgr_organ_tree right-list-col ng-scope angular-ui-tree" ui-tree="inviteTreeOptions">
                <ol ui-tree-nodes="" ng-model="inviteMembers" ng-show="inviteMembers.length > 0" className="ng-pristine ng-untouched ng-valid ng-scope angular-ui-tree-nodes ng-not-empty">
                    <li ng-repeat="member in inviteMembers | orderBy:['-disabled', 'userName']" ui-tree-node="" data-collapsed="true" class="ng-scope angular-ui-tree-node" expand-on-hover="false">
                        <div wrapmsgr-user-profile="users[member.userId] || member.userId" className="ng-isolate-scope">
                            <span className="user-photo ng-binding ng-isolate-scope no-photo purple" user="member">DD</span>
                            <span className="wrapmsgr_member ng-binding">
                                DDP2
                                <a href=""></a>
                            </span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}

class InfoBar extends Component{
    render(){
        return(
            <div className="doc-chatroom-info_div">
                <document-icon name="docInfo.detail.contentName" className="ng-isolate-scope">
                    <i ng-className="docIcon" className="icon_txt" >			
                        <span className="path1"></span>			
                        <span className="path2"></span>			
                        <span className="path3"></span>			
                        <span className="path4"></span>			
                        <span className="path5"></span>			
                        <span className="path6"></span>			
                        <span className="path7"></span>			
                        <span className="path8"></span>			
                        <span className="path9"></span>			
                        <span className="path10"></span>			
                        <span className="path11"></span>			
                    </i>
                </document-icon>
                <div className="doc-name ng-binding">새 텍스트 문서 (2).txt</div>
                <div>
                    <span className="ng-binding">Users with permission 3 Users / Participants 1 Users</span> 						
                </div>
            </div>
        );
    }
}


class WrapmsgrPopupFooter extends Component{
    render(){
        return(
            <>
            <div className = "wrapmsgr_popup_footer">
                <input type = "submit" className = "wrapmsgr_button primary wrapmsgr_right" value = "OK"/>
                <input type = "button" className = "wrapmsgr_button wrapmsgr_right" value = "Cancel"/>
            </div>
            </>
        );
    }
}

export default CreateChatRoom;






