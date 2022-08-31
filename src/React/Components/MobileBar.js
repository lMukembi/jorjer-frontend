import React, { useState } from "react";
import "../Css/MobileBar.css";
import { TiHomeOutline } from "react-icons/ti";
import { BsPlusCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import IconStyles from "../Functions/IconStyles";
import PostOptions from "./PostOptions";
import { BsMenuDown } from "react-icons/bs";
import Menu from "./Menu";
import { IoMdClose } from "react-icons/io";

function MobileBar({ setData }) {
  const [togglePostOptions, setTogglePostOptions] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="mobile-bar">
      <div>
        <NavLink to="/" className="link">
          <TiHomeOutline style={IconStyles} />
        </NavLink>
      </div>

      <div>
        <p className="link" onClick={() => setTogglePostOptions(true)}>
          <BsPlusCircle style={IconStyles} />
        </p>
        {togglePostOptions && <PostOptions close={setTogglePostOptions} />}
      </div>

      <div>
        <p className="link" onClick={() => setMenu(!menu)}>
          {!menu && <BsMenuDown style={IconStyles} />}

          {menu && <IoMdClose style={IconStyles} />}
        </p>
        {menu && <Menu setData={setData} close={setMenu} />}
      </div>
    </div>
  );
}

export default MobileBar;
