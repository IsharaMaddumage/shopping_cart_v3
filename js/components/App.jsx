import React from 'react';
import Cart from './Cart.jsx';
import Product from './Product.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
            <Cart />
            <Product />
         </div>
      );
   }
}

export default App;