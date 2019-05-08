import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { Grid, Icon, Header } from "semantic-ui-react";
import { Link, Switch, Route } from "react-router-dom";
//import { addCartItem }  from '../actions/cartAction';
import { createProduct } from '../thunks/productThunks'

class ProductDetail extends Component {

  handleClick = () => {
      return this.props.createProduct(this.props.selectedProduct)
  }


  render() {
    console.log(this.props.selectedProduct)
    //const{title, image, description, pricing_details, recent_price, target_price  } = (this.props.selectedReport)
   	return(
      <div>
        {this.props.selectedProduct
        &&
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={6}>
              <img className = "image_large" alt="" src= {this.props.selectedProduct.image} />
             </Grid.Column>
             <Grid.Column width={6}>
               <Header size="large"> Name: {this.props.selectedProduct.name}</Header>
                <p> <a className="ui teal horizontal label">Description: </a>: {this.props.selectedProduct.description}</p>
                <p> Size: {this.props.selectedProduct.size}</p>
                <p> Item Code: ${this.props.selectedProduct.item_code} </p>
                <p> Price: ${this.props.selectedProduct.price} </p>
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
    selectedProduct: state.product.selectedProduct,
  }
}

const mapDispatchToProps = (dispatch) => ({
   createProduct: (product) => dispatch(createProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
