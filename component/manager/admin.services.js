import {
  getAllItems,
  insertItem,
  deleteItemById,
} from "../../repositories/repositories.js";

export default class AdminServices {
  renderUser() {
    const userDB = JSON.parse(localStorage.getItem("user")) || [];
    const userList = document.getElementById("userlist");
    let userContent = "";
    userDB.forEach((item, index) => {
      userContent += `<tr >
              <td>${item.id}</td>
              <td>${item.userName}</td>
              <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
              <td>12/02/1999</td>
              <td>Nữ</td>
              <td>0926737168</td>
              <td>${item.email}</td>
              <td>${item.role}</td>
              <td class="table-td-center"><button class="btn btn-primary btn-sm trash" type="button" title="Xóa"
                  onclick="deleteUser(${index})"><i class="fas fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                  data-toggle="modal" data-target="#ModalUP1" onclick="editUser(${index})"><i class="fas fa-edit"></i>
                </button>
              </td>     </tr>`;
    });
    userList.innerHTML = userContent;
  }
  renderProduct() {
    const productDB = JSON.parse(localStorage.getItem("productDB")) || [];
    const productList = document.getElementById("productlist");
    let productContent = "";
    productDB.forEach((item, index) => {
      productContent += ` <tr>
        
              <td>${item.id}</td>
              <td>${item.productName}</td>
              <td>
                <img
                  src="${item.img[0]}"
                  alt=""
                  width="100px;"
                />
              </td>   
              <td>${item.stock}</td>
              <td><span class="badge bg-success">Còn hàng</span></td>
              <td>${item.price}đ</td>
              <td>${item.brand}</td>
              <td>
                <button
                  class="btn btn-primary btn-sm trash"
                  type="button"
                  title="Xóa"
                  onclick="deleteproduct(${index})"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp"
                data-toggle="modal" data-target="#ModalUP" onclick="editproduct(${index})"><i class="fas fa-edit"></i>
              </button>
              </td>
            </tr>`;
      productList.innerHTML = productContent;
    });
  }
  deleteUser(index) {
    const userDB = JSON.parse(localStorage.getItem("user")) || [];
    userDB.splice(index, 1);
    localStorage.setItem("user", JSON.stringify(userDB));
    renderUser();
  }
  editUser(index) {
    const userDB = JSON.parse(localStorage.getItem("user")) || [];
    document.getElementById("newid").value = userDB[index].id;
    document.getElementById("newname").value = userDB[index].userName;
    document.getElementById("newemail").value = userDB[index].email;
    idUpdateUser = userDB[index].id;
    if (userDB[index].role == 1) {
      document.getElementById("roleuser").value = "admin";
    } else {
      document.getElementById("roleuser").value = "user";
    }
    if (userDB[index].status == 1) {
      document.getElementById("status").value = "unblock";
    } else {
      document.getElementById("status").value = "block";
    }
  }
  updateUser() {
    const userDB = JSON.parse(localStorage.getItem("user")) || [];
    const index = document.getElementById("newid").value;
    const updatename = document.getElementById("newname").value;
    const updateemail = document.getElementById("newemail").value;
    const updatestatus = document.getElementById("status").value;
    const updaterole = document.getElementById("roleuser").value;
    const newuserDB = userDB.map((item, i) => {
      console.log(item.id == index);
      if (item.id == index) {
        return {
          ...item,
          userName: updatename,
          email: updateemail,
          role: updaterole,
          status: updatestatus,
        };
      }
      return item;
    });
    localStorage.setItem("user", JSON.stringify(newuserDB));
    renderUser();
  }
  editproduct(index) {
    const productDB = JSON.parse(localStorage.getItem("productDB")) || [];
    document.getElementById("idproduct").value = productDB[index].id;
    document.getElementById("productName").value = productDB[index].productName;
    document.getElementById("productstock").value = productDB[index].stock;
    document.getElementById("productbrand").value = productDB[index].brand;
    document.getElementById("productprice").value = productDB[index].price;
  }
  updateproduct() {
    const productDB = JSON.parse(localStorage.getItem("productDB")) || [];
    const index = document.getElementById("idproduct").value;
    const updatename = document.getElementById("productName").value;
    const updatestock = document.getElementById("productstock").value;
    const updatebrand = document.getElementById("productbrand").value;
    const updateprice = document.getElementById("productprice").value;
    const productimg = document.getElementById("uploadfile");

    let valueImg = "../../images/" + productimg.files[0].name + "";
    const newproduct = productDB.map((item, i) => {
      if (item.id == index) {
        return {
          ...item,
          img: [valueImg],
          productName: updatename,
          stock: updatestock,
          price: updateprice,
          brand: updatebrand,
        };
      }
      return item;
    });
    localStorage.setItem("productDB", JSON.stringify(newproduct));
    renderProduct();
  }
}
