import React from 'react';

function AddComment({ createComment }) {
  function submitHandler(event) {
    event.preventDefault();
    createComment({
      author: document.getElementById('author').value,
      text: document.getElementById('text').value,
    });
    document.getElementById('author').value = '';
    document.getElementById('text').value = '';
  }
  
  return (
    <form className='form' onSubmit={submitHandler}>
      <label>Введите Ваше имя
        <input className='input form__name' id='author' required />
      </label> 
      <label>Введите комментарий
        <input className='input form__text' id='text' required />
      </label> 
      <button type='submit' className='button'>Отправить</button>
    </form>
  )
}

export default AddComment;