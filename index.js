let textField = document.getElementById("input-field");
let shoppingLists = document.getElementById("lists");
let categoryOption = document.getElementById("unit-group");
let unitInputText = document.getElementById("units-input");

let shopping_list = [];
const myItem = (item) => {
  console.log(item);
  const li = document.createElement("li");
  li.setAttribute("id", item.id);
  if (item.check) {
    li.classList.add("checked");
  } else {
    li.classList.remove("checked");
  }

  li.innerHTML = `
  <div class="form-check" >
        <input class="form-check-input" onclick="checkItem(${item.id})" type="checkbox" ${item.check ? "checked" : ""} id=check${item.id}>
        <label class="form-check-label" for="flexCheckDefault" id="shopping-item">
          <h4>${item.name}</h4>
          <p>${item.unit}<span>&nbsp${item.category} </span></p>
        </label>
    </div>
      <div class="item_group">
        <div class="fruit-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_807_74)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.67351 2.66666C5.55494 2.66814 6.32612 2.95403 6.93994 3.26547C7.24868 3.42212 7.52528 3.58929 7.7592 3.7354C7.82885 3.77891 7.89252 3.81911 7.95137 3.85626C7.96794 3.86672 7.98413 3.87694 7.99996 3.88692C8.01579 3.87694 8.03198 3.86672 8.04855 3.85626C8.1074 3.81911 8.17107 3.77891 8.24073 3.7354C8.47464 3.58929 8.75124 3.42212 9.05998 3.26547C9.67401 2.95393 10.4455 2.66794 11.3273 2.66666C12.3646 2.64898 13.3671 3.04113 14.1171 3.75813C14.8686 4.47663 15.3057 5.46307 15.3331 6.50245C15.3332 6.5083 15.3333 6.51414 15.3333 6.51999C15.3333 8.04552 14.8017 10.1759 14.0257 11.9194C13.636 12.7949 13.1672 13.6133 12.6404 14.2246C12.1327 14.8137 11.4635 15.3333 10.6666 15.3333C10.1331 15.3333 9.61989 15.1243 9.23274 14.9667C9.20313 14.9546 9.17426 14.9428 9.14617 14.9315C8.69927 14.751 8.3536 14.6267 7.99996 14.6267C7.64633 14.6267 7.30065 14.751 6.85375 14.9315C6.82566 14.9428 6.79679 14.9546 6.76719 14.9667C6.38004 15.1243 5.86687 15.3333 5.33329 15.3333C4.53647 15.3333 3.86724 14.8137 3.35952 14.2246C2.83277 13.6133 2.36392 12.7949 1.97423 11.9194C1.19819 10.1759 0.666626 8.04552 0.666626 6.51999L0.666822 6.50381C0.692087 5.46336 1.12868 4.47534 1.88096 3.75616C2.63158 3.03857 3.63544 2.64699 4.67351 2.66666ZM4.65282 3.99985C3.96502 3.9856 3.2996 4.24454 2.80233 4.71993C2.30695 5.19351 2.01867 5.84344 1.99997 6.5283C2.00198 7.81614 2.46995 9.75424 3.19235 11.3772C3.55266 12.1867 3.95882 12.8775 4.36957 13.3542C4.79935 13.8529 5.13012 14 5.33329 14C5.59225 14 5.87485 13.8888 6.3545 13.6952C6.7826 13.5223 7.3536 13.2933 7.99996 13.2933C8.64633 13.2933 9.21732 13.5223 9.64542 13.6952C10.1251 13.8888 10.4077 14 10.6666 14C10.8698 14 11.2006 13.8529 11.6304 13.3542C12.0411 12.8775 12.4473 12.1867 12.8076 11.3772C13.5298 9.75454 13.9978 7.81685 14 6.52901C13.9797 5.84449 13.6909 5.19529 13.1957 4.72191C12.6985 4.24656 12.0335 3.98703 11.3457 3.99987L11.3333 3.99999C10.7376 3.99999 10.1779 4.19342 9.66327 4.45451C9.40702 4.58453 9.16945 4.72736 8.94711 4.86624C8.89533 4.89859 8.84249 4.93195 8.7895 4.96542C8.62807 5.06735 8.46514 5.17024 8.3257 5.24833C8.12332 5.36165 7.8766 5.36165 7.67422 5.24833C7.53478 5.17024 7.37185 5.06735 7.21042 4.96542C7.15743 4.93195 7.1046 4.89859 7.05281 4.86624C6.83047 4.72736 6.59291 4.58453 6.33665 4.45451C5.82206 4.19342 5.26233 3.99999 4.66663 3.99999L4.65282 3.99985Z" fill="#E07B67"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07041 1.03517C6.23507 0.705855 6.63551 0.572372 6.96483 0.737032C7.95924 1.23423 8.66669 2.55283 8.66669 4.66665C8.66669 5.03484 8.36821 5.33332 8.00002 5.33332C7.63183 5.33332 7.33336 5.03484 7.33336 4.66665C7.33336 2.78046 6.70748 2.09907 6.36855 1.9296C6.03923 1.76494 5.90575 1.36449 6.07041 1.03517Z" fill="#E07B67"/>
            </g>
            <defs>
              <clipPath id="clip0_807_74">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p class="text">Fruits</p>
        </div>
        <div class="option">
          <button class="btn-light">
            <i class="icofont-close" onclick="removeItem(${item.id});"></i>
          </button>
          
        </div>
      </div>
  `;
  return li;
};

function setStorage() {
  localStorage.setItem("shopping_list", JSON.stringify(shopping_list));
}

function getStorage() {
  const list = localStorage.getItem("shopping_list");
  return list ? JSON.parse(list) : [];
}



(function () {
  shopping_list = getStorage();
  for (let item of shopping_list) {
    shoppingLists.appendChild(myItem(item));
  }
})();

function addTask() {
  if (textField.value === "") {
    alert("Input field cannot be empty!");
  } else {
    const item = {
      name: textField.value,
      unit: unitInputText.value,
      category: categoryOption.value,
      check: false,
      id: shopping_list.length,
    };

    console.log(item);
    shopping_list.push(item);

    setStorage();

    shoppingLists.appendChild(myItem(item));
  }

  textField.value = "";
  unitInputText.value = "";
}

function checkItem(id) {
  shopping_list = shopping_list.map((data) => {
    if (data.id === id) {
      data.check = data.check ? false : true;
    }
    return data;
  });

  setStorage();

  const li = document.getElementById(id);
  const item = shopping_list.find((dd) => dd.id === id);
  console.log(item);
  
  if (item.check) {
    li.classList.add("checked");
  } else {
    li.classList.remove("checked");
  }
  console.log(li);
}

function removeItem(id) {
  shopping_list = shopping_list.filter((item) => item.id != id);
  setStorage();
  const li = document.getElementById(`${id}`);
  li.remove();
}
