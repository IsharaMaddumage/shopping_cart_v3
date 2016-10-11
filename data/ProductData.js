module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Children Frock Design 1',
        image: 'frock_1.jpg',
        description: 'test 1 prod',
        price: 12.99,
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: 4.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 3
          }
        ]
      },
      {
        id: '0011002',
        name: 'Children Frock Design 2',
        image: 'frock_2.jpg',
        description: 'test 2 prod',
        price: 15.99,
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: 4.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 12.99,
            inventory: 5
          },
          {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};