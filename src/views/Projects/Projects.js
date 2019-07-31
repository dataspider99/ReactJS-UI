import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Row, Col, Card, CardHeader, CardBody , Table, Progress
} from 'reactstrap';

import Project from './Project';

class Projects extends Component{
	
	constructor(){
	super();
	this.state = {
		projectLimit: 10
		}
	}
	render(){
		return(
			<div className="animated fadeIn">
				<Row>
		          <Col>
		            <Card>
		              <CardHeader>
		                Projects List
		              </CardHeader>
		              <CardBody>
		                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
		                  <thead className="thead-light">
		                  <tr className="text-center">
		                    <th>Name</th>
		                    <th>Description</th>
		                    <th>Data Jobs Count</th>
		                    <th>Pipelines Count</th>
		                    <th>Last Modified</th>
		                  </tr>
		                  </thead>
		                  <tbody>
		                  { this.props.projects.slice(0, this.state.projectLimit).map((project,index)=>

		                  	<tr className="text-center" key={index} >
		                    <td>
		                      <div><a className="btn btn-primary" key={project.id} href={ `#/project/${project.id}` }><span className="fa fa-product-hunt"></span> {project.name}</a></div>
		                    </td>
		                    <td>
		                      <pre>{project.description ? project.description : "No Description Available"}</pre>
		                    </td>
		                    <td>
		                      <strong>{project.data_jobs}</strong>
		                    </td>
		                    <td>
		                      <strong>{project.project_pipeline.length}</strong>
		                    </td>
		                    <td>		          
		                      <strong>{project.updated}</strong>
		                    </td>
		                  	</tr>	
		                  	)}
		                  </tbody>
		                </Table>
		              </CardBody>
		            </Card>
		          </Col>
        		</Row>
        	</div>
			);
	}
}

function mapPropsToState(state){
	return state;
}

export default connect(mapPropsToState,null)(Projects);