import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts
    }

    renderPosts = function() {
        const posts = this.props.recentPost.map((post, index) => {
            if(index < 3) {
                return (
                    <li key={index}>
                        {post.title}
                    </li>    
                )
            }
        })
        return posts
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

function mapStateToProps(state) {
    return {
        recentPost: state.posts.recentPost
    }
}
export default connect(mapStateToProps, actions)(RecentPosts); 






