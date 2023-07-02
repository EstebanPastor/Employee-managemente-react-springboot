import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const UpdatedEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await EmployeeService.getEmployeeById(id);
        setEmployee(res.data);
      } catch (error) {
        toast.error("There was an error fetching the employee");
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const updateEmployee = (e) => {
    e.preventDefault();
   EmployeeService.updateEmployee(employee, id).then((res) => {
    navigate("/employeelist");
    toast.success("Employee updated successfully!");
   })
   .catch((err) => {
    toast.error("There was an error updating the employee")
   })
  };

  return (
    <>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Updated employee</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="h-10 w-96 border mt-2 px-2 py-2"
              placeholder="Write the email here..."
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={updateEmployee}
              className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
            >
              Update
            </button>
            <button 
            onClick={() => navigate("/employeelist")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatedEmployee;
