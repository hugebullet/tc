import ChartView from '../components/ChartView';
import { connect } from 'react-redux';
import { setChartViewSecondColumn } from '../actions';

export default connect(
  state => ({ ...state.chartView }),
  { setChartViewSecondColumn }
)(ChartView);
