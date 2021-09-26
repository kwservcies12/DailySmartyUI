import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts
    }

    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts-wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        <li>recent post 0</li>
                        <li>recent post 1</li>
                        <li>recent post 2</li>
                    </ul>
                </div>
            </div>
                        
        )
    }
}

export default connect(null, actions)(SearchBar); 






