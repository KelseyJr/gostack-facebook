import React from 'react';
import PropTypes from 'prop-types';

import './style.css'

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt="" className="post-avatar"/>
      <div className="post-details">
        <span className="author">{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  )
}

function PostComment({ comments }) {
  return (
    <div className="post-comment">
      <div className="divider"></div>
      { comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} alt="" className="comment-avatar"/>
          <p>
            <span className="author">{comment.author.name}: </span>
            {comment.content}
          </p>
        </div>
      )) }
    </div>
  )
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader  author={author} date={date} />
      <div className="post-content">
        {content}
      </div>
      <PostComment comments={comments}/>
    </div>
  )
}

PostItem.propTypes = {
  author: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    author: PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }))
}

export default PostItem;