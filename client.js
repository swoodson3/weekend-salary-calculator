
let employees = [];
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
    const formattedSalaryVal = Number(salaryVal).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    let employeeTable = document.querySelector('#employeeData');
    employeeTable.innerHTML += `
    <tr>
        <td>${firstVal}</td>
        <td>${lastVal}</td>
        <td>${idVal}</td>
        <td>${titleVal}</td>
        <td>${formattedSalaryVal}</td>
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

    const formattedMonthlyTotal = monthlyTotal.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    monthlySalaryElement.innerHTML = `
    <div style="text-align: right">
      <h2>Total Monthly: ${formattedMonthlyTotal}</h2>
    </div>
  `;
}

function removeRow(event) {
    event.target.parentElement.parentElement.remove();
}






