const employees = [
    { name: "John Doe", salary: 2000, empId: "EMP001" },
    { name: "Jane Smith", salary: 3000, empId: "EMP002" },
    { name: "Alice Johnson", salary: 5000, empId: "EMP003" },
    { name: "Robert Brown", salary: 1000, empId: "EMP004" },
];
function createRow(index, employee) {
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.salary}</td>
            <td>${employee.empId}</td>
        </tr>
    `;
}

function populateTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = employees.map((emp, index) => createRow(index, emp)).join("");
}
function createNewTable() {
    // Increase salary by 200
    const updatedEmployees = employees.map(emp => ({
        ...emp,
        salary: emp.salary + 200,
    }));

    // Filter employees with a salary greater than 2500
    const filteredEmployees = updatedEmployees.filter(emp => emp.salary > 2500);

    const filteredEmployees1 = updatedEmployees.filter(emp => emp.salary < 2500);

    // Create a new table
    const newTable = document.createElement("table");
    newTable.innerHTML = `
        <thead>
            <tr>
                <th>S.No</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Employee ID</th>
            </tr>
        </thead>
        <tbody>
            ${filteredEmployees.map((emp, index) => createRow(index, emp)).join("")}
        </tbody>
    `;

    // Append the new table to the container
    document.getElementById("tables-container").appendChild(newTable);
}

// Populate the initial table on page load
populateTable();
