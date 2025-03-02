/*
// First array: electronicsProducts
[
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 }
  ]
  
  // Second array: kitchenProducts
  [
    { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
    { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
  ]
  */

  function pproductD(electronicsProducts,kitchenProducts){
    let product_data = [...electronicsProducts, ...kitchenProducts]
    let productdetails = product_data.map(({name,price})=>({name,price}));
    let totalValue = product_data.reduce((total, {price , stock}) => total + (price * stock),0);
    return {productdetails ,product_data};
}

let electronicsProducts =[
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 }
  ]
 
let kitchenProducts = [
    { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
    { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
  ]

let result = pproductD(electronicsProducts,kitchenProducts)

console.log(result.productdetails)
console.log(result.totalValue)
