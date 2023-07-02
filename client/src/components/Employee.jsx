import { Link, useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editemployee/${id}`)
    

  }
  return (
    <>
      <tr key={employee.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.firstName}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.lastName}</div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{employee.emailId}</div>
        </td>

        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
          <Link
            onClick={(e, id) => editEmployee(e, employee.id)}
            className="text-indigo-600 hover:text-indigo-800 px-4 rounded-md hover:bg-gray-300"
          >
            Edit
          </Link>
          <Link
            onClick={(e, id) => deleteEmployee(e, employee.id)}
            className="text-indigo-600 hover:text-indigo-800 rounded-md px-4 hover:bg-red-400"
          >
            Delete
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Employee;
