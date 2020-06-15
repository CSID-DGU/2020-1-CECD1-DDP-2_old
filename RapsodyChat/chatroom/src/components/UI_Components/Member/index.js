import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Member.css';

function Member({ profile, name, dept }) {
    return (
        <div className="Member">       
            <MemberProfile profile={profile} />
            <p className="Member__Name text">{name}</p>
            <p className="Member__Dept text">{dept}</p>
        </div>
    )
}

function MemberProfile({ profile }) {
    return (
        <img src={profile} className="Member__Profile"></img>
    );

}

Member.propTypes = {
    profile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dept: PropTypes.string.isRequired
}


MemberProfile.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Member;