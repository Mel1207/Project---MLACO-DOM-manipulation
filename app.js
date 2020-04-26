// // define vars 
// let btnChange = document.querySelector('.btChange');
// let title = document.querySelector('.card-title');
// let btnBuy = document.querySelector('.btnBuy');
// let btnBuy1 = document.querySelector('.btnBuy1');
// let itemList = document.querySelector('#item-list');

// // Load all event listeners
// loadEventListeners();

// function loadEventListeners () {
//     btnChange.addEventListener('click', changeText)

//     btnChange.addEventListener('click', btnCC);

//     btnBuy.addEventListener('click', addToCart);

//     btnBuy1.addEventListener('click', addToCart2);
// }

// function addToCart () {
//     const newLi = document.createElement('li');

//     newLi.className = 'list-group-item';

//     newLi.textContent = btnBuy.parentElement.firstElementChild.innerHTML;

//     itemList.appendChild(newLi);
// }

// function addToCart2 () {
//     const newLi = document.createElement('li');

//     newLi.className = 'list-group-item';

//     newLi.textContent = btnBuy1.parentElement.firstElementChild.innerHTML;

//     itemList.appendChild(newLi);
// }





// function changeText () {
//     title.textContent = 'NICE ONE YOU GOT IT!'
// }

// function btnCC () {
//     if (btnChange.classList.contains('btn-info')) {
//         btnChange.classList.remove('btn-info');

//         // new class
//         btnChange.className = 'btn btn-danger';
//     }
// }

// // console.log(btnChange);