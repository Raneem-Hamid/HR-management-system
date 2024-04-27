'use strict';

var AllEmployee = [];

function Employees(id, fullName, department, level, image) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = this.calculateSalary();
  AllEmployee.push(this);
  saveEmployees(); // Save whenever a new employee is added
}

Employees.prototype.calculateSalary = function() {
  let max, min;
  if (this.level === "Senior") {
    max = 2000;
    min = 1500;
  } else if (this.level === "Mid-Senior") {
    max = 1500;
    min = 1000;
  } else if (this.level === "Junior") {
    max = 1000;
    min = 500;
  }
  let salary = Math.floor(Math.random() * (max - min) + min);
  let netSalary = salary - salary * 0.075
  return Math.round(netSalary);
};

function render() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ''; // Clear existing rows
  AllEmployee.forEach(employee => {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.fullName}</td>
        <td>${employee.department}</td>
        <td>${employee.level}</td>
        <td>$${employee.salary}</td>
    `;
    tableBody.appendChild(newRow);
  });
}

const cardsRow = document.getElementById("cardsRow");

function cards() {
  cardsRow.innerHTML = ''; // Clear existing cards
  
  AllEmployee.forEach(employee => {
        // let imageUrl = URL.createObjectURL(employee.image);
        console.log(employee.image);
        let firstDiv = document.createElement("div");
        firstDiv.className = "card";
        firstDiv.innerHTML = `
            <div class="content">
                <div class="imgBx">
                    <img src="${employee.image}">
                </div>
                <div class="contentBx">
                    <h3>${employee.fullName}</h3>
                </div>
            </div>
            <div class="sci">
                <h6>ID: ${employee.id}<br>Department: ${employee.department}<br>Level: ${employee.level}<br>Salary: $${employee.salary}</h6>
            </div>
        `;
        cardsRow.appendChild(firstDiv);
      });
}

function setId() {
  return Math.floor(1000 + Math.random() * 9000);
}

function saveEmployees() {
  localStorage.setItem('AllEmployee', JSON.stringify(AllEmployee));
}

function loadEmployees() {
  const data = localStorage.getItem('AllEmployee');
  return data ? JSON.parse(data) : [];
}

function init() {
  AllEmployee = loadEmployees();
  if (AllEmployee.length == 0) {
          // Add default employees only if the storage is empty
          new Employees(1000, 'Ghazi Samer', 'Administration', 'Senior', 'EmployeeImages/Gazi.jpg');
          new Employees(1001, 'Lana Ali', 'Finance', 'Senior', 'EmployeeImages/Lana.jpg');
          new Employees(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'EmployeeImages/Tamara.jpg');
          new Employees(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'EmployeeImages/Safi.jpg');
          new Employees(1004, 'Omar Zaid', 'Development', 'Senior', 'EmployeeImages/Omar.jpg');
          new Employees(1005, 'Rana Saleh', 'Development', 'Junior', 'EmployeeImages/Rana.jpg');
          new Employees(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'EmployeeImages/Hadi.jpg');
          saveEmployees();
      }
  render();
  cards();
}

const addForm = document.getElementById('addform');
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const employeeId = setId();
  const fullName = event.target.name.value;
  const department = event.target.department.value;
  const level = event.target.level.value;
  const image = document.getElementById("image").value;// Assuming image is a URL
    new Employees(employeeId, fullName, department, level, image);
  saveEmployees();
  render();
  cards();
  event.target.reset();
});

init();
