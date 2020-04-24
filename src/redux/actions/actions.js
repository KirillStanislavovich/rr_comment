export const createComment = (props) => {
  return {
    type: 'CREATE_COMMENT',
    id: new Date().getTime(),
    author: props.author,
    text: props.text
  }
};

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id: id
  }
}