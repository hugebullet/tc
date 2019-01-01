export const SET_TABLE_VIEW_PAGE = 'SET_TABLE_VIEW_PAGE';
export const SET_TABLE_VIEW_PER_PAGE = 'SET_TABLE_VIEW_PER_PAGE';
export const SET_TABLE_VIEW_ORDER = 'SET_TABLE_VIEW_ORDER';
export const SET_TABLE_VIEW_COLUMNS = 'SET_TABLE_VIEW_COLUMNS';
export const SET_FILTERS = 'SET_FILTERS';
export const SET_DATES = 'SET_DATES';
export const SET_CHART_VIEW_SECOND_COLUMN = 'SET_CHART_VIEW_SECOND_COLUMN';
export const setTableViewPage = payload => ({ type: SET_TABLE_VIEW_PAGE, payload });
export const setTableViewPerPage = payload => ({ type: SET_TABLE_VIEW_PER_PAGE, payload });
export const setTableViewOrder = payload => ({ type: SET_TABLE_VIEW_ORDER, payload });
export const setTableViewColumns = payload => ({ type: SET_TABLE_VIEW_COLUMNS, payload });
export const setFilters = payload => ({ type: SET_FILTERS, payload });
export const setDates = payload => ({ type: SET_DATES, payload });
export const setChartViewSecondColumn = payload => ({ type: SET_CHART_VIEW_SECOND_COLUMN, payload });

export const REQUEST = 0;
export const SUCCESS = 1;
export const FAILURE = 2;
export const FETCH_REPORTS = fetchActions('FETCH_REPORTS');
export const FETCH_REPORTS_COUNT = fetchActions('FETCH_REPORTS_COUNT');
export const FETCH_ADVERTISERS = fetchActions('FETCH_ADVERTISERS');
export const FETCH_CAMPAIGNS = fetchActions('FETCH_CAMPAIGNS');
export const fetchReports = fetchActionCreators(FETCH_REPORTS);
export const fetchReportsCount = fetchActionCreators(FETCH_REPORTS_COUNT);
export const fetchAdvertisers = fetchActionCreators(FETCH_ADVERTISERS);
export const fetchCampaigns = fetchActionCreators(FETCH_CAMPAIGNS);

function fetchActionCreators(actions) {
  return ({
    ...actions,
    request: payload => ({ type: actions[REQUEST], payload }),
    success: payload => ({ type: actions[SUCCESS], payload }),
    failure: payload => ({ type: actions[FAILURE], payload })
  });
}

function fetchActions(id) {
  return {
    [REQUEST]: `${id}_REQUEST`,
    [SUCCESS]: `${id}_SUCCESS`,
    [FAILURE]: `${id}_FAILURE`
  };
}
