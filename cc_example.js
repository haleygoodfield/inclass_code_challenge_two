// Task 1:
let products = [
    {name: "Lapotop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800, category: "Electronics"},
    {name: "Desk Chair", price: 150, category: "Furniture"},
];

// function getProductsByCategory(products, category) {
//   return products.filter(product => product.category === category);
// }
// console.log(getProductsByCategory(products, "Electronics"));

// Task 2

// function applyDiscount(products, discountRate) {
// return products.map(product => ({
//  ...product, 
//  price: product.price - (product.price * discountRate),
//  name: product.name.toUpperCase()
//  }
//  )) 
// }

console.log(applyDiscount(products, .1));

// Task 3
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale)=>total+sale,0)
}

console.log(`Total Revenue 2024: $${calculateTotalRevenue(sales)}`);

