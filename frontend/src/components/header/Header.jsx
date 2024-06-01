import { useState } from "react";
import DesktopNav from "./DesktopNav";

const Header = () => {
  const [hideleft, sethideleft] = useState("-left-[1000px]");
  const menu = ["recipes", "resources", "about", "contact"];

  const onopen = () => {
    sethideleft("left-0");
  };

  const onclose = () => {
    sethideleft("-left-[1000px]");
  };

  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menu={menu} />
      </div>
      <div className="min-[900px]:hidden">Mobile</div>
    </>
  );
};

export default Header;
