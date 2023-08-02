interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Osinachi",
  lastName: "Basil",
  age: 27,
  location: "Abuja"
};

const student2: Student = {
  firstName: "Amarachi",
  lastName: "Rebecca",
  age: 22,
  location: "Lagos"
};

const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

renderTable();
