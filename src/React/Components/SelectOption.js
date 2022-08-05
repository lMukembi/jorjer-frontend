import React, { useState } from "react";
import Dropdown from "./Dropdown";

const SelectOption = ({ categories, onChange, prompt }) => {
  const [value, setValue] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");
  const [categoryResults, setCategoryResults] = useState([]);

  const handleSearch = (searchCategory) => {
    setSearchCategory(searchCategory);
    if (searchCategory !== "") {
      const categorySortResults = categories.filter((category) => {
        return Object.values(category)
          .join("")
          .toLowerCase()
          .includes(searchCategory.toLowerCase());
      });

      setCategoryResults(categorySortResults);
    } else {
      setCategoryResults(categories);
    }
  };

  const onChangeValue = (val) => {
    setValue(val);
    onChange(val);
  };
  return (
    <div>
      <Dropdown
        categories={searchCategory.length < 1 ? categories : categoryResults}
        value={value}
        handleChange={(val) => onChangeValue(val.name)}
        prompt={prompt}
        term={searchCategory}
        searchValue={handleSearch}
      />
    </div>
  );
};

export default SelectOption;
