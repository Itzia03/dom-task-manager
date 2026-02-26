const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const List = document.getElementById('List');
const contador = document.getElementById('contador');
const emptyMsg = document.getElementById('emptyMsg');

function updateContador() {
    const total = List.querySelectorAll('.task-item').length;
    contador.textContent = total === 1 ? '1 task' : `${total} tasks`;
    emptyMsg.style.display = total === 0 ? 'block' : 'none';
}

function addTask() {
    const value = input.value.trim();
    if (!value) return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = value;

    const btn = document.createElement('button');
    btn.className = 'remove-btn';
    btn.textContent = 'Remove';

    btn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.style.transition = 'opacity 0.2s, transform 0.2s';
    li.style.opacity = '0';
    li.style.transform = 'translateX(10px)';
    setTimeout(() => {
        li.remove();
        updateContador();
    }, 200);
    });

    li.addEventListener('click', () => {
    li.classList.toggle('completed');
    });

    li.appendChild(span);
    li.appendChild(btn);
    List.prepend(li);

    input.value = '';
    input.focus();
    updateContador();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

updateContador();