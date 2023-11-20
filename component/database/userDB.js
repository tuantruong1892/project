const user = [
  {
    id: 1,
    userName: "admin",
    email: "admin@gmail.com",
    password: "123123",
    cart: [],
    role: 1,
    status: 1,
  },
  {
    id: 2,
    userName: "tuantruong",
    email: "tuantruong1892@gmail.com",
    password: "123123",
    cart: [],
    role: 2,
    status: 1,
  },
];
if (!JSON.parse(localStorage.getItem("user"))) {
  localStorage.setItem("user", JSON.stringify(user));
}
