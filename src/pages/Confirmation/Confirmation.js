import React from "react";

import companyLogo from "../../assets/icons/logo.png";
import Card from "../../components/Card/Card";
import ConfirmationTick from "../../assets/icons/ConfirmationTick.png";

import "./Confirmation.scss";
import Button from "../../components/Button/Button";

function Confirmation() {
  return (
    <div className="c-confirmation">
      <Card>
        <div className="c-confirmation__content">
          <div className="c-confirmation__tick-background">
            <img
              className="c-confirmation__tick"
              alt="confirmation tick"
              src={ConfirmationTick}
            ></img>
          </div>
          <img
            alt="onaro logo"
            className="c-confirmation__logo"
            src={companyLogo}
          />
          <p className="c-confirmation__message">Registration Complete!</p>
        </div>
        <div className="c-confirmation__button-container">
          <Button
            type="secondary"
            label="Homepage"
            onClick={() => console.log("going to homepage")}
          />
        </div>
      </Card>
    </div>
  );
}

export default Confirmation;
