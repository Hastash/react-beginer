import React from 'react'

class AddComponent extends React.Component {
    state = {
        title:'',
        salary:''
    }
    handleOnChangeJobTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleOnChangeJobSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('>>> Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random()*100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render(){
        console.log('>>> call render', this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={(e) => this.handleOnChangeJobTitle(e)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary} 
                        onChange={(e) => this.handleOnChangeJobSalary(e)}
                    /><br /><br />
                    <input 
                        type="submit" 
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </form>
            </>
        )
    }

}
export default AddComponent;