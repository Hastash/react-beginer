import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component{
    state={
        title: ''
    }
    handleOnChangeTitle = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            toast.error(`Missing title's Todo!`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random()*100),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
    }
    render() {
        let {title} = this.state
        return (
            <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(e)=>this.handleOnChangeTitle(e)}
                    />
                    <button className="add" type="button"
                    onClick={() => this.handleAddTodo()}
                    >Add</button>
                </div>
        )
    }
}
export default AddToDo;