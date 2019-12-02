import React from 'react';
import { connect } from 'react-redux';
import * as actions from "./action";
import axios from 'axios';


class ContainerComponent extends React.Component {

    updateData = () => {

        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            this.props.GetEmployeeList(response.data)
        })
    }

    render() {
        return (
            <>
                {this.props.employees && this.props.employees.map((emp) => {
                    return (
                        <>
                            <h1>User Name: {emp.name}</h1>
                            <h1>User Id: {emp.id}</h1><hr></hr>
                        </>
                    )
                })}

                <input type="button" value="Update Data" onClick={this.updateData} />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

export default connect(mapStateToProps, actions)(ContainerComponent)