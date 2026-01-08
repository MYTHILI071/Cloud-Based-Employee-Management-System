import { useEffect, useState } from "react";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.role} - {emp.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
