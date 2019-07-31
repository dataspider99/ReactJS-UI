import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col, Card, CardHeader, CardBody , Table, Progress
} from 'reactstrap';
import DataJob from './DataJob.js';
import {fetchDataJob} from '../../actions';


class DataJobTable extends Component{
	render(){
		return(
				<Table hover responsive className="table-outline" >
		            <thead className="thead-light">
		                  <tr>
		                    <th>Name</th>
		                    <th className="text-center">Description</th>
		                    <th>Keywords</th>		                    
		                    <th> Data Store </th>
		                    <th> Start Job </th>
		                    <th> View </th>
		                  </tr>
		            </thead>
		           	<tbody>
		                  { this.props.dataJobs.map((project,index)=>
		                  	<tr key={index}>
		                    <td>
		                      <a key={project.id} href={`#/job/${project.id}`} className="btn btn-primary btn-block">{project.name}</a>
		                    </td>
		                    <td className="text-center">
		                      {project.description ? project.description : "No Description Available"}
		                    </td>
		                    <td>
		                      <strong><pre>{project.keywords}</pre></strong>
		                    </td>
		                    <td>
		                    	{project.data_pool}
		                    </td>
		                    <td>		          
		                      <a href={`#/job/run/${project.id}`} className="btn btn-danger">Start</a>
		                    </td>
		                    <td>
		                    	<a href={`#/job/history/${project.id}`} className="btn btn-warning">History</a>
		                    </td>
		                  	</tr>	
		                  	)}

		            </tbody>
		        </Table>
			)
	}
}

export { DataJobTable } ;

class DataJobs extends Component{
	constructor(){
	super();
	}

	getDataJob(id){
		let dataJob = {id: id}
		this.props.fetchDataJob(dataJob);
	}

	render(){
		return(
			<div className="animated fadeIn">
				<Row>
					<Col>
		            	<Card>
		              	<CardHeader>
		                	Data Jobs List
		              	</CardHeader>
		              	<CardBody>
							<DataJobTable dataJobs={this.props.dataJobs} />		                
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

export default connect(mapPropsToState,{fetchDataJob})(DataJobs);