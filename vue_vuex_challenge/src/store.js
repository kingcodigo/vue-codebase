import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
          isLoggedIn: false,
          products: [
            {
              id: 'p1',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
              title: 'Book Collection',
              description:
                'A collection of must-read books. All-time classics included!',
              price: 99.99,
            },
            {
              id: 'p2',
              image:
                'https://cdn.thewirecutter.com/wp-content/media/2022/07/carfamilycampingtents-2048px-0313-3x2-1.jpg',
              title: 'Mountain Tent',
              description: 'A tent for the ambitious outdoor tourist.',
              price: 129.99,
            },
            {
              id: 'p3',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
              title: 'Food Box',
              description:
                'May be partially expired when it arrives but at least it is cheap!',
              price: 6.99,
            },
          ],
          cart: { items: [], total: 0, qty: 0 },
        };
      },
      mutations: {
        login() {
          this.isLoggedIn = true;
        },
        logout() {
          this.isLoggedIn = false;
        },
        addProductToCart(productData) {
          const productInCartIndex = this.cart.items.findIndex(
            (ci) => ci.productId === productData.id
          );
    
          if (productInCartIndex >= 0) {
            this.cart.items[productInCartIndex].qty++;
          } else {
            const newItem = {
              productId: productData.id,
              title: productData.title,
              image: productData.image,
              price: productData.price,
              qty: 1,
            };
            this.cart.items.push(newItem);
          }
          this.cart.qty++;
          this.cart.total += productData.price;
        },
    
        removeProductFromCart(prodId) {
          const productInCartIndex = this.cart.items.findIndex(
            (cartItem) => cartItem.productId === prodId
          );
          const prodData = this.cart.items[productInCartIndex];
          this.cart.items.splice(productInCartIndex, 1);
          this.cart.qty -= prodData.qty;
          this.cart.total -= prodData.price * prodData.qty;
        },
      },
      actions: {
       
      },
      getters: {
       getProducts() {
        return this.products;
       },
       getCart() {
        return this.cart;
       }
      },
})


export default store;


