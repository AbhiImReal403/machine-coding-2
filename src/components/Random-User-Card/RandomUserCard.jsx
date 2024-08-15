// import React from 'react'

import refreshIcon from "../../assets/icons/refresh.svg";
import backIcon from "../../assets/icons/back.svg";
import catTest from "../../assets/icons/cat-silhouette-vector.svg";

import locationIcon from "../../assets/icons/location.svg";
import callIcon from "../../assets/icons/call_me.svg";

function RandomUserCard() {
  return (
    <>
      <div className="card">
        <div className="d-flex justify-content-between">
          <img src={backIcon} alt="" />
          <div
            className="dm-serif-text"
            style={{ color: "rgba(0, 0, 0, 0.7)" }}
          >
            Profile Overview
          </div>
          <img src={refreshIcon} alt="" />
        </div>

        {/* <img src="..." className="card-img-top" alt="..." /> */}

        <div className="card-body">
          <div className="profile d-flex justify-content-center flex-column">
            {/* <div className="something"> */}

            <div
              className="profilePic mt-4"
              style={{ backgroundImage: `url(${catTest})` }}
            >
              <div className="agePill end-0 position-absolute text-white">
                <span className="bg-dark p-1 px-2 rounded-4">{"Mr"}</span>
              </div>
            </div>
            {/* </div> */}
            <div className="userName">
              <div
                className="donegal-one-text mt-2"
                style={{
                  fontSize: "24px",
                  letterSpacing: ".04rem",
                  color: "rgba(0, 0, 0,1)",
                }}
              >
                Tom Garza
              </div>
              <div
                className="dm-sans-text mt-2"
                style={{
                  fontSize: "12px",
                  color: "#000",
                  letterSpacing: ".04rem",
                }}
              >
                beautifulkoala355
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="profileActions d-flex justify-content-center">
          <div
            className="me-4 dm-sans-text"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: "9px",
              fontWeight: "bold",
            }}
          >
            <img src={locationIcon} alt="" /> Location
          </div>
          <div
            className="me-4 dm-sans-text"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: "9px",
              fontWeight: "bold",
            }}
          >
            <img src={callIcon} alt="" /> Call me
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6">
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                City
              </div>
              <div
                className="dm-serif-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                Mildura
              </div>
            </div>
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                Date of birth
              </div>
              <div
                className="dm-serif-text text-truncate"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                09 December, 1982
              </div>
            </div>
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                Time Zone
              </div>
              <div
                className="dm-serif-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                -10:00 (Hawaii)
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                Nationality
              </div>
              <div
                className="dm-serif-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                {"flagIcon"} AU
              </div>
            </div>{" "}
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                Phone No.
              </div>
              <div
                className="dm-serif-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                0486-362-738
              </div>
            </div>{" "}
            <div className="align-items-start d-flex flex-column mb-3">
              <div
                className="dm-sans-text"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "9px",
                }}
              >
                Registered Since
              </div>
              <div
                className="dm-serif-text text-truncate"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "18px",
                }}
              >
                13 November, 2013
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomUserCard;
