import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";
import Task from "./Task";
import { Grid, Container } from "@material-ui/core";

class Tasks extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => {
            return (
                <Task
                    key={task.fn}
                    task={task}
                />
            );
        });
        return (
            <Container>
                <Grid
                    container
                    spacing={3}
                    justify="space-around"
                >
                    {tasks}
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

export default connect(mapStateToProps, {})(Tasks);