import { useState } from "react";
import API from "./api/api";

function AddEmployee() {

  const [employee, setEmployee] = useState({
    name: "",
    role: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const saveEmployee = () => {
    API.post("/employees", employee)
      .then(res => {
        console.log("Saved:", res.data);
        alert("Employee Added");
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />

      <button onClick={saveEmployee}>Save</button>
    </div>
  );
}

export default AddEmployee;
