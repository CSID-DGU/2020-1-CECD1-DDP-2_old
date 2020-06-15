import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/css/wrapmsgr.css';

function WrapmsgrHeader3() {
    return (
        <div className="wrapmsgr_header">
            {/* type wrapmsgr_header type 3 */}
            <h1 class="wrapmsgr_title">
                <span ng-if="current.convo.convoType == 1 &amp;&amp; current.convo.roomType == 3" class="ng-scope">Document Chat Room - </span>
                <span ng-attr-title="{{current.convo.name}}" class="ng-binding" title="Object Storage의 이해와 활용 V1.pdf">Object Storage의 이해와 활용 V1.pdf</span>
            </h1>
            <div class="wrapmsgr-header-icon-wrap">
            <a href=""><i class="icon_times" title="<spring:message code='label.close'/>" ng-click="current.convo = undefined"></i></a>
            </div>
        </div>
    )
}


export default WrapmsgrHeader3;