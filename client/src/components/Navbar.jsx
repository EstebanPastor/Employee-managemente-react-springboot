import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800">
        <div className="h-16 px-8 flex items-center">
          <Link to={"/"} className="text-white font-bold">Employee management system</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
