import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../resources/css/wrapmsgr.css';
import '../../../resources/css/wrapmsgr-components.css';
import SearchDiv from '../SearchDiv';

function WrapmsgrAside() {
    return (
        <div className="wrapmsgr_aside">
            {/* search_div */}
            <SearchDiv />
            <ul>
                <li ng-repeat="member in current.members | memberFilter:search.user:users | orderBy:'userName'" ng-class="{'has-grn-dot': false, 'has-red-dot': false}" wrapmsgr-user-profile="users[member.userId]" class="ng-scope ng-isolate-scope" >
                    <span class="user-photo ng-binding ng-isolate-scope no-photo cyan" user="users[member.userId]">Ad</span>
                    <div class="ng-binding">Administrator (admin)</div>
                    <div class="sub-info ng-binding">FASOO</div>
                </li><li ng-repeat="member in current.members | memberFilter:search.user:users | orderBy:'userName'" ng-class="{'has-grn-dot': false, 'has-red-dot': false}" wrapmsgr-user-profile="users[member.userId]" class="ng-scope ng-isolate-scope">
                    <span class="user-photo ng-binding ng-isolate-scope no-photo orange" user="users[member.userId]">DD</span>
                    <div class="ng-binding">DDP (ddp)</div>
                    <div class="sub-info ng-binding">ddp_dept</div>
                </li><li ng-repeat="member in current.members | memberFilter:search.user:users | orderBy:'userName'" ng-class="{'has-grn-dot': false, 'has-red-dot': false}" wrapmsgr-user-profile="users[member.userId]" class="ng-scope ng-isolate-scope">
                    <span class="user-photo ng-binding ng-isolate-scope no-photo purple" user="users[member.userId]">DD</span>
                    <div class="ng-binding">DDP2 (ddp2) </div>
                    <div class="sub-info ng-binding">ddp_dept</div>
                </li><li ng-repeat="member in current.members | memberFilter:search.user:users | orderBy:'userName'" ng-class="{'has-grn-dot': false, 'has-red-dot': false}" wrapmsgr-user-profile="users[member.userId]" class="ng-scope ng-isolate-scope">
                    <span class="user-photo ng-binding ng-isolate-scope no-photo cyan" user="users[member.userId]">DD</span>
                    <div class="ng-binding">DDP3 (ddp3) </div>
                    <div class="sub-info ng-binding">ddp_dept</div>
                    <li ng-repeat="member in current.members | memberFilter:search.user:users | orderBy:'userName'" ng-class="{'has-grn-dot': false, 'has-red-dot': false}" wrapmsgr-user-profile="users[member.userId]">
                        <avatar user="users[member.userId]"></avatar>
                        <div>hihi <i class="icon_leader"></i></div>
                        <div class="sub-info">adsf</div>
                    </li>
                </li>
            </ul>
        </div>
    )
}


export default WrapmsgrAside;