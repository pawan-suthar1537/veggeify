import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ onclose, hideleft, onopen, menu }) => {
  return (
    <div className="f-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <span className="logo">Veggify</span>
      </a>
      <button onClick={onopen} className="border border-primary rounded">
        <HiBars3BottomLeft clssName="w-10 h-10" size={38} />
      </button>
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideleft} flex justify-center items-center`}
      >
        
        <button onClick={onclose} className="absolute top-32 right-8">
          <RiCloseCircleLine clssName="w-7 h-7 " size={38} />
        </button>
        <div className="">
        <span className="logo absolute  top-32">Veggify</span>
          <ul className="flex flex-col gap-5">
            {menu.map((item, index) => (
                
              <li key={index}>
                
                <Link
                  className="font-medium capitalize text-secondary text-2xl"
                  to={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 font-medium cursor-pointer mt-4">
            <li>
              <button className="text-secondary py-2 font-medium text-2xl rounded">
                Log in
              </button>
            </li>
            <li>
              <button className="text-secondary font-medium text-2xl  py-2 rounded">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
