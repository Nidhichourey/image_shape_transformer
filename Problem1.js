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

  function pproductD(product){
      let  totalProducts = product.length;
      let  totalValue = 0;
      let  categorycount = 0;
      let  totalPrice = 0;

      for(let i of product){
           totalValue += i.price * i.stock;
           totalPrice += i.price

           if(categorycount[i.category]){
            categorycount[i.category]++;
           }else{
            categorycount[i.category] = 1;
           }
      }
      let  averagePrice = totalPrice / totalProducts;
      return {
        totalValue,
        totalProducts,
        categorycount,
        averagePrice
      }
}

let product=[
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 20 },
    { id: 3, name: "Blender", price: 49.99, category: "Kitchen", stock: 10 },
    { id: 4, name: "Coffee Maker", price: 89.99, category: "Kitchen", stock: 5 }
]


let result = pproductD(product)

console.log(result)
