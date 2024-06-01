import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menu }) => {
  return (
    <div className="f-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <span className="logo">Veggify</span>
      </a>

      <ul className="flex gap-7">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item} className="font-medium capitalize text-secondary">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      {/* login signup */}
      <ul className="flex items-center gap-4 font-medium cursor-pointer">
        <li>
            <button className="text-secondary px-4 py-2 rounded">Log in</button>
        </li>
        <li>
            <button className="text-secondary px-4 py-2 rounded">Sign up</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
