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
            Title: {item.title} Recent price: ${item.recent_price} <Icon color='yellow'
            name='trash alternate outline'
            onClick={() =>{
              let selectLineItem = this.props.lineItems.find(selection => {
               return selection.report_id === item.id
              })
               this.props.deleteCartItem(selectLineItem)}
             }
            />
        </List.Item>


    })


		return (
     <div>
     <a className="ui blue label" >Portfolio</a>
       <Header size="medium"> Research Ideas</Header>
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
