export const REQUEST = 0;
export const SUCCESS = 1;
export const FAILURE = 2;
export const FETCH_REPORTS = fetchActions('FETCH_REPORTS');
export const fetchReports = fetchActionCreators(FETCH_REPORTS);

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
