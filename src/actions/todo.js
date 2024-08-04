export const createTodo = (content) => {
  return {
    type: "CREATE_TODO",
    content: content
  }
}
export const completedTodo = (id) => {
  return {
    type: "COMPLETED_TODO",
    id: id
  }
}
export const backTodo = (id) => {
  return {
    type: "BACK_TODO",
    id: id
  }
}
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id
  }
}