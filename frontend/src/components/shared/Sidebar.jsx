import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Applications",
      path: "/applications",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },
    {
      name: "Settings",
      path: "/settings",
    },
    {
      name: "AI Resume Analyzer",

      path: "/ai-resume-analyzer",
    },
  ];

  return (
    <div
      className="
        w-64
        min-h-screen

        bg-white
        border-r
        p-6

        flex
        flex-col
      "
    >
      <h1
        className="
          text-4xl
          font-extrabold
          mb-12
          tracking-tight
        "
      >
        OfferFlow
      </h1>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `
                px-4
                py-3
                rounded-xl
                font-medium
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="
          mt-auto

          bg-black
          text-white

          px-4
          py-3

          rounded-xl
          font-medium

          w-full
        "
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
