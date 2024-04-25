function Employees(id, fullName, department, level, image) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.image = image;
}

Employees.prototype.salary = function () {
  let max, min;
  let calculatedSalary;
  if (this.level === "Senior") {
      max = 2000;
      min = 1500;
      calculatedSalary = getRandomSalary(max, min);
  } else if (this.level === "Mid-Senior") {
      max = 1500;
      min = 1000;
      calculatedSalary = getRandomSalary(max, min);
  } else if (this.level === "Junior") {
      max = 1000;
      min = 500;
      calculatedSalary = getRandomSalary(max, min);
  }
  return calculatedSalary;
}

Employees.prototype.render = function (AllEmployee) {
  const tableBody = document.getElementById("tableBody");
  AllEmployee.forEach(employee => {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
          <td>${employee.id}</td>
          <td>${employee.fullName}</td>
          <td>${employee.department}</td>
          <td>${employee.level}</td>
          <td>${employee.salary()}</td>
      `;
      tableBody.appendChild(newRow);
  });
}




Employees.prototype.cards = function (myarr) {
  const cardsRow = document.getElementById("cardsRow");
  myarr.forEach(employee => {
    let imageUrl = URL.createObjectURL(employee.image);
    // console.log(employee.image);
      let firstDiv = document.createElement("div");
      firstDiv.setAttribute("class", "card");
      firstDiv.innerHTML = `
          <div class="content">
              <div class="imgBx">
                  <img src="${imageUrl}">
              </div>
              <div class="contentBx">
                  <h3><span>${employee.fullName}</span></h3>
              </div>
          </div>
          <div class="sci">
              <h6>ID:${employee.id}<br><span>Department : ${employee.department}</span><br><span>Level : ${employee.level} </span><br><span>Salary : ${employee.salary()}</span></h6>
          </div>
      `;
      cardsRow.appendChild(firstDiv);
  });
}

// Get Random salary & netSalary
function getRandomSalary(max, min) {
  salary = Math.floor(Math.random() * (max - min) + 1) + min;
  const netSalary = salary - salary * 0.075;
  return Math.round(netSalary);
}

const addform = document.getElementById('addform');
const myarr = [];

addform.addEventListener('submit', (event) => {
  event.preventDefault();
  let employeeName = event.target.name.value;
  let employeeDepartment = event.target.department.value;
  let employeeLevel = event.target.level.value;
  // let employeeImage = event.target.image.value;
  let employeeImage = event.target.image.files[0];
  let employeeId = setId();
  let newEmployee = new Employees(employeeId, employeeName, employeeDepartment, employeeLevel, employeeImage);
  myarr.push(newEmployee);

  const cardsRow = document.getElementById("cardsRow");
  cardsRow.innerHTML = ""; // Clear the cardsRow before appending new cards
  new Employees().cards(myarr);
  event.target.reset();
});

function setId() {
  let min = 1000;
  let max = 9999;
  randomId = Math.floor(Math.random() * (max - min) + 1) + min;
  return Math.round(randomId);
}

const AllEmployee = [
  new Employees(1000, " Ghazi samer ", "Administration", "Senior"),
  new Employees(1001, "Lana Ali", "Finance", "Senior"),
  new Employees(1002, "Tamara Ayoub", "Marketing", "Senior"),
  new Employees(1003, "Safi Walid", "Administration", "Mid-Senior"),
  new Employees(1004, "Omar Zaid", "Development", "Senior"),
  new Employees(1005, "Rana Saleh", "Development", "Junior"),
  new Employees(1006, "Hadi Ahmad", "Finance", "Mid-Senior")
];

new Employees().render(AllEmployee);
