import { useEffect, useState } from "react";
import API from "./api/api";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/employees")
      .then(response => setEmployees(response.data))
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
