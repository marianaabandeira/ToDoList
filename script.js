// Pegando os elementos do HTML
const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// Função para adicionar tarefa
function addTask() {
  const taskText = input.value.trim(); // pega o texto do input e remove espaços
  if (taskText === '') return; // não adiciona tarefa vazia

  // Cria um item de lista (li)
  const li = document.createElement('li');

  // Adiciona o texto da tarefa
  li.textContent = taskText;

  // Cria botão de remover
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => li.remove());

  // Permite marcar como concluída ao clicar no item
  li.addEventListener('click', () => li.classList.toggle('completed'));

  // Adiciona o botão de remover ao li
  li.appendChild(removeBtn);

  // Adiciona o li na lista
  taskList.appendChild(li);

  // Limpa o input
  input.value = '';
}

// Evento do botão "Adicionar"
addBtn.addEventListener('click', addTask);

// Adicionar tarefa ao apertar Enter
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
