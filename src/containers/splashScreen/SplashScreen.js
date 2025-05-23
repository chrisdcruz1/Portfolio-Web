import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import logoImage from "../ToggleSwitch/cudabit1.png";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        {/* <span className="grey-color"> &lt;</span> */}
        <span className="splash-title">
          <img
            src={logoImage}
            alt="CudaBit"
            style={{maxHeight: "48px", width: "auto", verticalAlign: "middle"}}
          />
        </span>
        {/* <span className="grey-color">/&gt;</span> */}
      </div>
    </div>
  );
}
