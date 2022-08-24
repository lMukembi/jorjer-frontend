import React from "react";
import "../Css/Loader.css";

import { ImSpinner6 } from "react-icons/im";

function Loader() {
  return (
    <div>
      <ul className="Loader">
        <li className="loaderName">Jorjer</li>
        <li className="loader">
          <ImSpinner6 />
        </li>
      </ul>
    </div>
  );
}

export default Loader;
