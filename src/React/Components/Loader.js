import React from "react";
import "../Css/Loader.css";

import { ImSpinner6 } from "react-icons/im";

function Loader() {
  return (
    <div>
      {window.outerWidth > 1023 && (
        <div className="loader">
          <ImSpinner6 />
        </div>
      )}

      {window.innerWidth < 1023 && (
        <div className="Loader">
          <ImSpinner6 />
        </div>
      )}
    </div>
  );
}

export default Loader;
