const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function handleRegister() {
  const name = document.getElementById("name");
  // const naame = document.querySelector
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  if (
    !email.value ||
    !name.value ||
    !password.value ||
    !confirmPassword.value ||
    !name.value
  ) {
    alert("Vui lòng điền đầy đủ thông tin");
    return;
  }
  if (confirmPassword.value !== password.value) {
    alert("Mật khẩu xác nhận không đúng");
    return;
  }
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.value.match(emailPattern)) {
    alert("Email không hợp lệ");
    return;
  }
  if (password.value !== confirmPassword.value) {
    alert("mật khẩu không trùng khớp");
  }
  let data = JSON.parse(localStorage.getItem("user")) || [];
  let checkUser = data.find((user) => user.email == email.value);
  if (checkUser) {
    alert("Email đã được đăng ký rồi");
  } else {
  }
  const newData = {
    id: data[data.length-1].id +1,
    userName: name.value,
    email: email.value,
    password: password.value,
    cart: [],
    role: 1,
    status: 1,
  };
  data.push(newData);
  localStorage.setItem("user", JSON.stringify(data));
  alert(" đăng ký thành công");
  container.classList.remove("right-panel-active");
}
function handleSingin() {
  const email = document.getElementById("emailsignin");
  const password = document.getElementById("psw");
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  console.log(email.value);
  if (!email.value || !password.value) {
    alert(" vui lòng nhập đủ thông tin");
    return;
  }
  const userWithUsername = userData.find((user) => user.email === email.value);
  if (userWithUsername) {
    if (userWithUsername.password === password.value) {
      alert("Đăng nhập thành công");
    } else {
      alert("Mật khẩu không đúng");
    }
  } else {
    alert("Email không tồn tại");
  }
  window.location;
}
