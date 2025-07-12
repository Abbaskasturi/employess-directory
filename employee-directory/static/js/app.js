const listContainer = document.getElementById('employee-list-container');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const addBtn = document.getElementById('add-employee-btn');
const modal = document.getElementById('employee-modal');
const cancelBtn = document.getElementById('cancel-btn');
const employeeForm = document.getElementById('employee-form');
const filterBtn = document.getElementById('filter-btn');
const filterForm = document.getElementById('filter-form');
const applyFilterBtn = document.getElementById('apply-filter-btn');
const resetFilterBtn = document.getElementById('reset-filter-btn');
let currentPage = 1;
let itemsPerPage = 10;
let filteredEmployees = [...mockEmployees]; // for search/sort/filter support



function renderEmployees(employees) {
  listContainer.innerHTML = '';


  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedEmployees = employees.slice(start, end);

  employees.forEach((emp) => {
    const div = document.createElement('div');
    div.className = 'employee-card';
    div.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p>ID: ${emp.id}</p>
      <p>Email: ${emp.email}</p>
      <p>Department: ${emp.department}</p>
      <p>Role: ${emp.role}</p>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    listContainer.appendChild(div);
  });
  document.getElementById('page-info').innerText = `Page ${currentPage} of ${Math.ceil(employees.length / itemsPerPage)}`;
}

function deleteEmployee(id) {
  const index = mockEmployees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    mockEmployees.splice(index, 1);
    filteredEmployees = [...mockEmployees];
    currentPage = 1;
    renderEmployees(filteredEmployees);

  }
}

function editEmployee(id) {
  const employee = mockEmployees.find(emp => emp.id === id);
  if (employee) {
    document.getElementById('first-name').value = employee.firstName;
    document.getElementById('last-name').value = employee.lastName;
    document.getElementById('email').value = employee.email;
    document.getElementById('department').value = employee.department;
    document.getElementById('role').value = employee.role;

    
    employeeForm.setAttribute('data-edit-id', id);   
    modal.classList.remove('hidden');
  }
}



function handleSearch() {
  const query = searchInput.value.toLowerCase();
  const filtered = mockEmployees.filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  filteredEmployees = [...filtered]; // or [...sortedEmployees] for sort
  currentPage = 1;
  renderEmployees(filteredEmployees);
}

sortSelect.addEventListener('change', handleSort);

function handleSort() {
  const sortKey = sortSelect.value;

  if (sortKey) {
    const sortedEmployees = [...mockEmployees].sort((a, b) =>
      a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase())
    );
    filteredEmployees = [...sortedEmployees]; 
  } else {
    filteredEmployees = [...mockEmployees]; 
  }

  currentPage = 1; 
  renderEmployees(filteredEmployees); 
}

// Modal open/close
addBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

cancelBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  employeeForm.reset();
});

// Form submit
employeeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newEmployee = {
    id: mockEmployees.length + 1,
    firstName: document.getElementById('first-name').value.trim(),
    lastName: document.getElementById('last-name').value.trim(),
    email: document.getElementById('email').value.trim(),
    department: document.getElementById('department').value.trim(),
    role: document.getElementById('role').value.trim(),
  };


 const editId = employeeForm.getAttribute('data-edit-id');

  if (editId) {
    const index = mockEmployees.findIndex(emp => emp.id == editId);
    if (index !== -1) {
      newEmployee.id = parseInt(editId);
      mockEmployees[index] = newEmployee;
    }
    employeeForm.removeAttribute('data-edit-id');
  } else {
    mockEmployees.push(newEmployee);
  }

filteredEmployees = [...mockEmployees]; // updates paginated list
currentPage = 1;
renderEmployees(filteredEmployees);
modal.classList.add('hidden');
employeeForm.reset();

});

searchInput.addEventListener('input', handleSearch);
//render
renderEmployees(mockEmployees);
const closeBtn = document.getElementById('modal-close');

// Close when wrong-button is clicked
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  employeeForm.reset();
});

// Filter toggle
filterBtn.addEventListener('click', () => {
  filterForm.classList.toggle('hidden');
});

// Apply Filter
applyFilterBtn.addEventListener('click', () => {
  const firstNameFilter = document.getElementById('filter-firstname').value.toLowerCase();
  const departmentFilter = document.getElementById('filter-department').value.toLowerCase();
  const roleFilter = document.getElementById('filter-role').value.toLowerCase();

  const filteredEmployees = mockEmployees.filter(emp => {
    return (
      (!firstNameFilter || emp.firstName.toLowerCase().includes(firstNameFilter)) &&
      (!departmentFilter || emp.department.toLowerCase().includes(departmentFilter)) &&
      (!roleFilter || emp.role.toLowerCase().includes(roleFilter))
    );
  });

  renderEmployees(filteredEmployees);
});

// Reset Filter
resetFilterBtn.addEventListener('click', () => {
  document.getElementById('filter-firstname').value = '';
  document.getElementById('filter-department').value = '';
  document.getElementById('filter-role').value = '';

  renderEmployees(mockEmployees);
  filterForm.classList.add('hidden');
});

document.getElementById('items-per-page').addEventListener('change', (e) => {
  itemsPerPage = parseInt(e.target.value);
  currentPage = 1;
  renderEmployees(filteredEmployees);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderEmployees(filteredEmployees);
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  const maxPage = Math.ceil(filteredEmployees.length / itemsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    renderEmployees(filteredEmployees);
  }
});
