import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//import books from "../data.js";
import { getReports } from "../thunks/reportThunks";
import ReportList from "../components/ReportList";
import ReportDetail from "../components/ReportDetail";
import Cart from "../components/Cart";

class ReportContainer extends Component {

  componentDidMount(){
    this.props.getReports()
   }

  render() {
    console.log(this.props)
    return (
      <div className="ReportContainer">
           <Route exact path= "/reports" render={(routerProps) => <ReportList reports={this.props.reports}/> } />
           <Route path ="/reports/:id" render={(routerProps)=> {
             const id= parseInt(routerProps.match.params.od)
               if (this.props.reports.length > 0) {
                 const report = this.props.reports.find(report=> {
                  return report.id === id
                  })
                 return <ReportDetail report={report}/>
                } else {
                  return null
               }
           }}
           />
           <Cart />
      </div>
    );
  }
}
  const mapStateToProps = (state) => {
     return {
        reports: state.report.reports,
     }
  }

  const mapDispatchToProps = dispatch => ({
    getReports: () => dispatch(getReports())
  })

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);
