import { useState, useEffect } from "react";
import "./Navbar.css";
import EtisalatLogo from "../../assets/images/main-logo.png";
import freedom from "../../assets/images/local-data.png";
import freedomLive from "../../assets/images/freedom-live.svg";
import newFreedom from "../../assets/images/local-data.png";
import emiratiFreedom from "../../assets/images/emirati-plan.svg";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({
  showELifePlan,
  setShowELifePlan,
  showFreedomPlan,
  setShowFreedomPlan,
  showNewFreedomPlan,
  setShowNewFreedomPlan,
  showFreedomLivePlan,
  setShowFreedomLivePlan,
  showEmiratiLivePlan,
  setShowEmiratiLivePlan,
  scrollSliderContainerIntoView,
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);

  const navToggle = () => {
    setMenuActive((prev) => !prev);
    setToggleIcon((prev) => !prev);
  };

  const subMenuDisplay = () => {
    setSubMenuActive((prev) => !prev);
  };

  const handleDisplayNewFreedomPlan = () => {
    setShowNewFreedomPlan(true);
    setMenuActive((prev) => !prev);
    setToggleIcon((prev) => !prev);
    setSubMenuActive((prev) => !prev);
    setShowFreedomPlan(false);
    setShowFreedomLivePlan(false);
    setShowEmiratiLivePlan(false);
    setShowELifePlan(false);
  };

  const handleDisplayFreedomLivePlan = () => {
    setShowFreedomLivePlan(true);
    setMenuActive((prev) => !prev);
    setToggleIcon((prev) => !prev);
    setSubMenuActive((prev) => !prev);
    setShowFreedomPlan(false);
    setShowNewFreedomPlan(false);
    setShowEmiratiLivePlan(false);
    setShowELifePlan(false);
  };

  const handleDisplayEmiratiLivePlan = () => {
    setShowEmiratiLivePlan(true);
    setMenuActive((prev) => !prev);
    setToggleIcon((prev) => !prev);
    setSubMenuActive((prev) => !prev);
    setShowFreedomPlan(false);
    setShowFreedomLivePlan(false);
    setShowNewFreedomPlan(false);
    setShowELifePlan(false);
  };
  const handleDisplayFreedomPlan = () => {
    setShowFreedomPlan(true);
    setMenuActive((prev) => !prev);
    setToggleIcon((prev) => !prev);
    setSubMenuActive((prev) => !prev);
    setShowEmiratiLivePlan(false);
    setShowFreedomLivePlan(false);
    setShowNewFreedomPlan(false);
    setShowELifePlan(false);
  };

  const handleDisplayElifePlan = () => {
    setShowELifePlan(true);
    scrollSliderContainerIntoView();
    setShowFreedomPlan(false);
    setShowEmiratiLivePlan(false);
    setShowFreedomLivePlan(false);
    setShowNewFreedomPlan(false);
  };

  useEffect(() => {
    if (showNewFreedomPlan && scrollSliderContainerIntoView) {
      scrollSliderContainerIntoView();
    }
    if (showFreedomLivePlan && scrollSliderContainerIntoView) {
      scrollSliderContainerIntoView();
    }
    if (showEmiratiLivePlan && scrollSliderContainerIntoView) {
      scrollSliderContainerIntoView();
    }
    if (showFreedomPlan && scrollSliderContainerIntoView) {
      scrollSliderContainerIntoView();
    }
  }, [
    showNewFreedomPlan,
    showFreedomPlan,
    showFreedomLivePlan,
    showEmiratiLivePlan,
    showELifePlan,
    scrollSliderContainerIntoView,
  ]);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <img src={EtisalatLogo} alt="logo" />
      </div>
      <ul className={menuActive ? "nav_menu nav_active" : "nav_menu"}>
        <li className="nav_item" onClick={handleDisplayElifePlan}>
          Home
        </li>
        <li className="nav_item" onClick={handleDisplayElifePlan}>
          eLifePlans
        </li>
        <li className="nav_item" onClick={subMenuDisplay}>
          <span>Freedom Plans</span>
          <span style={{ fontSize: "2rem" }}>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="nav_item wa_icon">
          <IoLogoWhatsapp />
        </li>
      </ul>
      <ul className={subMenuActive ? "sub_menu sub_active" : "sub_menu"}>
        <li className="sub_link" onClick={handleDisplayFreedomPlan}>
          <img src={freedom} alt="" />
          Freedom
        </li>
        <li className="sub_link" onClick={handleDisplayFreedomLivePlan}>
          <img src={freedomLive} alt="" />
          Freedom Live
        </li>
        <li className="sub_link" onClick={handleDisplayNewFreedomPlan}>
          <img src={newFreedom} alt="" />
          New Freedom
        </li>
        <li className="sub_link" onClick={handleDisplayEmiratiLivePlan}>
          <img src={emiratiFreedom} alt="" />
          Emirati Freedom
        </li>
      </ul>
      <div
        onClick={navToggle}
        className={toggleIcon ? "nav_toggler toggle" : "nav_toggler"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
