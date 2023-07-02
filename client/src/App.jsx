import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UpdatedEmployee from "./components/UpdatedEmployee";


const App = () => {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/editemployee/:id" element={<UpdatedEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
