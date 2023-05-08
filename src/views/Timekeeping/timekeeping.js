import React from 'react';
import ChildComponent from './childcomponent';
import AddComponent from './addcomponent';
class Timekeeping extends React.Component {
    state ={
        arrJobs: [
            {id:'job-1', title:'Developer', salary:'400'},
            {id:'job-2', title:'Tester', salary:'300'},
            {id:'job-3', title:'Designer', salary:'600'},
            {id:'job-4', title:'Operator', salary:'500'}
        ]
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount(){
        console.log('>>> Run component did mount')
    }

    render() {
        return (
            <>
                <AddComponent
                addNewJob={this.addNewJob}
                />
                <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteJob ={this.deleteJob}
                />
            </>
        )
    }
}

export default Timekeeping;