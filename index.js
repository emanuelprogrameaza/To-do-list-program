const input = document.getElementById('addTask');
const addButton = document.getElementById('addButton');
const task = document.querySelectorAll('.task');
const taskContainer = document.getElementById('tasks')


addButton.addEventListener('click', () => {
let text = input.value;


if(text === ""){
    input.placeholder = 'Please enter a valid task!';
    input.style.backgroundColor = 'hsla(0, 97%, 62%, 0.6)'
    input.style.color = '#b32727'
}
else{
input.style.backgroundColor = "";
input.style.color = "";

let divTask = document.createElement('div');
divTask.classList.add('task')

let h1Text = document.createElement('h1');
h1Text.textContent = input.value;
h1Text.classList.add('h1Appr');
divTask.appendChild(h1Text);


let deleteBtn = document.createElement('button');

let icon = document.createElement('i')
icon.classList.add('fa-solid', 'fa-trash-can');
deleteBtn.appendChild(icon)
divTask.appendChild(deleteBtn);


let hrAppr = document.createElement('hr');
hrAppr.classList.add('hrAppr');
divTask.appendChild(hrAppr)

taskContainer.appendChild(divTask)

}
})

taskContainer.addEventListener('click', (e) => {
    if(e.target.closest('button') && e.target.closest('button').querySelector('i.fa-trash-can')) {
        const divTask = e.target.closest('.task');
        if(divTask){
            divTask.remove()
        }
    }
})