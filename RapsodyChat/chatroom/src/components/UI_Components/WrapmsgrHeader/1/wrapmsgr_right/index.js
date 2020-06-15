import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../../../resources/css/wrapmsgr.css';

function WrapmsgrRight() {
    return (
        <div class="wrapmsgr_right">
            <a href="" class=""><i class="icon_eye" title="Preview"></i></a>
            <a href="" class=""><i class="icon_download" title="Download"></i></a>
            <a href="" ><i title="Turn off" class="icon_bell"></i></a>
            <div class="ng-isolate-scope">
                <a href=""><i class="icon_ellipsis_h" title="More"></i></a>
                <div class="wrapmsgr_dropdown_menu" style={{display: 'none'}}>
                    <div title="Invite" class="ng-scope">
                        <i class="icon_plus"></i>Invite
                </div>
                    <div title="Leave" class="ng-scope ng-enter-prepare">
                        <i class="icon_log_out"></i>Leave
                </div>
                </div>
            </div>
        </div>
    )
}


export default WrapmsgrRight;