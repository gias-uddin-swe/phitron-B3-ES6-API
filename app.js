// // function name(params) {
// //   if (true) {
// //       const x = "Hello";
// //       console.log(x);
// //   }
// //   console.log(x);
// // }

// // console.log(name());
// // const test = "world";

// // const name = `hello ${test} `;

// // // console.log(name);

// // const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// // const newArray = ["rahim", "korim", ...num];
// // console.log(newArray);

// // console.log(Math.max(...num));

// // const test = (a) => {

// // };

// // const result = test(5);

// // console.log(result);

// // const test2 = () => {
// //   console.log("yes boss");
// //   return "brooo";
// // };

// // console.log(test2());

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const [second, first, b, c] = numbers;
// // console.log(second)

// const obj = {
//   name: "Gias",
//   age: "7",
//   friends: 10,
//   github: "yes",
//   status: "single",
// };

// const { age, status } = obj;

// // console.log(age,status)

// const test = [
//   {
//     name: "gias",
//     age: "7",
//     friends: [
//       "rahim",
//       "korim",
//       {
//         name: "hyy",
//       },
//     ],
//     github: "yes",
//   },
//   {},
//   {},
// ];

// // console.log(test[0].friends[2].name)

// // const products = [
// //   { id: 1, name: "apple", price: 500, color: "golden" },
// //   { id: 2, name: "xiaomi", price: 124, color: "black" },
// //   { id: 3, name: "samsung", price: 200, color: "black" },
// //   { id: 4, name: "samsung2", price: 200, color: "black" },
// //   { id: 5, name: "lenovo", price: 300, color: "pink" },
// //   { id: 6, name: "xiaomi", price: 100, color: "pink" },
// //   { id: 7, name: "lenovo", price: 300, color: "pink" },
// // ];

// // const nums = [2, 2,5,6];

// // let temp = [];

// // for (let i = 0; i < nums.length; i++) {
// //   const element = nums[i];
// //   const square = element * element;
// //   temp.push(square);
// // }
// // // console.log(temp)

// // const square = nums.map(x => x * x);
// // console.log(square)

// const products = [
//   { id: 1, name: "apple", price: 500, color: "golden" },
//   { id: 2, name: "xiaomi", price: 124, color: "black" },
//   { id: 3, name: "samsung", price: 200, color: "black" },
//   { id: 4, name: "samsung2", price: 200, color: "black" },
//   { id: 5, name: "lenovo", price: 300, color: "pink" },
//   { id: 6, name: "xiaomi", price: 100, color: "pink" },
//   { id: 7, name: "lenovo", price: 300, color: "pink" },
// ];

// const result = products.filter((pd) => pd.color != "black");
// // console.log(result);

// const result2 = products.find((pd) => pd.color == "blacsdk");
// // console.log(result2);
// const productContainer = document.getElementById("product-container");
// const result3 = products.forEach((product) => {
//   console.log(product);
//   const h1 = document.createElement("h1");
//   h1.innerText = product.name;
//   productContainer.appendChild(h1);
// });

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// name(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// function name(x) {

// }

// const getData = new Promise(function (resolve, reject) {
//   return reject("no data found");
// });

// getData.then((data) => console.log(data)).catch((err) => console.log(err));

const loadData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const data = await response.json();
    console.log(data);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
loadData();
