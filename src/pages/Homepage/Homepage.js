import React from "react";
import { useMediaQuery } from "react-responsive";

import { mockData } from "./mockHomepageData";
import "./Homepage.scss";
import UserTable from "../../components/Tables/UserTable";
import Card from "../../components/Card/Card";
import companyLogo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

function Homepage() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const getOptInStatus = (status) => (status ? "Opted In" : "Opted Out");
  return (
    <div className="c-homepage">
      <div className="c-homepage__side-bar">
        <img
          alt="onaro logo"
          className="c-homepage__side-bar-logo"
          src={companyLogo}
        />
        <div className="c-homepage__side-bar-bottom">
          <Link className="c-homepage__side-bar-link" to="/Privacy">
            Privacy
          </Link>
          <span className="c-homepage__side-bar-link">|</span>
          <Link className="c-homepage__side-bar-link" to="/Terms">
            Terms
          </Link>
          <span className="c-homepage__side-bar-link">|</span>
          <Link className="c-homepage__side-bar-link" to="/Help">
            Help
          </Link>
          <p className="c-homepage__side-bar-link">&#169; Copyright 2020</p>
        </div>
      </div>
      <div className="c-homepage__main-content">
        <h3 className="c-homepage__title">
          Customers that have registered for Pharmacy opt-in
        </h3>
        {!isTabletOrMobile && (
          <Card className="c-homepage__card">
            <UserTable tableData={mockData} />
          </Card>
        )}
        {isTabletOrMobile &&
          mockData.map((data) => (
            <div className="c-homepage__mobile-card-container">
              <Card>
                <div className="c-homepage__mobile-row">
                  <p className="c-homepage__card-title">Name:</p>
                  <p>{data.name}</p>
                </div>
                <div className="c-homepage__mobile-row">
                  <p className="c-homepage__card-title">Email:</p>
                  <p>{data.email}</p>
                </div>
                <div className="c-homepage__mobile-row">
                  <p className="c-homepage__card-title">Gender:</p>
                  <p>{data.gender}</p>
                </div>
                <div className="c-homepage__mobile-row">
                  <p className="c-homepage__card-title">DOB:</p>
                  <p>{data.dob}</p>
                </div>
                <div className="c-homepage__mobile-row">
                  <p className="c-homepage__card-title">OptIn Status:</p>
                  <p>{getOptInStatus(data.optInStatus)}</p>
                </div>
              </Card>
            </div>
          ))}
        {isTabletOrMobile && <div className="c-homepage__mobile-footer">
          <img
            alt="onaro logo"
            className="c-homepage__mobile-footer-logo"
            src={companyLogo}
          />
          <div className="c-homepage__mobile-footer-bottom">
            <Link className="c-homepage__side-bar-link" to="/Privacy">
              Privacy
            </Link>
            <span className="c-homepage__side-bar-link">|</span>
            <Link className="c-homepage__side-bar-link" to="/Terms">
              Terms
            </Link>
            <span className="c-homepage__side-bar-link">|</span>
            <Link className="c-homepage__side-bar-link" to="/Help">
              Help
            </Link>
            <p className="c-homepage__side-bar-link">&#169; Copyright 2020</p>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Homepage;
