/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

//First var - to use a separate component

import React from "react";
import Product from "./Product";
import products from "./vschoolProducts";

function App() {
  const productComponents = products.map((item) => (
    <Product key={item.id} product={item} />
  ));
  return <div>{productComponents}</div>;
}
export default App;

//Second var - to use Product func inside

// import React from "react"
// import products from "./vschoolProducts"

// function App() {
//   return (
//     <div>
//         {products.map(product => <Product name={product.name} price={product.price} description={product.description} key={product.id} /> )}
//     </div>
//   )
// }

// export default App

// function Product (props){
//      return (
//      <div>
//        <h1>{props.name}</h1>
//        <p>{props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.description}</p>
//      </div>
//     )
// }
