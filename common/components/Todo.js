import React from 'react'
import { connect } from 'react-redux'
import { addTodo , clearTodo , completeTodo } from '../actions'

const Todoapp = ({ todos , dispatch }) => {

  const addTodoHandler = ( e ) => {
    e.preventDefault()
    dispatch(addTodo(document.getElementById('todoInput').value))
    document.getElementById('todoInput').value = ''
    console.log(todos,'todos');
  }

  const clearTodoHandler = ( e ) => {
    e.preventDefault()
    dispatch(clearTodo())
  }

  const completeHandler = (index) => {
    dispatch(completeTodo(index))
  }

  const filterHandler = (todos,complete) => {
    let filterTodolist = todos
    if(complete){
      filterTodolist = filterTodolist.filter((todo)=>{
        return !todo.complete
      })
    }else {
      filterTodolist = filterTodolist.filter((todo)=>{
        return todo.complete
      })
    }


    return filterTodolist
  }

  let todo_uncomplete = filterHandler(todos,true)
  let todo_complete = filterHandler(todos,false)

  return (
    <div className = 'todoApp col-sm-6 col-xs-10'>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#todo" aria-controls="todo" role="tab" data-toggle="tab">Todo</a></li>
          <li role="presentation"><a href="#complete" aria-controls="complete" role="tab" data-toggle="tab">complete</a></li>
        </ul>
        <div className = "tab-content">
           <div role="tabpanel" className = "tab-pane active" id="todo">
                  { todo_uncomplete.map(
                    ( todo , index ) => (
                        <div key={ index } onClick = { completeHandler.bind( this , index ) } className={ !todo.complete ? 'todo' : 'todo uncomplete' } >
                          <input type='checkbox' checked={todo.complete}/>
                          <span>{todo.text}</span>
                        </div>
                    )
                  ) }
                  { todo_uncomplete[0] ? '' : (<h3 className='nothing'>{'Nothing todo'}</h3>) }
           </div>
           <div role="tabpanel" className = "tab-pane" id="complete">
           { todo_complete.map(
             ( todo , index ) => (
                 <div key={ index } onClick = { completeHandler.bind( this , index ) } className={ !todo.complete ? 'todo' : 'todo uncomplete' } >
                   <input type='checkbox' checked={todo.complete}/>
                   <span>{todo.text}</span>
                 </div>
             )
           ) }
           { todo_complete[0] ? '' : (<h3 className='nothing'>{'Nothing complete'}</h3>) }
           </div>
       </div>

        <form>
          <input className = 'todoApp-input' type = 'text' name = 'todo' id='todoInput' placeholder = 'What you want to do ?' onChange = {()=>{console.log(document.getElementById('todoInput').value)}}/>
          <div>
                <button onClick = {addTodoHandler} className='btn btn-primary'>Submit</button>
                <button onClick = {clearTodoHandler}  className='btn btn-default'>Clear</button>
            </div>
        </form>
      </div>
    )
}

export default connect((state)=>{
                                  return { todos:state.todos }
})(Todoapp)
