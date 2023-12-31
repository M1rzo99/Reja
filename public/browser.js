// const { electron } = require("webpack");
console.log("Browser Js ishga tushayapti");
let createFiled = document.getElementById("create-filed");
function itemTempale(item) {
  return `
  <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span><div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
            
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
           </div>
          </li>
  `
}

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  axios
    .post("create-item", { reja:createFiled.value })
    .then((response) => {
      document.
        getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTempale(response.data));
      createFiled.value = "";
      createFiled.focus();
    })
    .catch((err) => { 
      console.log("please try again!");
    })
 
})

document.addEventListener("click", (e) => {
  console.log(e.target);


  //edit oper
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if(userInput) {
      axios
        .post("/edit-item", {
        id: e.target.getAttribute("data-id"),
        new_input:userInput,
      })
        .then((response) => { 
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        })
        .catch((err)=>{ console.log("please try again!");})
    }
  }

  //delete oper
  if (e.target.classList.contains("delete-me")) {
    if (confirm("YOu shure delete this btn?")) {
      axios
        .post("/delete-item",{id:e.target.getAttribute("data-id")})
        .then((response) => { 
          console.log(response.data);
          e.target.parentElement.parentElement.remove()
        })
        .catch((err) => {
          console.log("please try again!");
      })
    }
  }
});


document.getElementById("clean-all").addEventListener("click", () => {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => { 
      alert(response.data.state);
      document.location.reload()
    })
  .catch((err)=>{})
})

// hosting server.loyihani tekinga deploy qilamiz.
// bularni hammasi pass deb ataladi.
