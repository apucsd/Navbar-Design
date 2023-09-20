import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const hideMenu = () => {
    const drawerCheckbox = document.getElementById("my-drawer-2");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox
    }
  };
  const hideSideBar = () => {
    const drawerCheckbox = document.getElementById("my-drawer-3");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false; // Uncheck the checkbox
    }
  };
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar  shadow-lg font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <span className="capitalize"> Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* desktop link */}
            {navItems}
          </ul>
        </div>
        <div className="navbar-end me-4">
          <label
            className="flex gap-2 items-center md:hidden"
            htmlFor="my-drawer-3"
          >
            <span>Sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* menu */}
      <div className={`drawer  md:drawer-start drawer-end lg:drawer-start`}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"></div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 md:w-80 lg:w-80 w-1/2  min-h-full bg-base-200 text-base-content pt-6 space-y-4 flex flex-col items-center">
            {/* Sidebar content here */}
            <li>
              <button className="md:hidden ms-28" onClick={hideMenu}>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="10"
                    y1="10"
                    x2="90"
                    y2="90"
                    stroke="black"
                    strokeWidth="10"
                  />
                  <line
                    x1="10"
                    y1="90"
                    x2="90"
                    y2="10"
                    stroke="black"
                    strokeWidth="10"
                  />
                </svg>
              </button>
            </li>
            {navItems}
          </ul>
        </div>
      </div>

      {/* menu end here */}

      {/* sidebar  */}
      <div className="drawer md:drawer-start drawer-start lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu  p-2  md:w-72 lg:w-72 w-1/2 min-h-full bg-base-200 text-base-content pt-6 space-y-4 flex flex-col items-star">
            {/* Sidebar content here */}
            <li>
              <button className="md:hidden ms-32" onClick={hideSideBar}>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="10"
                    y1="10"
                    x2="90"
                    y2="90"
                    stroke="black"
                    strokeWidth="10"
                  />
                  <line
                    x1="10"
                    y1="90"
                    x2="90"
                    y2="10"
                    stroke="black"
                    strokeWidth="10"
                  />
                </svg>
              </button>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Sidebar item 1 </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"></span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      item 1
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      item 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Sidebar Item 2 </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180"></span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      item 1
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      item 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
