

export const selectReport = (report) => {
  return {
     type: "SELECT_REPORT",
     payload: report
  }
}

export const loadReports = (reports) => {
  return {
     type: "LOAD_REPORTS",
     payload: reports
  }
}


