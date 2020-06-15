import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../resources/css/wrapmsgr.css';

function WrapmsgrFooter() {
    return (
        <div className="wrapmsgr_footer">
            <form ng-submit="chat()" class="ng-pristine ng-valid ng-valid-maxlength">
                <span class="wrapmsgr_full_width_text_span">
                    <textarea id="wrapmsgr_message_input" class="wrapmsgr_full_width_text ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength" autocomplete="off" maxlength="500" placeholder="Enter a message." ng-model="input.message" ng-keydown="submitOnEnter($event)" ng-disabled="!loggedIn"></textarea>
                </span>
                <button type="submit" class="wrapmsgr_submit" value="Send" title="Send" ng-disabled="!loggedIn">
                    <i class="icon_paper_plane"></i>
                </button>
            </form>

        </div>
    )
}

export default WrapmsgrFooter;