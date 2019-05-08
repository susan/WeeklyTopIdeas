import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard"



class ProductList extends Component {

  render() {
  	//console.log(this.props)
    const productChoices = this.props.products.map(product => {
    	return <Grid.Column width={4}> <ProductCard key ={product.id} product={product} getproductDetails={this.props.getProductDetails}/></Grid.Column>
    })

  	return(
  		<>
      <Grid>
      <Grid.Row>
  		{productChoices}
      </Grid.Row>
      </Grid>
  		</>
  	)

  }
}
export default ProductList;
