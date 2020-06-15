import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DocumentInfo from '../DocumentInfo'
import SearchBox from '../SearchDiv';
import ButtonBox from '../ButtonBox';
import MemberBox from  '../MemberBox';
import './index.css';

function RoomInfo({ profile, name, dept }) {
    return (
        <div className="RoomInfo">
            <DocumentInfo />
            <ButtonBox />
            <SearchBox />
            <MemberBox />
        </div>
    )
}

RoomInfo.propTypes = {

}

export default RoomInfo;