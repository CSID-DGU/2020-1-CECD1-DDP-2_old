import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Member from '../Member';
// import './Member.css';

function MemberBox({ profile, name, dept }) {
    const members = [{
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        name: "Administrator",
        dept: "FASOO"
    }, {
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        name: "DDP",
        dept: "ddp_dept"
    }, {
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        name: "DDP2",
        dept: "ddp_dept"
    }, {
        profile: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
        name: "DDP3",
        dept: "ddp_dept"
    },]

    return (
        <Fragment>
            {members.map(member => <Member profile={member.profile} name={member.name} dept={member.dept} />)}
        </Fragment>
    )
}

MemberBox.propTypes = {

}

export default MemberBox;
