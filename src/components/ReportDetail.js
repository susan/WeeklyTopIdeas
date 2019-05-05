import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Grid, Icon, Header } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";
//import { addCartItem }  from '../actions/cartAction';
import { createReport } from '../thunks/reportThunks'

class ReportDetail extends Component {

  handleClick = () => {
      return this.props.createReport(this.props.selectedReport)
  }


  render() {
    console.log(this.props.selectedReport)
    //const{title, image, description, pricing_details, recent_price, target_price  } = (this.props.selectedReport)
   	return(
      <div>
        {this.props.selectedReport
        &&
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={6}>
              <img className = "image_large" alt="" src= {this.props.selectedReport.image} />
             </Grid.Column>
             <Grid.Column width={6}>
               <Header size="large"> Title: {this.props.selectedReport.title}</Header>
                <p> <a className="ui teal horizontal label">Description: </a>: {this.props.selectedReport.description}</p>
                <p> Pricing Details: {this.props.selectedReport.pricing_details}</p>
                <p> Recent Price: ${this.props.selectedReport.recent_price} </p>
                <p> Target Price: ${this.props.selectedReport.target_price} </p>
                { localStorage.getItem("token")
                  ?
                <Icon color="teal" onClick={this.handleClick} name= "shopping cart" />
                :
                <Link to="/login"> Login to Add to Cart </Link>
                }
               </Grid.Column>
          </Grid.Row>
          </Grid>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    selectedReport: state.report.selectedReport,
  }
}

const mapDispatchToProps = (dispatch) => ({
   createReport: (report) => dispatch(createReport(report))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportDetail);
