import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './index.css';

function SearchDiv({ profile, name, dept }) {
    return (
        <div className="search_div">
            <input type="text" placeholder="Enter a user name or ID." ng-model="search.user" ng-disabled="!loggedIn" class="ng-pristine ng-untouched ng-valid ng-empty"></input>
            <i class="icon_search"></i>
        </div>
    )
}



export default SearchDiv;