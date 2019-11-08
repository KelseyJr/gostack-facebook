import React from 'react';

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

export default PostItem;