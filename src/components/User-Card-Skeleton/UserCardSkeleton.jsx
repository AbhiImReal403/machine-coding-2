// import React from 'react'
import ContentLoader from "react-content-loader";

import refreshIcon from "../../assets/icons/refresh.svg";
import backIcon from "../../assets/icons/back.svg";
// import catTest from "../../assets/icons/cat-silhouette-vector.svg";

import locationIcon from "../../assets/icons/location.svg";
import callIcon from "../../assets/icons/call_me.svg";

function UserCardSkeleton(props) {
  return (
    <div className="card" style={{ flex: "0 0 auto" }}>
      <div className="d-flex justify-content-between">
        <img src={backIcon} alt="" />
        <div className="dm-serif-text" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
          Profile Overview
        </div>
        <img src={refreshIcon} alt="" />
      </div>

      <div className="card-body">
        <div className="profile d-flex justify-content-center flex-column">
          {/* <div className="something"> */}
          <ContentLoader
            speed={3}
            width={300}
            height={200}
            viewBox="0 0 300 200"
            backgroundColor="#bba3d7"
            foregroundColor="#cfb2f5"
            {...props}
          >
            <circle cx="140" cy="110" r="70" />
          </ContentLoader>
          {/* </div> */}
          <div className="userName">
            <ContentLoader
              speed={3}
              width={250}
              height={30}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="20" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>

            <div className="donegal-one-text mt-2">
              <rect x="205" y="323" rx="2" ry="2" width="175" height="42" />
            </div>
            <div
              className="dm-sans-text mt-2"
              style={{
                fontSize: "12px",
                color: "#000",
                letterSpacing: ".04rem",
              }}
            ></div>
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
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>{" "}
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>{" "}
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>{" "}
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>{" "}
          <div className="row">
            <ContentLoader
              speed={3}
              width={250}
              height={20}
              viewBox="0 0 355 30"
              backgroundColor="#bba3d7"
              foregroundColor="#cfb2f5"
              {...props}
            >
              <rect x="0" y="0" rx="0" ry="0" width="355" height="100" />

              {/* <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> */}
            </ContentLoader>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCardSkeleton;
