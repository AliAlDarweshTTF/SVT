import { useRef, useState } from "react";
import "../src/assets/styles.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./pages/Footer";
import NewFreedomPlans from "./pages/NewFreedomPlans/NewFreedomPlans";
import FreedomLivePlans from "./pages/FreedomLivePlans/FreedomLivePlans";
import ELifePlans from "./pages/ELifePlans/ELifePlans";
import EmiratiPlan from "./pages/EmiratiPlans/EmiratiPlan";
import FreedomPlan from "./pages/FreedomPlans/FreedomPlan";

function App() {
  const [showFreedomPlan, setShowFreedomPlan] = useState(false);
  const [showNewFreedomPlan, setShowNewFreedomPlan] = useState(false);
  const [showFreedomLivePlan, setShowFreedomLivePlan] = useState(false);
  const [showEmiratiLivePlan, setShowEmiratiLivePlan] = useState(false);
  const [showELifePlan, setShowELifePlan] = useState(true);

  const inputElement = useRef();

  const submitButtonRef = useRef();

  const handleCallbackButtonClick = () => {
    if (submitButtonRef.current) {
      window.scrollTo({
        top: submitButtonRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const activeFreedom = () => {
    setShowFreedomPlan(true);
    setShowFreedomLivePlan(false);
    setShowNewFreedomPlan(false);
    setShowEmiratiLivePlan(false);
    setShowELifePlan(false);
  };
  const activeFreedomLive = () => {
    setShowFreedomLivePlan(true);
    setShowNewFreedomPlan(false);
    setShowEmiratiLivePlan(false);
    setShowFreedomPlan(false);
    setShowELifePlan(false);
  };
  const activeNewFreedom = () => {
    setShowNewFreedomPlan(true);
    setShowFreedomLivePlan(false);
    setShowEmiratiLivePlan(false);
    setShowFreedomPlan(false);
    setShowELifePlan(false);
  };
  const activeEmirati = () => {
    setShowEmiratiLivePlan(true);
    setShowFreedomLivePlan(false);
    setShowNewFreedomPlan(false);
    setShowFreedomPlan(false);
    setShowELifePlan(false);
  };

  const handleShopNowClick = (card) => {
    if (card.title === "Freedom Live Plans") {
      activeFreedomLive();
    }
    if (card.title === "Emirati Freedom Plans") {
      activeEmirati();
    }
    if (card.title === "New Freedom Plans") {
      activeNewFreedom();
    }
    if (card.title === "Freedom Plans") {
      activeFreedom();
    }
  };

  return (
    <>
      <Navbar
        showNewFreedomPlan={showNewFreedomPlan}
        setShowNewFreedomPlan={setShowNewFreedomPlan}
        showFreedomLivePlan={showFreedomLivePlan}
        setShowFreedomLivePlan={setShowFreedomLivePlan}
        showEmiratiLivePlan={showEmiratiLivePlan}
        setShowEmiratiLivePlan={setShowEmiratiLivePlan}
        showFreedomPlan={showFreedomPlan}
        setShowFreedomPlan={setShowFreedomPlan}
        showELifePlan={showELifePlan}
        setShowELifePlan={setShowELifePlan}
        scrollSliderContainerIntoView={() =>
          inputElement.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Banner />
      <Contact submitButtonRef={submitButtonRef} />

      {showELifePlan && (
        <ELifePlans
          showELifePlan={showELifePlan}
          setShowELifePlan={setShowELifePlan}
          handleCallbackButtonClick={handleCallbackButtonClick}
          inputElement={inputElement}
        />
      )}
      {showFreedomPlan && (
        <FreedomPlan
          showFreedomPlan={showFreedomPlan}
          setShowFreedomPlan={setShowFreedomPlan}
          inputElement={inputElement}
        />
      )}
      {showEmiratiLivePlan && (
        <EmiratiPlan
          showEmiratiLivePlan={showEmiratiLivePlan}
          setShowEmiratiLivePlan={setShowEmiratiLivePlan}
          inputElement={inputElement}
        />
      )}

      {showNewFreedomPlan && (
        <NewFreedomPlans
          showNewFreedomPlan={showNewFreedomPlan}
          setShowNewFreedomPlan={setShowNewFreedomPlan}
          inputElement={inputElement}
        />
      )}
      {showFreedomLivePlan && (
        <FreedomLivePlans
          showFreedomLivePlan={showFreedomLivePlan}
          setShowFreedomLivePlan={setShowFreedomLivePlan}
          inputElement={inputElement}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
