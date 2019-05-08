import React, { Component } from 'react'
import { Grid } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

//import books from "../data.js";
import { getProducts } from "../thunks/productThunks";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

class ProductContainer extends Component {

  componentDidMount(){
    this.props.getProducts()
   }

  render() {
    console.log(this.props)
    return (
      <div className="ProductContainer">
          <h1> Walgreens weekly deal items (reduced shipping fee with current order) </h1>
           <Route exact path= "/products" render={(routerProps) => <ProductList products={this.props.products}/> } />
           <Route path ="/products/:id" render={(routerProps)=> {
             const id= parseInt(routerProps.match.params.id)
               if (this.props.products.length > 0) {
                 const product = this.props.products.find(product=> {
                  return product.id === id
                  })
                 return <ProductDetail product={product}/>
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
        products: state.product.products,
     }
  }

  const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProducts())
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
