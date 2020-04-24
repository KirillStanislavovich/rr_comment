const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_COMMENT':
      let newComment = {
        id: action.id,
        author: action.author,
        text: action.text,
        date: new Date().toLocaleString()
      };
      let storageComments = JSON.parse(localStorage.getItem("commentStorage"))
      storageComments = [...storageComments, newComment];
      localStorage.setItem("commentStorage", JSON.stringify(storageComments))
      return (
        [
        ...state,
        newComment
        ]
      )
    case 'DELETE_COMMENT':
      storageComments = JSON.parse(localStorage.getItem("commentStorage"))
      storageComments = storageComments.filter((item) => item.id !== action.id)
      localStorage.setItem("commentStorage", JSON.stringify(storageComments))

      return state.filter((item) => item.id !== action.id)

    default: 
      return state;
  }
}

export default commentsReducer;