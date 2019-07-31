import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Row
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { connect } from 'react-redux';
import ListTable from './Listtable';


class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
            <ListTable dataList={this.props.projects}  type={'Projects'}/>
            <ListTable dataList={this.props.dataJobs}  type={'Data Jobs'}/>
        </Row>
      </div>
    );
  }
}

function mapPropsToState(state){
    return state;
}
export default connect(mapPropsToState, null)(Dashboard);
