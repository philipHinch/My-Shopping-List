const input = document.querySelector('input');
const form = document.querySelector('.form')
const addBtn = document.querySelector('.add-btn');
const clearBtn = document.querySelector('.clear-btn');
const list = document.querySelector('.list');
const removeItem = document.querySelector('li a');

form.addEventListener('submit', addListItem);
list.addEventListener('click', removeListItem);
clearBtn.addEventListener('click', clearList)


function addListItem(e) {
    if (input.value === '') {
        alert('Enter an item');
    } else {
        const li = document.createElement('li');
        li.classList.add('show');
        li.appendChild(document.createTextNode(input.value));
        const link = document.createElement('a');
        link.classList.add('delete-item');
        link.innerHTML = '<i class="fas fa-times"></i>';
        li.appendChild(link);
        list.appendChild(li);
        input.value = '';
        li.addEventListener('click', () => {
            li.classList.toggle('line-through')
        })
        e.preventDefault()
    }
}

function removeListItem(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove()
    }
}

// function clearList() {
//     if (list.childElementCount === 0) {
//         alert('List is already clear')
//     } else {
//         confirm('Are you sure you want to clear list?')
//         list.innerHTML = ''
//     }
// }

function clearList() {
    if (list.childElementCount === 0) {
        alert('List is already clear')
    } else {
        let yesOrNo = confirm('Are you sure you want to clear list?');
        if (yesOrNo == true) {
            list.innerHTML = '';
        } else {

        }
    }
}



