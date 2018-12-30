export const SET_TABLE_VIEW_PAGE = 'SET_TABLE_VIEW_PAGE';
export const SET_TABLE_VIEW_PER_PAGE = 'SET_TABLE_VIEW_PER_PAGE';
export const setTableViewPage = payload => ({ type: SET_TABLE_VIEW_PAGE, payload });
export const setTableViewPerPage = payload => ({ type: SET_TABLE_VIEW_PER_PAGE, payload });

export const REQUEST = 0;
export const SUCCESS = 1;
export const FAILURE = 2;
export const FETCH_REPORTS = fetchActions('FETCH_REPORTS');
export const fetchReports = fetchActionCreators(FETCH_REPORTS);
export const FETCH_REPORTS_COUNT = fetchActions('FETCH_REPORTS_COUNT');
export const fetchReportsCount = fetchActionCreators(FETCH_REPORTS_COUNT);

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
