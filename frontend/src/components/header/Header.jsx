import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "../MobileNav";

const Header = () => {
  const [hideleft, sethideleft] = useState("-left-[1000px]");
  const menu = ["recipes", "about", "contact"];

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
      <div className="min-[900px]:hidden">
        <MobileNav
          menu={menu}
          onclose={onclose}
          hideleft={hideleft}
          onopen={onopen}
        />
      </div>
    </>
  );
};

export default Header;
