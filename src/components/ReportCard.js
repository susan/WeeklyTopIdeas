import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Label } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import { selectReport }  from '../actions/reportAction';



class ReportCard extends Component {

  render() {
       const { pricing_details, image, id } = this.props.report
  	return (
      <div>
      <Card >
        <Card.Content>
          <Card.Header> <img className = "image" alt="" src={image} /> </Card.Header>
            <Card.Meta> Pricing Details: {pricing_details} </Card.Meta>
               <Card.Description> </Card.Description>
          </Card.Content>
          <Card.Content extra >
             <Route render={({history}) => (
             <Label circular color='blue' key='white'  onClick = {() => {
               return (
                <div>
                    {this.props.selectedReport(this.props.report)}
                    { history.push(`reports/${id}`) }
                 </div>
                )

             }}
             >
                Details
             </Label>

            )} />
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedReport: (report) => dispatch(selectReport(report)),
  }
}


export default connect(null, mapDispatchToProps)(ReportCard);
