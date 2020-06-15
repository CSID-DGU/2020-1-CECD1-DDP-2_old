import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Message({ text, type, name, profile }) {
    return (
        <div className="Message"> 
            <img id={type} className="Member__Profile" src={profile}></img>
            <p class={type}>{name}</p>
            <p class={type}>{text}</p>
        </div>
    )
}

Message.propTypes = {

}

export default Message;