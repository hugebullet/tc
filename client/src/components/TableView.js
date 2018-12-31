import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';


class TableViewHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { orderDir, orderBy, columns } = this.props;

    return (
      <TableHead>
        <TableRow>
          {columns.map(column => {
            return (
              <TableCell
                key={column}
                sortDirection={orderBy === column ? orderDir : false}
              >
                <TableSortLabel
                  active={orderBy === column}
                  direction={orderDir}
                  onClick={this.createSortHandler(column)}
                >
                  {prettifyColumnName(column)}
                </TableSortLabel>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

TableViewHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(String).isRequired
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let TableViewToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar
      className={classes.root}
    >
      {/* <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          Nutrition
        </Typography>
      </div> */}
      {/* <div className={classes.spacer} /> */}
      <div className={classes.actions}>
        <Tooltip title="Filter list">
          <IconButton aria-label="Filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

TableViewToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

TableViewToolbar = withStyles(toolbarStyles)(TableViewToolbar);

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TableViewPaginationActions extends PureComponent {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TableViewPaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TableViewPaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TableViewPaginationActions,
);
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class TableView extends PureComponent {
  handleChangePage = (event, page) => {
    this.props.setTableViewPage(page);
  };

  handleChangePerPage = event => {
    this.props.setTableViewPerPage(parseInt(event.target.value, 10));
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let orderDir = 'desc';

    if (this.props.orderBy === property && this.props.orderDir === 'desc') {
      orderDir = 'asc';
    }

    this.props.setTableViewOrder({ orderBy, orderDir });
  };

  render() {
    const { classes, page, perPage, columns, rows, count, orderBy, orderDir } = this.props;
    const emptyRows = perPage - Math.min(perPage, rows.length);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableViewHead
              orderDir={orderDir}
              orderBy={orderBy}
              columns={columns}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow key={index}>
                    {columns.map(column =>
                      <TableCell key={column}>{row[column]}</TableCell>
                    )}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  colSpan={6}
                  count={count}
                  rowsPerPage={perPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangePerPage}
                  ActionsComponent={TableViewPaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

TableView.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(String).isRequired,
  loadingRows: PropTypes.bool.isRequired,
  loadingCount: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  orderBy: PropTypes.string.isRequired,
  orderDir: PropTypes.string.isRequired,
  setTableViewPage: PropTypes.func.isRequired,
  setTableViewPerPage: PropTypes.func.isRequired,
  setTableViewOrder: PropTypes.func.isRequired
};

export default withStyles(styles)(TableView);

function prettifyColumnName(name) {
  name = name.replace(/([A-Z])/g, ' $1');
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name.replace(/Id/g, 'ID');
}
