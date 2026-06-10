import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div
      className="
        h-20
        bg-white
        border-b
        px-8
        flex
        items-center
        justify-end
      "
    >
      <button
        onClick={handleLogout}
        className="
    bg-black
    text-white
    px-6
    py-3
    rounded-lg
    font-medium
  "
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
