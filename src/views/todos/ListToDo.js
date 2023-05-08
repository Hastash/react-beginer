import React from "react";
import AddToDo from "./AddToDo";
import './ListToDo.scss'
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state={
        listTodos:[
            {id:'todo1', title:'Doing Homework'},
            {id:'todo2', title:'Making Video'},
            {id:'todo3', title:'Fixing Bugs'}
        ],
        editTodo: {}
    }
    addNewTodo = (todo)=>{
        // let curList = this.state.listTodos
        // curList.push(todo)
        this.setState(
            {
                listTodos: [...this.state.listTodos, todo]
                // listTodos: curList
            }
        )

        toast.success("Wow so easy!!")
    }
    handleDeleteTodo = (todo) => {
        // console.log('>>> Check Todo log: ',todo)
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success(`Delete succeed!`)
    }
    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state
        let isEmptyObject = Object.keys(editTodo).length === 0
        // Save
        if(!isEmptyObject && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos]

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            
            //Log object to Console.
            console.log("Before update: ", listTodosCopy[objIndex])
            
            // If objIndex = -1
            if (objIndex !== -1) {
                //Update object's title property.
                listTodosCopy[objIndex].title = editTodo.title
            } else {
                toast.error(`-1 : Not Found Todo!`)
                return
            }
                
            //Log object to console again.
            console.log("After update: ", listTodosCopy[objIndex])

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success(`Update Todo succeed!`)
            return
        }
        // Edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let {listTodos, editTodo} = this.state;
        // let listTodos = this.state.listTodos

        let isEmptyObject = Object.keys(editTodo).length === 0
        console.log(">>> Check empty: ",isEmptyObject) 
        return(
            <>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            
            <div className="list-todo-container">
                <AddToDo
                    addNewTodo = {this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index)=>{
                            return (
                                <div className="todo-child" key={item.id}> 
                                        {!isEmptyObject && editTodo.id === item.id ? 
                                            <span>
                                                {index+1} - <input 
                                                value={editTodo.title} 
                                                onChange={(e)=>this.handleOnChangeTodo(e)}
                                                />
                                            </span>
                                            :
                                            <span>
                                                {index+1} - {item.title}
                                            </span> 
                                        }
                            
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {!isEmptyObject && editTodo.id === item.id ?
                                                "Save" : "Edit"
                                            }
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                    

                </div>
            </div>
            </>
        )
    }
}
export default ListToDo