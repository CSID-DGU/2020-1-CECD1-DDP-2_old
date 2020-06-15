import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import MessageBox from '../MessageBox';

function ChatRoom({ profile, name, dept }) {
    return(
        <div className="ChatRoom"><MessageBox/></div>
    )
}

ChatRoom.propTypes = {

}

export default ChatRoom;