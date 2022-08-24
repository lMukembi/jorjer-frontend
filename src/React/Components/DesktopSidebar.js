import React from "react";
import { BiDrink, BiMoviePlay, BiRestaurant, BiRun } from "react-icons/bi";
import { AiFillHome, AiFillPrinter } from "react-icons/ai";
import { BsMusicNoteList, BsSpeakerFill } from "react-icons/bs";
import { GrCloudSoftware } from "react-icons/gr";
import {
  FcAdvertising,
  FcDvdLogo,
  FcLockLandscape,
  FcManager,
  FcMoneyTransfer,
  FcOvertime,
  FcStackOfPhotos,
  FcSurvey,
} from "react-icons/fc";
import {
  GiOfficeChair,
  GiTakeMyMoney,
  GiPoliceTarget,
  GiMeal,
  GiEgyptianBird,
  GiSteeringWheel,
  GiPartyPopper,
  GiLyre,
  GiGardeningShears,
  GiVacuumCleaner,
  GiFarmTractor,
  GiCeremonialMask,
  GiRiceCooker,
  GiSpookyHouse,
  GiMaterialsScience,
} from "react-icons/gi";
import {
  IoBookSharp,
  IoCarSport,
  IoGameControllerOutline,
  IoWatch,
  IoWater,
} from "react-icons/io5";
import {
  MdAdminPanelSettings,
  MdAppRegistration,
  MdEngineering,
  MdLocalAirport,
  MdOutlineBusAlert,
  MdOutlineDesignServices,
  MdPregnantWoman,
  MdSecurity,
  MdStroller,
} from "react-icons/md";
import {
  RiHealthBookFill,
  RiComputerFill,
  RiParentFill,
  RiBuilding2Fill,
} from "react-icons/ri";
import {
  FaBaby,
  FaCat,
  FaChild,
  FaCode,
  FaDog,
  FaHorse,
  FaSeedling,
  FaTape,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { ImPower } from "react-icons/im";
import {
  SiAltiumdesigner,
  SiCoursera,
  SiYourtraveldottv,
} from "react-icons/si";

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
          <p
            style={flexline}
            onClick={() => filterPosts("Influencer and Celebrity")}
          >
            <FcManager style={{ fontSize: "17px" }} />
            <span>Influencer and Celebrity</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Science and Technology")}
          >
            <GiMaterialsScience style={{ color: "blue", fontSize: "17px" }} />
            <span>Science and Technology</span>
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
        <li>
          <p style={flexline} onClick={() => filterPosts("Power and Lighting")}>
            <ImPower style={{ color: "blue", fontSize: "17px" }} />
            <span>Power and Lighting</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Measuring and Layouts")}
          >
            <FaTape style={{ color: "yellow", fontSize: "17px" }} />
            <span>Measuring and Layouts</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Plumbing and Water")}>
            <IoWater style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }} />
            <span>Plumbing and Water</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Feeds and Seeds")}>
            <FaSeedling style={{ color: "green", fontSize: "17px" }} />
            <span>Feeds and Seeds</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Liquor and Drinks")}>
            <BiDrink style={{ color: "brown", fontSize: "17px" }} />
            <span>Liquor and Drinks</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Livestock and Poultery")}
          >
            <GiEgyptianBird style={{ color: "grey", fontSize: "17px" }} />
            <span>Livestock and Poultery</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Driving and Cycling")}
          >
            <GiSteeringWheel style={{ color: "black", fontSize: "17px" }} />
            <span>Driving and Cycling</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Prams and Strollers")}
          >
            <MdStroller style={{ color: "red", fontSize: "17px" }} />
            <span>Prams and Strollers</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Maternity and Pregrancy")}
          >
            <MdPregnantWoman style={{ color: "blue", fontSize: "17px" }} />
            <span>Maternity and Pregrancy</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Baby and Kids")}>
            <FaBaby style={{ color: "brown", fontSize: "17px" }} />
            <span>Baby and Kids</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Classes and Courses")}
          >
            <SiCoursera
              style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }}
            />
            <span>Classes and Courses</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Party and Events")}>
            <GiPartyPopper style={{ color: "yellow", fontSize: "17px" }} />
            <span>Party and Events</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Childcare and Parenting")}
          >
            <RiParentFill style={{ color: "black", fontSize: "17px" }} />
            <span>Childcare and Parenting</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Chauffeur and Airport")}
          >
            <MdLocalAirport style={{ color: "green", fontSize: "17px" }} />
            <span>Chauffeur and Airport</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Building and Trade")}>
            <RiBuilding2Fill style={{ color: "grey", fontSize: "17px" }} />
            <span>Building and Trade</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("DJ and VDJ")}>
            <GiLyre style={{ color: "gold", fontSize: "17px" }} />
            <span>DJ and VirtualDJ</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Part-Time and Weekends")}
          >
            <FcOvertime style={{ fontSize: "17px" }} />
            <span>Part-Time and Weekends</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Restaurants and Bars")}
          >
            <BiRestaurant style={{ color: "red", fontSize: "17px" }} />
            <span>Restaurants and Bars</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Research and Survery")}
          >
            <FcSurvey style={{ fontSize: "17px" }} />
            <span>Research and Survery</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Logistics and Transport")}
          >
            <MdOutlineBusAlert
              style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }}
            />
            <span>Logistics and Transport</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Gardening and Landscaping")}
          >
            <GiGardeningShears style={{ color: "green", fontSize: "17px" }} />
            <span>Gardening and Landscaping</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Housekeeping and Cleaning")}
          >
            <GiVacuumCleaner style={{ color: "blue", fontSize: "17px" }} />
            <span>Housekeeping and Cleaning</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Travel and Tourism")}>
            <SiYourtraveldottv style={{ color: "brown", fontSize: "17px" }} />
            <span>Travel and Tourism</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Cats and Kittens")}>
            <FaCat style={{ color: "grey", fontSize: "17px" }} />
            <span>Cats and Kittens</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Dogs and Pupies")}>
            <FaDog style={{ fontSize: "17px", color: "burlywood" }} />
            <span>Dogs and Pupies</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Animals and Pets")}>
            <FaHorse style={{ color: "black", fontSize: "17px" }} />
            <span>Animals and Pets</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Farming and Veterinary")}
          >
            <GiFarmTractor style={{ color: "green", fontSize: "17px" }} />
            <span>Farming and Veterinary</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Engineering and Architecture")}
          >
            <MdEngineering style={{ color: "yellow", fontSize: "17px" }} />
            <span>Engineering and Architecture</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Consulting and Strategy")}
          >
            <MdAppRegistration style={{ color: "blue", fontSize: "17px" }} />
            <span>Consulting and Strategy</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Clerical and Administration")}
          >
            <MdAdminPanelSettings
              style={{ color: "brown", fontSize: "17px" }}
            />
            <span>Clerical and Administration</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Childcare and Babysitting")}
          >
            <FaChild style={{ color: "orange", fontSize: "17px" }} />
            <span>Childcare and Babysitting</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Commedy and Entertainment")}
          >
            <BsSpeakerFill
              style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }}
            />
            <span>Commedy and Entertainment</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Advertising and Marketing")}
          >
            <FcAdvertising style={{ fontSize: "17px" }} />
            <span>Advertising and Marketing</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Accounting and Finance")}
          >
            <FcMoneyTransfer style={{ fontSize: "17px" }} />
            <span>Accounting and Finance</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("CD's and DVD's")}>
            <FcDvdLogo style={{ fontSize: "17px" }} />
            <span>CD's and DVD's</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Fashion and Design")}>
            <SiAltiumdesigner style={{ color: "orange", fontSize: "17px" }} />
            <span>Fashion and Design</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Books and Stationary")}
          >
            <IoBookSharp style={{ color: "green", fontSize: "17px" }} />
            <span>Books and Stationary</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Wedding and Ceremony")}
          >
            <GiCeremonialMask style={{ color: "brown", fontSize: "17px" }} />
            <span>Wedding and Ceremony</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Software and Hardware")}
          >
            <GrCloudSoftware
              style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }}
            />
            <span>Software and Hardware</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Security and Surveillance")}
          >
            <MdSecurity style={{ color: "red", fontSize: "17px" }} />
            <span>Security and Surveillance</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Printers and Scanners")}
          >
            <AiFillPrinter
              style={{ color: "rgb(55, 135, 185)", fontSize: "17px" }}
            />
            <span>Printers and Scanners</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Kitchenware and cookware")}
          >
            <GiRiceCooker style={{ color: "orange", fontSize: "17px" }} />
            <span>Kitchenware and cookware</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Photography and videography")}
          >
            <FcStackOfPhotos style={{ fontSize: "17px" }} />
            <span>Photography and videography</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Watch and Trackers")}>
            <IoWatch style={{ color: "brown", fontSize: "17px" }} />
            <span>Watch and Trackers</span>
          </p>
        </li>
        <li>
          <p style={flexline} onClick={() => filterPosts("Land and Plots")}>
            <FcLockLandscape style={{ fontSize: "17px" }} />
            <span>Land and Plots</span>
          </p>
        </li>
        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("House and Appartments")}
          >
            <GiSpookyHouse style={{ color: "grey", fontSize: "17px" }} />
            <span>House and Appartments</span>
          </p>
        </li>

        <li>
          <p
            style={flexline}
            onClick={() => filterPosts("Tatoes and Workouts")}
          >
            <BiRun style={{ color: "brown", fontSize: "17px" }} />
            <span>Tatoes and Workouts</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DesktopSidebar;
