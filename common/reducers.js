
export const todo_reducer = (state=[],action)=>{
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          text : action.text,
          complete : false
        }
    ]
    case 'clear': return []
    case 'complete':
      return state.map(( todo , index )=>{
        if(index===action.index){
            return {
                      ...todo,
                      complete: !todo.complete
                    }
        }else {
            return todo;
        }
    });
    default: return state;
  }
}
