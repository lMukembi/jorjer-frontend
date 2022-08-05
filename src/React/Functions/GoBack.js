import React, { useEffect, useRef } from "react";
import "../Css/Category.css";
import { useDispatch } from "react-redux";
import { IoChevronBackOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import IconStyles from "./IconStyles";
import { getPosts } from "../../Redux/Queries/Actions/Posts";
import SelectOption from "../Components/SelectOption";

function GoBack({ noOfItems, title, subCategories }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <div className="back flex-row">
        <IoChevronBackOutline
          style={IconStyles}
          onClick={() => history.goBack()}
        />
        <h2 className="category-title">{title}</h2>
      </div>

      <div>
        <ul className="category-bar flex-row">
          <li className="items">{noOfItems} items</li>
          <li className="category-sort">
            <SelectOption subCategories={subCategories} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GoBack;
