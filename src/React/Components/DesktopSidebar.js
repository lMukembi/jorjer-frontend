import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import {
  GiOfficeChair,
  GiTakeMyMoney,
  GiPoliceTarget,
  GiMeal,
} from "react-icons/gi";
import { IoCarSport, IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiHealthBookFill, RiComputerFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";

const flexline = {
  display: "flex",
  cursor: "pointer",
};

const DesktopSidebar = ({ setData }) => {
  const { posts } = useSelector((state) => state.Posts);

  const filterPosts = (catItem) => {
    const result = posts.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <div>
      <ul className="desktop-sidebar">
        <li>
          <p style={flexline} onClick={() => setData(posts)}>
            <AiFillHome
              style={{ color: "rgb(55, 136, 184)", fontSize: "17px" }}
            />
            <span>Home</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Phones and Tablets")}>
            <RiComputerFill style={{ color: "blue", fontSize: "17px" }} />
            <span>Phones and Tablets</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Home and Office")}>
            <GiOfficeChair style={{ color: "orange", fontSize: "17px" }} />
            <span>Home and Office</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("IT and Computing")}>
            <FaCode style={{ color: "red", fontSize: "17px" }} />
            <span>IT and Computing</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Health and Beauty")}>
            <RiHealthBookFill style={{ color: "purple", fontSize: "17px" }} />
            <span>Health and Beauty</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Wealth and Luxury")}>
            <GiTakeMyMoney style={{ color: "green", fontSize: "17px" }} />
            <span>Wealth and Luxury</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Politics and Fame")}>
            <GiPoliceTarget style={{ color: "blue", fontSize: "17px" }} />
            <span>Politics and Fame</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Cars and Bikes")}>
            <IoCarSport style={{ color: "black", fontSize: "17px" }} />
            <span>Cars and Bikes</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Dance and Music")}>
            <BsMusicNoteList
              style={{ color: "rgb(55, 136, 184)", fontSize: "17px" }}
            />
            <span>Dance and Music</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Movie and Cinema")}>
            <BiMoviePlay style={{ color: "pink", fontSize: "17px" }} />
            <span>Movie and Cinema</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Athletics and Gaming")}
          >
            <IoGameControllerOutline
              style={{ color: "green", fontSize: "17px" }}
            />
            <span>Athletics and Gaming</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Art and Design")}>
            <MdOutlineDesignServices
              style={{ color: "yellow", fontSize: "17px" }}
            />
            <span>Art and Design</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Food and Nutrition")}>
            <GiMeal style={{ color: "red", fontSize: "17px" }} />
            <span>Food and Nutrition</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DesktopSidebar;
