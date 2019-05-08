import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Label } from 'semantic-ui-react';
import { Route } from "react-router-dom";
import { selectProduct }  from '../actions/productAction';



class ProductCard extends Component {

  render() {
       const { price, image, id } = this.props.product
  	return (
      <div>
      <Card >
        <Card.Content>
          <Card.Header> <img className = "image" alt="" src={image} /> </Card.Header>
            <Card.Meta> Price: {price} </Card.Meta>
               <Card.Description> </Card.Description>
          </Card.Content>
          <Card.Content extra >
             <Route render={({history}) => (
             <Label circular color='blue' key='white'  onClick = {() => {
               return (
                <div>
                    {this.props.selectedProduct(this.props.product)}
                    { history.push(`products/${id}`) }
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
    selectedProduct: (product) => dispatch(selectProduct(product)),
  }
}


export default connect(null, mapDispatchToProps)(ProductCard);
