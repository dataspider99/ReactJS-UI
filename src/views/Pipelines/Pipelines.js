import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button,
  Row,Col, Card, CardHeader, CardBody , Table, Progress
} from 'reactstrap';

class PipeLinesTable extends Component{

	constructor(){
	super();
	this.state = {
		projectLimit: 10
		}
	}

	gotoProject(id){
		window.location="#pipeline/"+id;	
	}

	render(){
		return(
				<Table hover responsive className="table-outline">
		            <thead className="thead-light">
		                  <tr>
		                    <th className="text-center">Name</th>
		                    <th className="text-center">Description</th>		                   		                    
		                    <th className="text-center">Action</th>
		                    <th className="text-center">History</th>
		                  </tr>
		            </thead>
		            <tbody>
		                  { this.props.projectPipeLines.map((project,index)=>

		                  	<tr key={index}>
		                    <td>
		                      <div><Button color="danger" block={true} key={project.id} onClick={()=>this.gotoProject(project.id)}>{project.name}</Button></div>
		                    </td>
		                    <td className="text-center">
		                      {project.description ? project.description : "No Description Available"}
		                    </td>		           
		                    <td>
		                    	<Button color="info" block="true" >Scale</Button> 
		                    </td>
		                    <td className="text-center">
		                    	<Button color="link">Click Me</Button>
		                    </td>		             
		                  	</tr>	
		                  	)}
		            </tbody>
		        </Table>
			)
		}
		
}

export {PipeLinesTable};

class PipeLines extends Component{
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
							< PipeLinesTable projectPipeLines={this.props.projectPipeLines} />	                
		              </CardBody>
		            </Card>
		          </Col>
        		</Row>
        	</div>
			);
	}
}

function mapStatetoProps(state,props)
{
	return {...state, ...props}
}
export default connect(mapStatetoProps)(PipeLines);