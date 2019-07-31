import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDataJob} from '../../actions';
import ReactJson from 'react-json-view';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class DataJob extends Component{
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
		this.props.fetchDataJob({id:this.props.match.params.id})
	}
	
	render(){
		const { xpaths } = this.props.dataJobDetail;

		return(
			<div className="animated fadeIn">
				<Row>
		          <Col>
		            <Card>
		              <CardHeader>
		                <i className="fa fa-align-justify"></i><strong>Job Details</strong> <small>with TabPanes</small>
		                <div className="card-header-actions">
		                  <Badge>NEW</Badge>
		                </div>
		              </CardHeader>
		              <CardBody>
		                <Row>
		                  <Col xs="12" lg="4">
		                    <ListGroup id="list-tab" role="tablist">
		                    { Object.keys(this.props.dataJobDetail).map((key,index)=>
		            
		                    	<ListGroupItem key={index} onClick={() => this.toggle(key)} action active={this.state.activeTab === key} >{key.toUpperCase().replace("_"," ")}</ListGroupItem>  
		                
		                    	)}		                 
		                    </ListGroup>
		                  </Col>
		                  <Col xs="12" lg="8">
		                    <TabContent activeTab={this.state.activeTab}>
		                    { Object.keys(this.props.dataJobDetail).map((key,index)=>

		                    <TabPane tabId={key} key={index} >
		                        
		                        	{key == 'xpaths' ?
									<ReactJson src={JSON.parse(xpaths)} collapsed={true} /> :
									JSON.stringify(this.props.dataJobDetail[key]) ? JSON.stringify(this.props.dataJobDetail[key]) : "Not Available" }
								
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
function mapStateToProps(state){
	return state;
}
export default connect(mapStateToProps,{fetchDataJob})(DataJob);