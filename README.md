### E-commerce React App
### App Description:
    This is an E-commerce React Functional components app where we display the products from the data.json file and perform functionalities like adding and deleting mutiple items to the cart and calculating the total cart value.
*    Bootstrap & CSS for styling the app.  

### React Functional Components
*   BakesMenu.js
    *   In `BakesMenu` component we display the order that calculates: number of items in the cart and total Price.
    *   We display imported data of bakedetails list from `bakedetails.json` file sending props to `BakeOrderDetails.js` component.
*   BakeOrderDetails.js
    *   Display of image, title, price of the product from bakedetails.json file.
    *   2 - buttons with onClick `adds item` to cart and `delete items` from the cart.
*   Header.js
    * Displays App Tiltle and Logo using Bootstrap Navbar and CSS.
    
### Available Scripts
In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

