import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProjectPipeline} from '../../actions/pipelines';
import Widget02 from '../Widgets/Widget02';
import {Row, Col} from 'reactstrap';
import Modal from 'react-responsive-modal';


class ProjectPipeline extends Component{
	constructor(){
		super();

	this.state = {
	    input_open: false,
	    output_open: false,
	};
	}
	 

	componentDidMount () {
		this.props.fetchProjectPipeline({id:this.props.match.params.id})
	}
	render(){
		const { input, output } = this.props.projectPipeline;
		
		return(
			<div>
			    <Row>
		          <Col xs="12" sm="6" lg="6">
		            <Widget02 header={this.props.projectPipeline.id} mainText="Identification Number" icon="fa fa-bell" color="primary" />
		          </Col>
		          <Col xs="12" sm="6" lg="6">
		            <Widget02 header={this.props.projectPipeline.name} mainText="Project Pipeline Name" icon="fa fa-laptop" color="danger" />
		          </Col>
		          <Col xs="12" sm="12" lg="12">
		            <Widget02 header={this.props.projectPipeline.description ? this.props.projectPipeline.description : "No Description Available"} mainText="Project Pipeline Description" icon="fa fa-book" color="success" />
		          </Col>
		          <Col xs="12" sm="6" lg="6">
		            <div>
				        <Widget02 className="input" header={(input || {}).name} mainText="Input System" icon="fa fa-cloud-upload" color="warning" onClick={()=>this.setState({input_open: true})} button="true"/>
				        <Modal open={this.state.input_open} onClose={()=>this.setState({input_open:!this.state.input_open})} center>
		          			<Row>
		        				{ Object.keys((input || {})).map((key,index)=>
						          <Col xs="12" sm="6" lg="6" key={index}>
						            	<Widget02 icon="fa fa-laptop" color="warning" header={(input || {})[key]} mainText={key} />
						          </Col>
						         )}
						    </Row>
		        		</Modal>
		        	</div>
		          </Col>
		            <Col xs="12" sm="6" lg="6">
		            <div>
			            <Widget02 className="output" header={(output || {}).name} mainText="Output System" icon="fa fa-cloud-download" color="danger" onClick={()=>this.setState({output_open: true})} button="true"/>
			          	<Modal open={this.state.output_open} onClose={()=>this.setState({output_open:!this.state.output_open})}  center>
	          			<Row>
	        				{ Object.keys((output || {})).map((key,index)=>
					          <Col xs="12" sm="6" lg="6" key={index}>
					            	<Widget02 icon="fa fa-cogs" color="danger" header={(output || {})[key]} mainText={key} />
					          </Col>
					         )}
					    </Row>
        				</Modal>
        			</div>
		          </Col>
				</Row>
			</div>
			);
	}
}
function mapStateToProps(state,props){
	return state
}
export default connect(mapStateToProps, {fetchProjectPipeline})(ProjectPipeline);