import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DataJobTable } from '../DataJobs';
import { PipeLinesTable }  from '../Pipelines/Pipelines';
import {fetchProject} from '../../actions';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class Project extends Component{
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'id'
    };
  	}

  	toggle(tab) {
    	if (this.state.activeTab !== tab) {
      	this.setState({
        activeTab: tab
      	});
    	}
  	}
		
	componentDidMount () {
		this.props.fetchProject({id:this.props.match.params.id})
	}

	renderData(data,key){
		
		if (key === 'data_jobs'){
		  	return <Col>< DataJobTable dataJobs={data} /></Col>
		}
		else if (key === 'project_pipeline'){
			return <div>< PipeLinesTable projectPipeLines={data} /></div>
		}
		else 
		{
			return <h3> {data} </h3>
		}
	}
	
	render()
	{
		return(
			<div className="animated fadeIn" >				
				<Row>
		          <Col>
		            <Card>
		              <CardHeader>
		                <i className="fa fa-align-justify"></i><strong>Project Details</strong> <small>with TabPanes</small>
		                <div className="card-header-actions">
		                  <Badge>NEW</Badge>
		                </div>
		              </CardHeader>
		              <CardBody>
		                <Row>
		                  <Col xs="12" lg="3">
		                    <ListGroup id="list-tab" role="tablist">
		                    { Object.keys(this.props.projectDetail).map((key,index)=>
		            
		                    	<ListGroupItem key={index} onClick={() => this.toggle(key)} action active={this.state.activeTab === key} >{key.toUpperCase().replace('_',' ')}</ListGroupItem>  
		                
		                    	)}		                 
		                    </ListGroup>
		                  </Col>
		                  <Col xs="12" lg="9">
		                    <TabContent activeTab={this.state.activeTab}>
		                    { Object.keys(this.props.projectDetail).map((key,index)=>

		                    <TabPane tabId={key} key={index} >
		                        {this.renderData(this.props.projectDetail[key],key)}		
		                    </TabPane>		                      
		                    
		                    )}		                      
		                    </TabContent>
		                  </Col>
		                </Row>
		              </CardBody>
		            </Card>
		          </Col>
		        </Row>
			</div>
			
	);}
}

function mapStateToProps(state,ownProps){
		return state;
}
export default connect(mapStateToProps,{fetchProject})(Project);