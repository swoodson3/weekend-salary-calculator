
let employees = [];
let monthlyCost = 20000;


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
employees.push() 
}

function removeRow(event) {
    event.target.parentElement.parentElement.remove();
}

function addEmployee(event) {
    event.target.parentElement.employees.push()
}

function monthlySalary() {
    let money = document.querySelector('#monthlySalary').value;
    money.empty();
    let monthlySalary = 0;
    for (let i =0; i < employees.length; i++) {
        monthlySalary += ((Number(employees[i].salaryVal)) / 12);
    }
    if (Number(monthlySalary) > monthlyCost) {
        // Number(tempVal) turns a string into a number
        monthlyCost = Number(monthlySalary);
        document.querySelector('#monthlySalary').innerHTML = monthlyCost;
    }
    /*if (Number(monthlySalary) > 20000) {
        ('#monthlySalary').css('background-color', 'red');
    }*/

}




/*function table() {
    let tableData = ('#employeeData');
    tableData.empty()
}*/




