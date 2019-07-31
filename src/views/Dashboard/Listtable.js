import React,{Component} from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';


class ListTable extends Component{
	constructor(props) {
    super(props);
    this.state = {
      projectLimit: 10,
    };
  }

  	render(){
		return (<Col xs="12" lg="6">
		            <Card>
		              <CardHeader>
		                <i className="fa fa-align-justify"></i> {this.props.type} Table
		              </CardHeader>
		              <CardBody>
		                <Table responsive>
		                  <thead>
		                  <tr>
		                    <th>{this.props.type} Name</th>
		                    <th>Description</th>
		                  </tr>
		                  </thead>
		                  <tbody>
		                  { this.props.dataList.slice(0,this.state.projectLimit).map((project,index)=>{
		                    return (
		                      <tr key={index}>
		                          <td><a className={this.props.type} href="#/detail" id={project.id}>{project.name}</a></td>
		                          <td>{project.description ? project.description : "No Description"}</td>
		                      </tr>
		                      )}
		                    )}
		                  </tbody>
		                </Table>
		                <Pagination>
		                  <PaginationItem>
		                    <PaginationLink onClick={()=>{this.setState({projectLimit:this.state.projectLimit+1})}} tag="button">Load Next {this.props.type}</PaginationLink>
		                  </PaginationItem>
		                </Pagination>
		              </CardBody>
		            </Card>
		          </Col>)
	}

}
export default ListTable;