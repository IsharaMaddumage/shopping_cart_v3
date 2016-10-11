import React from 'react';


class Cart extends React.Component {
   
   constructor(props) {
      super(props);
      this.closeCart = this.closeCart.bind(this);
      this.state = { visible:true };

   }
   closeCart() {
      this.setState({visible: false});
      console.log(this.state.visible);
      var items = JSON.parse(localStorage.getItem('items'));
      console.log(items);
   }

   render() {
      return (
         <div className={"cart " + (this.state.visible ? 'active' : '')}>
            <div className="mini-cart">
               <button type="button" className="close-cart" onClick={this.closeCart}>&times;</button>
	         </div>
         </div>
      );
   }
}

export default Cart;