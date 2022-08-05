import React, { useRef, useState } from "react";
import "../Css/Dropdown.css";

const Dropdown = ({
  categories,
  prompt,
  value,
  handleChange,
  searchValue,
}) => {
  const ref = useRef(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  
  const handleGetCategory = () => {
    searchValue(ref.current.value);
  };

  const selectCategory = (category) => {
    setQuery("");
    handleChange(category);
    setOpen(false);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="control">
          <div className="selected-value">
            <input
              ref={ref}
              type="text"
              value={value}
              onChange={handleGetCategory}
              placeholder={value ? value : prompt }
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={`arrow ${open ? "open" : null}`} />

          <div className={`options ${open ? "open" : null}`}>
            {categories &&
              categories.map((category) => (
                <div
                  key={category}
                  className={`option ${
                    value === category ? "selected" : null
                  }`}
                  onClick={() => selectCategory(category)}
                  onTouchEnd={() => selectCategory(category)}
                >
                  {category.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`dropdown--close ${!open ? "open" : null}`}
          onClick={() => setOpen()}
        ></div>
      )}
    </div>
  );
};

export default Dropdown;
