import React, { Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser} from "../actions/userAction";
import { clearCart } from "../actions/cartAction";

class NavBar extends Component {

  logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
    this.props.clearCart(this.props.carts)
   }

   render() {
     return (
        <div className = "nav">
          <NavLink className = "nav_item" to="/reports"> Reports  </NavLink>
          <NavLink className = "nav_item" to="/register"> Sign Up </NavLink>
          <NavLink className = "nav_item" to="/login"> Login </NavLink>
          <NavLink className = "nav_item" onClick={() => this.logout()} to="/reports"> Logout </NavLink>
       </div>
      )
   }
}

const mapStateToProps = (state) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (user) => dispatch(logoutUser(user)),
    clearCart: (carts) => dispatch(clearCart(carts))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
