import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsMusicNoteList } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import {
  GiMeal,
  GiOfficeChair,
  GiPoliceTarget,
  GiTakeMyMoney,
} from "react-icons/gi";
import { IoCarSport, IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiComputerFill, RiHealthBookFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/Queries/Actions/Posts";
import "../Css/Menu.css";
import Loader from "./Loader";

const flexline = {
  display: "flex",
  cursor: "pointer",
};

const Menu = ({ setData, close }) => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.Posts);

  const filterPosts = (catItem) => {
    const result = posts.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    setData(posts);
  }, [posts]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ul className="menubar">
        <li>
          <p style={flexline} onClick={() => (setData(posts), close())}>
            <AiFillHome
              style={{ color: "rgb(55, 136, 184)", fontSize: "17px" }}
            />
            <span>Home</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Phones and Tablets"), close())}
          >
            <RiComputerFill style={{ color: "blue", fontSize: "17px" }} />
            <span>Phones and Tablets</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Home and Office"), close())}
          >
            <GiOfficeChair style={{ color: "orange", fontSize: "17px" }} />
            <span>Home and Office</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("IT and Computing"), close())}
          >
            <FaCode style={{ color: "red", fontSize: "17px" }} />
            <span>IT and Computing</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Health and Beauty"), close())}
          >
            <RiHealthBookFill style={{ color: "purple", fontSize: "17px" }} />
            <span>Health and Beauty</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Wealth and Luxury"), close())}
          >
            <GiTakeMyMoney style={{ color: "green", fontSize: "17px" }} />
            <span>Wealth and Luxury</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Politics and Fame"), close())}
          >
            <GiPoliceTarget style={{ color: "blue", fontSize: "17px" }} />
            <span>Politics and Fame</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Cars and Bikes"), close())}
          >
            <IoCarSport style={{ color: "black", fontSize: "17px" }} />
            <span>Cars and Bikes</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Dance and Music"), close())}
          >
            <BsMusicNoteList
              style={{ color: "rgb(55, 136, 184)", fontSize: "17px" }}
            />
            <span>Dance and Music</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Movie and Cinema"), close())}
          >
            <BiMoviePlay style={{ color: "pink", fontSize: "17px" }} />
            <span>Movie and Cinema</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Athletics and Gaming"), close())}
          >
            <IoGameControllerOutline
              style={{ color: "green", fontSize: "17px" }}
            />
            <span>Athletics and Gaming</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Art and Design"), close())}
          >
            <MdOutlineDesignServices
              style={{ color: "yellow", fontSize: "17px" }}
            />
            <span>Art and Design</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => (filterPosts("Food and Nutrition"), close())}
          >
            <GiMeal style={{ color: "red", fontSize: "17px" }} />
            <span>Food and Nutrition</span>
          </p>
        </li>
      </ul>
      <div className="sclose" onClick={() => close(false)} />
    </div>
  );
};

export default Menu;
