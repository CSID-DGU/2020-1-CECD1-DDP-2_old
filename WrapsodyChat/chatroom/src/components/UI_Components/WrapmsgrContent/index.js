import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../resources/css/wrapmsgr.css';
import '../../../resources/css/wrapmsgr-icons.css';
import WrapmsgrHeader1 from '../WrapmsgrHeader/1';
import { WrapmsgrAside, WrapmsgrArticle } from '../../../components'
function WrapmsgrContent() {
    return (
        <div className="wrapmsgr_content doc-chatroom">
            <WrapmsgrHeader1/>
            <WrapmsgrAside/>
            <WrapmsgrArticle/>
        </div>
    )
}


export default WrapmsgrContent;