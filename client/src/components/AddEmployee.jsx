import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddEmployee = () => {
  const [employee, setEmployees] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployees({ ...employee, [e.target.name]: value });
  };

  const handleBack = (e) => {
    e.preventDefault();
    setEmployees({ id: "", firstName: "", lastName: "", emailId: "" });
  }

  const saveEmployee = (e) => {
    e.preventDefault();
    if (!employee.firstName || !employee.lastName || !employee.emailId) {
      toast.error("All the fields are mandatory!");
      return;
    }else {
      toast.success("Employee added successfully!");
    }
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        navigate("/employeelist")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8 ">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Add new employee</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Write the name here..."
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Write the last name here..."
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Email
            </label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Write the email here..."
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={saveEmployee}
              className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
            >
              Save
            </button>
            <button
            onClick={handleBack}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
              Clear fields
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
