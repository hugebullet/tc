import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';

class Dates extends PureComponent {
  render() {
    const { startDate, endDate, setDates } = this.props;
    console.log(this.props);
    return <div>
      <DatePicker
        keyboard
        label="Start date"
        format="YYYY-MM-DD"
        placeholder="2018-10-10"
        // handle clearing outside => pass plain array if you are not controlling value outside
        mask={value =>
          value ? [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] : []
        }
        value={startDate}
        onChange={date => {setDates({ startDate: date.toDate() })}}
        disableOpenOnEnter
        animateYearScrolling={false}
      />
      <DatePicker
        keyboard
        label="End date"
        format="YYYY-MM-DD"
        placeholder="10/10/2018"
        // handle clearing outside => pass plain array if you are not controlling value outside
        mask={value =>
          value ? [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/] : []
        }
        value={endDate}
        onChange={date => setDates({ endDate: date })}
        disableOpenOnEnter
        animateYearScrolling={false}
      />
    </div>
  }
}

Dates.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  setDates: PropTypes.func.isRequired
}

export default Dates;

