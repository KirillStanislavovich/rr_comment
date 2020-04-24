import React from 'react';

import './CommentList.css';

function CommentList(props) {
  const { comments, deleteComment } = props;

  if (comments.lenght === 0) {
    return (
      <p>Пока нет комментариев</p>
    )
  } else {
    return (
      <div className='comment-list'>
        {
          comments.map(comment => {
          return (
            <div className='comment-item'
              key = {comment.id}>
              <div>
                <h2>{ comment.author }</h2>
                <p>{ comment.text }</p>
                <p>{ comment.date }</p>
              </div>
              <button className='rm' onClick={() => deleteComment(comment.id)}>Удалить</button>
            </div>
          )})
        }
      </div>
    )
  }

}

export default CommentList;