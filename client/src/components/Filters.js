import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { DatePicker } from 'material-ui-pickers';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const COST_MODELS = [
  'per_impression',
  'per_click',
  'per_install'
]
class Filters extends PureComponent {
  render() {
    const { advertisers, campaigns, advertiserId, campaignId, costModel, theme, classes, setFilters } = this.props;
    return <div className={classes.root}>
      {/* <Typography variant="h5">Filters</Typography> */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="advertisers">Advertisers</InputLabel>
        <Select
          multiple
          value={advertiserId}
          onChange={event => setFilters({ advertiserId: event.target.value })}
          input={<Input id="advertisers" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value + ': ' + advertisers.find(a => a.id === value).name} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {advertisers.map(({ name, id }) => (
            <MenuItem key={id} value={id} style={getStyles(id, advertiserId, theme)}>
              {id}: {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="campaigns">Campaigns</InputLabel>
        <Select
          multiple
          value={campaignId}
          onChange={event => setFilters({ campaignId: event.target.value })}
          input={<Input id="campaigns" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value + ': ' + campaigns.find(a => a.id === value).name} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {campaigns.map(({ name, id }) => (
            <MenuItem key={id} value={id} style={getStyles(id, campaignId, theme)}>
              {id}: {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="costModel">Cost Model</InputLabel>
        <Select
          multiple
          value={costModel}
          onChange={event => setFilters({ costModel: event.target.value })}
          input={<Input id="costModel" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {COST_MODELS.map(id => (
            <MenuItem key={id} value={id} style={getStyles(id, costModel, theme)}>
              {id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>;
  }
};

function getStyles(id, activeIds, theme) {
  return {
    fontWeight:
      activeIds.indexOf(id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
  advertiserId: PropTypes.arrayOf(Number).isRequired,
  campaignId: PropTypes.arrayOf(Number).isRequired,
  costModel: PropTypes.arrayOf(String).isRequired,
  advertisers: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Filters);
