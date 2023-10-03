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