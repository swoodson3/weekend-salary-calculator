
let employees = [];
let monthlyCost = 20000;
let monthlyTotal = 0;

function addEmployees(event) {
    console.log('addEmployees');
    event.preventDefault();

    let firstVal = document.querySelector('#firstInput').value;
    console.log(firstVal);
    let lastVal = document.querySelector('#lastInput').value;
    console.log(lastVal);
    let idVal = document.querySelector('#idInput').value;
    console.log(idVal);
    let titleVal = document.querySelector('#titleInput').value;
    console.log(titleVal);
    let salaryVal = document.querySelector('#salaryInput').value;
    console.log(salaryVal);
    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
    <tr>
        <td>${firstVal}</td>
        <td>${lastVal}</td>
        <td>${idVal}</td>
        <td>${titleVal}</td>
        <td>${salaryVal}</td>
        <td>
            <button class="delete-row" onClick="removeRow(event)">Delete</button>
        </td>
    </tr>
`; 
let person = {
    firstName: firstVal,
    lastName: lastVal,
    id: idVal,
    title: titleVal,
    salary: salaryVal,
}
employees.push(person) 
console.log(employees)

for (let i = 0; i < employees.length; i++) {
    monthlyTotal += Number(employees[i].salary) / 12;
  }
  
  const monthlySalaryElement = document.querySelector('#employeeMonthlySalary');
  
  if (monthlyTotal > 20000) {
    monthlySalaryElement.style.backgroundColor = 'red';
  }
  
  monthlySalaryElement.innerHTML = `
    <div>
      <h2>Total Monthly: ${monthlyTotal}</h2>
    </div>
  `;
}

function removeRow(event) {
    event.target.parentElement.parentElement.remove();
}






