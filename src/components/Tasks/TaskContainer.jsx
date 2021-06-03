import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../context/redux/taskReducer';
import Tasks from './Tasks';

class TaskContainer extends React.Component {
    

render () {
   return <Tasks tasks={this.props.tasks} addTask={this.props.addTask}/>
}
}

const mapStateToProps = (state) => ({
tasks: state.tasksPage.tasks
});

export default connect(mapStateToProps, {addTask})(TaskContainer);