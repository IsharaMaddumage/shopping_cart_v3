import React from 'react';
import Products from '../../data/ProductData.js';

// Load Product Data into localStorage
Products.init();

class Product extends React.Component {

  constructor(props) {
    super(props);

    var data = JSON.parse(localStorage.getItem('product'));
    var product_data = [];
    

    for (var i = 0; i < 2; i++) {
      product_data.push({
        id: data[i].id,
        name: data[i].name,
        image: data[i].image,
        description: data[i].description,
        price: data[i].price
      });
    }

    this.state = { product_data };
  }

  clickHandler(id,name,price) {
    console.log(id+name+price);
    var items = [];
    items.push({
      id: id,
      name: name,
      price: price
    });
    //items.init();
    localStorage.setItem('items', JSON.stringify(items));
  }

  render() {
      return (
         <div className="product">
            {this.state.product_data.map((product, index) => (
                <dev className='product-detail'><img src={'img/' + product.image}/><h1 className='name'>{product.name}</h1><p className='description'>{product.description}</p><p className='price'>Price: ${product.price}</p>

                  <button type="button" onClick={this.clickHandler.bind(this, product.id, product.name, product.price)}>
                    {'Add To Cart'}
                  </button></dev>
            ))}
         </div>
      );
  }
}

export default Product;