const initTodo = [
  {
    id: 1,
    content: "Task 1",
    completed: false
  },
  {
    id: 2,
    content: "Task 2",
    completed: false
  },
  {
    id: 3,
    content: "Task 3",
    completed: true
  }
]


export const todoReducer = (state = initTodo, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.content,
          completed: false
        }
      ]
    case "COMPLETED_TODO":
      return state.map((item) => item.id === action.id ? { ...item, completed: true } : item)
    case "BACK_TODO":
      return state.map((item) => item.id === action.id ? { ...item, completed: false } : item)
    case "DELETE_TODO":
      return state.filter((task) => task.id !== action.id)
    default:
      return state
  }
}