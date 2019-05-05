import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import ReportCard from "./ReportCard"



class ReportList extends Component {

  render() {
  	//console.log(this.props)
    const reportChoices = this.props.reports.map(report => {
    	return <Grid.Column width={4}> <ReportCard key ={report.id} report={report} getreportDetails={this.props.getReportDetails}/></Grid.Column>
    })

  	return(
  		<>
      <Grid>
      <Grid.Row>
  		{reportChoices}
      </Grid.Row>
      </Grid>
  		</>
  	)

  }
}
export default ReportList;
