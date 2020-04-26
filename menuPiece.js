// Define UI Variables
const foodList = document.querySelector('#menu-food-list');
const price = document.querySelector('.price');
const btnOrder = document.querySelector('.btn-order');
const itemList = document.querySelector('#item-list');

function loadAllEvent () {

    foodList.addEventListener('click', addMenu);

}

function addMenu (e) {
    if(e.target.classList.contains('btn-order')) {
        // Create an element 
        const li = document.createElement('li');
        // add Class to an li
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        // add list details to li
        // li.appendChild(document.createTextNode(foodList.firstChild.textContent));
        // li.innerText = `${document.textContent = foodList.firstChild.innerText}`
        // li.textContent = `${btnOrder.parentElement.firstElementChild.innerText} - ${btnOrder.previousElementSibling.previousElementSibling.innerText}`]
        li.textContent = `${btnOrder.parentElement.firstElementChild.innerText} - ${btnOrder.previousElementSibling.previousElementSibling.innerText}`
        // create an a tag and append to li
        const linkBtn = document.createElement('a');
        // Add a class for a tag
        linkBtn.className = 'btn py-0 delete-item';
        // create an icon element
        linkBtn.innerHTML = '<i class="fas fa-trash-alt text-danger"></i>';
        // Append linkBtn to li
        li.appendChild(linkBtn);
        console.log(li);


        itemList.appendChild(li);
        // console.log('item added')
    }
    // console.log(e.target)
}












loadAllEvent();

