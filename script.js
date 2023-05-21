let form = document.querySelector('#form');
let btn = document.querySelector('#btn');
let purchapes = document.querySelector('#purchapes');
let thead = document.querySelector('#thead');
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let category = document.querySelector('#category');

btn.addEventListener('click', ()=>{
    purchapes.name = form.name.value;
    purchapes.price = form.price.value;
    purchapes.category = form.selectСategory.options[form.selectСategory.selectedIndex].innerText;
    thead.insertAdjacentHTML('afterend',
    <tr class="purcashes__row" id="pRow">
    <td class="purcashes__name">${purchapes.name}</td>
    <td class="purcashes__category">${purchapes.price}</td>
    <td class="purcashes__price">${purchapes.category}</td>
    <td class="purcashes__del">
        <button class="purcashes__btn" id="pBtn"></button>
    </td>
</tr>
    )
})
let pBtn = document.querySelector('#pBtn');
let pRow = document.querySelector('#pRow');
pBtn.addEventListener('click', ()=> {
    let parent = pBtn.closest('.purcashes__row');
    parent.removeChild(pRow);
})

