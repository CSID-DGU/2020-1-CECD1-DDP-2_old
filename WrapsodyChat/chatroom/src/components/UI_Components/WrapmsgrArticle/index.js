import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../resources/css/wrapmsgr.css';
import { WrapmsgrContent2, WrapmsgrFooter } from '../../../components';

function WrapmsgrArticle() {
    return (
        <div className="wrapmsgr_article" ng-class="viewModeClass">
            <WrapmsgrContent2/>
            <WrapmsgrFooter/>
            {/* content & footer */}
        </div>
    )
}


export default WrapmsgrArticle;