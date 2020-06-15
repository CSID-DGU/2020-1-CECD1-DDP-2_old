import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/css/wrapmsgr.css';
import WrapmsgrRight from './wrapmsgr_right';

function WrapmsgrHeader1() {
    return (
        <div class="wrapmsgr_header" ng-show="current.convo.convoType == 1">
            <div class="wrapmsgr_header_title ng-scope" >
                <document-icon class="ng-isolate-scope"><i class="icon_pdf">			<span class="path1"></span>			<span class="path2"></span>			<span class="path3"></span>			<span class="path4"></span>			<span class="path5"></span>			<span class="path6"></span>			<span class="path7"></span>			<span class="path8"></span>			<span class="path9"></span>			<span class="path10"></span>			<span class="path11"></span>			</i></document-icon>
                <div>
                    <div class="chatroom-name ng-binding" title="Object Storage의 이해와 활용 V1.pdf">Object Storage의 이해와 활용 V1.pdf</div>
                    <div class="chatroom-size ng-binding">10.2MB</div>
                </div>
            </div>
            <WrapmsgrRight />
        </div>
    )
}


export default WrapmsgrHeader1;