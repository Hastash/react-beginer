import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState({
            showJobs: status
        })
    }
    handleOnClickDelete =(job) => {
        console.log('>>> handleOnClickDelete: ', job)
        this.props.deleteJob(job)
    }
    render(){
        let {arrJobs} = this.props;
        let {showJobs} = this.state;
        return (
            <>  
                {!showJobs && <div><button onClick={()=>this.handleShowHide(true)}>Show</button></div>}
                {showJobs && 
                <>
                <div className="job-lists">
                {
                 arrJobs.map((job) => {
                    return (
                    <div key={job.id}>   
                        {job.title} - {job.salary} $  &nbsp <span><button onClick={()=>this.handleOnClickDelete(job)}>x</button></span>
                    </div>
                    )
                })
                }
                </div> 
                <div><button onClick={()=>this.handleShowHide(false)}>Hide</button></div>
                </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
    // console.log('>>> Check props: ', props)
//     let {arrJobs} = props;
//         return (
//             <>
//                 <div className="job-lists">
//                 {
//                  arrJobs.map((job) => {
//                     return (
//                     <div key={job.id}>   
//                         {job.title} - {job.salary}   
//                     </div>
//                     )
//                 })
//                 }
//                 </div> 
//             </>
//         )
// }
export default ChildComponent;