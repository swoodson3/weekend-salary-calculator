let currentIndex = 0;


function submitForm(event) {
    console.log('submitForm');
    event.preventDefault();

    let firstVal = document.querySelector('#first-input').value;
    let lastVal = document.querySelector('#last-input').value;
    let idVal = document.querySelector('#id-input').value;
    let titleVal = document.querySelector('#title-input').value;
    let salaryVal = document.querySelector('#salary-input').value;
    let employeeTable = document.querySelector('#employeeTable');
    // let lastIndex = temperatureTable.lastElementChild;
    // let tableData = Number(lastIndex.firstElementChild.innerHTML);
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
}