import React, { Component } from 'react';
import { List, Header, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteCartItem } from "../thunks/cartThunks"



class Cart extends Component {

   // handleDelete = (event,id) => {
   //  console.log(id)
   //   return this.props.deleteCartItem(id)
   //}

	render() {
    //console.log(this.props.user.user)
    const cartItems = this.props.carts.map((item, index)=> {
      return <List.Item  key={index}>
            Name: {item.name} price: ${item.price} <Icon color='red'
            name='trash alternate outline'
            onClick={() =>{
              let selectLineItem = this.props.lineItems.find(selection => {
                return selection.product_id === item.id
              })
               this.props.deleteCartItem(selectLineItem)}
             }
            />
        </List.Item>


    })


		return (
     <div>
     <a className="ui blue label" >Shopping Cart</a>
       <Header size="medium"> Cart Items</Header>
         <List size = {'large'}>
          {cartItems ? cartItems : null}
         </List>

       </div>
		 )

	}
};

const mapStateToProps = (state) => {
     return {
        carts: state.cart.carts,
        lineItems: state.cart.cartsLineItems,
        user: state.user.user,
     }
  }

  const mapDispatchToProps = (dispatch) => ({
    deleteCartItem: (id, user) => dispatch(deleteCartItem(id))
})


	export default connect(mapStateToProps, mapDispatchToProps)(Cart);
