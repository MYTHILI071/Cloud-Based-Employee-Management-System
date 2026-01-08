import { useState } from "react";

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
    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Saved:", data);
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
