import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Table, Row, Col } from 'reactstrap';
import {fetchJobHistory} from '../../actions';
import Widget01 from '../Widgets/Widget01';
class HistoryTable extends Component{

	constructor(props) {
    super(props);
	}
	componentDidMount(){
		this.props.fetchJobHistory({id:this.props.match.params.id})
	}
	render(){
		console.log(this.props.buildHistory)
		const { builds , running, queue, healthReport } = this.props.buildHistory
		
		const defaultProps = {
		  header: healthReport,
		  mainText: 'Lorem ipsum...',
		  smallText: 'Lorem ipsum dolor sit amet enim.',
		  // color: '',
		  value: '100',
		  variant: '',
		};
		Widget01.defaultProps = defaultProps;

		return(<Widget01 />)
	}
}

function mapPropsToState(state){
	return state;
}

export default connect(mapPropsToState,{fetchJobHistory})(HistoryTable);