export const addTodo = (todo) => {

  return {
           type:"add",
           text : todo
         }
}

export const clearTodo = (todo) => {
  return {
          type:"clear",
         }
}

export const completeTodo = (index) => {
  return {
          type:"complete",
          index
         }
}
