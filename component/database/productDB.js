const productDB = [
  {
    id: 1,
    productName: "Nike dunk",
    price: 22,
    img: [
      "../../images/giay2-4.webp",
      "../../images/giay2-3.webp",
      "../../images/giay2-2.webp",
      "../../images/giay2-1.webp",
    ],
    brand: "nike",
    stock: 222,
    color: ["blue"],
    size: [21, 22, 23, 24, 25],
    desc: "nike cổ thấp",
    isDelate: 1,
  },
  {
    id: 2,
    price: 22,
    productName: "Nike hight",
    img: [
      "../../images/giay3-4.webp",
      "../../images/giay3-3.webp",
      "../../images/giay3-2.webp",
      "../../images/giay3-1.webp",
    ],
    brand: "nike",

    stock: 222,
    color: ["red"],
    size: [21, 22, 23, 24, 25],
    desc: "nike cổ cao",
    isDelate: 1,
  },
  {
    id: 3,
    price: 22,
    productName: "nike medium",
    img: [
      "../../images/giay4-4.webp",
      "../../images/giay4-3.webp",
      "../../images/giay4-2.webp",
      "../../images/giay4-1.webp",
    ],
    brand: "nike cổ vừa",

    stock: 222,
    color: ["black"],
    size: [21, 22, 23, 24, 25],
    desc: "mô tả",
    isDelate: 1,
  },
  {
    id: 4,
    price: 22,
    productName: "adidas black",
    img: [
      "../../images/giay7-4.webp",
      "../../images/giay7-3.webp",
      "../../images/giay7-2.webp",
      "../../images/giay7-1.webp",
    ],
    brand: "adidas",

    stock: 222,
    color: ["black"],
    size: [21, 22, 23, 24, 25],
    desc: "adidas ",
    isDelate: 1,
  },
  {
    id: 5,
    price: 22,
    productName: "adidas white",
    img: [
      "../../images/giay8-4.webp",
      "../../images/giay8-3.webp",
      "../../images/giay8-2.webp",
      "../../images/giay8-1.webp",
    ],
    brand: "adidas",

    stock: 222,
    color: ["white"],
    size: [21, 22, 23, 24, 25],
    desc: "addias trắng",
    isDelate: 1,
  },
  {
    id: 6,
    price: 22,
    productName: "adidas low",
    img: [
      "../../images/giay9-4.webp",
      "../../images/giay9-3.webp",
      "../../images/giay9-2.webp",
      "../../images/giay9-1.webp",
    ],
    brand: "adidas",

    stock: 222,
    color: ["black-white"],
    size: [21, 22, 23, 24, 25],
    desc: "adidas cao",
    isDelate: 1,
  },
];
localStorage.setItem("productDB", JSON.stringify(productDB));
if (!JSON.parse(localStorage.getItem("productDB"))) {
}
