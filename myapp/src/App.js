import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {
  viewProjects,
  viewSubprojects,
} from './actions';
import { Column } from 'ag-grid-community';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Project ID", field: "projectId"
      }, {
        headerName: "Project Name", field: "projectName"
      }, {
        headerName: "Project Description", field: "projectDescription"
      }],
    }
  }

  render() {
    const { value, viewProjects, viewSubprojects } = this.props;
    console.log(value);
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '600px',
          marginLeft:'10px'
        }}
      >
        <button className="button" onClick={viewProjects}>View Projects</button>
        {/* <button onClick={viewSubprojects}>View  Sub Projects</button> */}
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={value}>
        </AgGridReact>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  viewProjects: function () {
    axios.get('https://ciscobackend.azurewebsites.net/api/Project/GetProject').then(res => {
      dispatch(viewProjects(res.data.projects))
    })
  }
  ,
  viewSubprojects:
    function () {
      axios.get('https://ciscobackend.azurewebsites.net/api/Project/GetProject').then(res => {
        dispatch(viewSubprojects(res.data.projects))
      })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
