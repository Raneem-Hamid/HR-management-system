function Employees(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
  };
  
  Employees.prototype.salary = function () {
    let max, min;
  
    if (this.level === "Senior") {
      max = 2000;
      min = 1500;
      this.salary = getRandomSalary(max, min);
    } else if (this.level === "Mid-Senior") {
      max = 1500;
      min = 1000;
      this.salary = getRandomSalary(max, min);
  
    } else if (this.level === "Junior") {
      max = 1000;
      min = 500;
      this.salary = getRandomSalary(max, min);
    }
  
    return this.salary;
  
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
      <td>${parseInt(employee.salary())}</td>
  `; 
  
   tableBody.appendChild(newRow);
    });
    
  }
  
  
  
  // Get Random salary & netSalary
  function getRandomSalary(max, min) {
    salary = Math.floor(Math.random() * max - min + 1) + min;
    const netSalary = salary - salary * 0.075;
    return netSalary;
  
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
  