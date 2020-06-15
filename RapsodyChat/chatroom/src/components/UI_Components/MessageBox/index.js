import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import './index.css';

function MessageBox({ text, type }) {
    const messages = [{
        text:"안녕하세요!",
        type:"others",
        name: "DDP2",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    }, {
        text:"반가워요",
        type:"me",
        name: "지수",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    },
    {
        text:"방가방가!",
        type:"others",
        name: "Administrator",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    }, {
        text:"ㅎㅋㅎㅋ",
        type:"me",
        name: "지수",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    }, {
        text:"종강을 원해요",
        type:"me",
        name: "지수",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    }, {
        text:"제발여",
        type:"others",
        name: "DDP",
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg"
    }]
    return (
    <Fragment>{messages.map(message => 
        <Message text={message.text} type={message.type} name={message.name} profile={message.profile}/>
    )}</Fragment>
    )
}

MessageBox.propTypes = {

}

export default MessageBox;