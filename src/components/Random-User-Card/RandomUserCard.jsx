import refreshIcon from "../../assets/icons/refresh.svg";
import backIcon from "../../assets/icons/back.svg";
import catTest from "../../assets/icons/cat-silhouette-vector.svg";

import locationIcon from "../../assets/icons/location.svg";
import callIcon from "../../assets/icons/call_me.svg";

// import chaiAurCodeIcon from "../../assets/icons/chaiAurCode.svg";
// import chaiAurCodeIcon from "../../assets/icons/chaiCodeCup.svg";

import { useEffect, useState } from "react";
import CountryFlag from "../CountryFlag/CountryFlag";

// eslint-disable-next-line react/prop-types
function RandomUserCard({ userData, onRefreshData, isLoading }) {
  const initialUsrState = {
    gender: "",
    title: "",
    fullName: "",
    username: "",
    city: "",
    nat: "",
    dob: "",
    phone: "",
    timezone_offset: "",
    timezone_desc: "",
    registered: "",
    picture: "",
    latitude: "",
    longitude: "",
  };

  const [userDetails, setUserDetails] = useState(initialUsrState);

  useEffect(() => {
    const mapUserDetails = () => {
      setUserDetails(userData);
    };

    mapUserDetails();
  }, [userData]);

  const openLocation = (latitude, longitude) => {
    if (latitude && longitude) {
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(googleMapsUrl, "_blank");
    }
  };
  const callPerson = (phone) => {
    if (phone) {
      const callingUrl = `tel:${phone}`;
      window.open(callingUrl, "_blank");
    }
  };

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
          <img
            src={refreshIcon}
            alt=""
            onClick={onRefreshData}
            style={{ cursor: `${isLoading ? "not-allowed" : "pointer"}` }}
          />
        </div>
        {/* card-body */}
        <div className="">
          <div className="profile d-flex justify-content-center flex-column">
            {/* <div className="something"> */}

            <div
              className="profilePic mt-4"
              style={{
                backgroundImage: `url(${
                  userDetails && userDetails?.picture
                    ? userDetails?.picture
                    : catTest
                })`,
              }}
            >
              <div className="agePill end-0 position-absolute text-white">
                <span className="bg-dark p-1 px-2 rounded-4">
                  {userDetails && userDetails?.title ? userDetails?.title : ""}
                </span>
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
                {userDetails && userDetails?.fullName
                  ? userDetails?.fullName
                  : "Tom Garza"}
              </div>
              <div
                className="dm-sans-text mt-2"
                style={{
                  fontSize: "12px",
                  color: "#000",
                  letterSpacing: ".04rem",
                }}
              >
                {userDetails && userDetails?.username
                  ? userDetails?.username
                  : "beautifulkoala355"}
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
              cursor: `${
                userDetails && userDetails?.longitude && userDetails?.latitude
                  ? "pointer"
                  : "not-allowed"
              }`,
            }}
            onClick={() => {
              openLocation(userDetails?.latitude, userDetails?.longitude);
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
              cursor: `${
                userDetails && userDetails?.phone ? "pointer" : "not-allowed"
              }`,
            }}
            onClick={() => {
              callPerson(userDetails.phone);
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
                {userDetails && userDetails?.city
                  ? userDetails?.city
                  : "Mildura"}
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
                {userDetails && userDetails?.dob
                  ? userDetails?.dob
                  : "09 December, 1982"}
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
                className="dm-serif-text text-truncate"
                style={{
                  color: "rgba(0, 0, 0, 0.7)",
                  fontSize: "16px",
                }}
              >
                {` ${
                  userDetails && userDetails?.timezone_offset
                    ? userDetails?.timezone_offset
                    : "-10:00"
                } (${
                  userDetails && userDetails?.timezone_desc
                    ? userDetails?.timezone_desc
                    : "Hawai"
                })`}
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
                {userDetails && userDetails?.nat ? (
                  <>
                    <CountryFlag
                      countryCode={userDetails?.nat}
                      className="me-2"
                    />
                    {userDetails?.nat}
                  </>
                ) : (
                  "AU"
                )}
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
                {userDetails && userDetails?.phone
                  ? userDetails?.phone
                  : "0486-362-738"}
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
                {userDetails && userDetails?.registered
                  ? userDetails?.registered
                  : "13 November, 2013"}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-end">
            <div
              className="chaiAurCodeBtn"
              alt=""
              width={60}
              height={62}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://chaicode.com/",
                  "_blank",
                  "rel=noopener noreferrer"
                );
              }}
            >
              <svg
                width="60"
                height="62"
                viewBox="0 0 60 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="chaiCodeIconSVG">
                  <path
                    id="Vector"
                    d="M11.3545 -0.192871C12.2559 -0.208934 13.1574 -0.224997 14.0861 -0.241547C18.2156 -0.286026 22.3449 -0.327072 26.4746 -0.350098C28.6512 -0.366646 30.8276 -0.39392 33.0039 -0.432129C36.1435 -0.486967 39.2819 -0.508784 42.4219 -0.523438C43.3908 -0.546107 44.3598 -0.568776 45.3581 -0.592133C49.8638 -0.578084 53.0091 -0.493366 56.5986 2.40771C59.6724 5.72588 60.125 7.15448 60.1929 11.5381C60.2089 12.4796 60.225 13.421 60.2415 14.3911C60.286 18.7037 60.3271 23.0162 60.3501 27.3291C60.3666 29.6026 60.3939 31.8761 60.4321 34.1494C60.4869 37.428 60.5088 40.7054 60.5234 43.9844C60.5461 44.9971 60.5688 46.0098 60.5921 47.0532C60.5784 51.6498 60.5565 54.9572 57.5923 58.626C54.3336 61.6103 52.9242 62.1236 48.6455 62.1929C47.7441 62.2089 46.8426 62.225 45.9139 62.2415C41.7844 62.286 37.6551 62.3271 33.5254 62.3501C31.3488 62.3666 29.1724 62.3939 26.9961 62.4321C23.8565 62.487 20.7181 62.5088 17.5781 62.5234C16.6092 62.5461 15.6402 62.5688 14.6419 62.5921C10.1362 62.5781 6.99092 62.4934 3.40137 59.5923C0.327582 56.2741 -0.124964 54.8455 -0.192871 50.4619C-0.208934 49.5204 -0.224997 48.579 -0.241547 47.6089C-0.286009 43.2963 -0.327071 38.9838 -0.350098 34.6709C-0.366648 32.3974 -0.393925 30.1239 -0.432129 27.8506C-0.486947 24.572 -0.508781 21.2946 -0.523438 18.0156C-0.546107 17.0029 -0.568776 15.9902 -0.592133 14.9468C-0.578401 10.3502 -0.556507 7.04279 2.40771 3.37402C5.66637 0.389741 7.07584 -0.123626 11.3545 -0.192871Z"
                    fill="black"
                  />
                  <g id="full_chai">
                    <g id="tea">
                      <path
                        id="Vector_2"
                        d="M42 10C45.3753 36.7513 45.3753 36.7513 46 50C40.4175 53.3258 36.5031 54.4645 30 54C29.34 52.35 28.68 50.7 28 49C27.34 49 26.68 49 26 49C25.505 47.845 25.01 46.69 24.5 45.5C23.0696 42.249 21.5397 39.0688 19.918 35.9102C19.5519 35.1947 19.1858 34.4793 18.8086 33.7422C18.0641 32.2947 17.3128 30.8506 16.5547 29.4102C15.6437 27.636 14.8145 25.8205 14 24C14.33 23.34 14.66 22.68 15 22C23.1016 20.1159 33.4139 19.3787 41 23C41 20.03 41 17.06 41 14C35.7191 11.3596 30.5345 13.354 25.25 15.0625C24.1414 15.4454 23.0328 15.8282 21.8906 16.2227C19 17 19 17 16 16C24.8571 12.2611 32.3339 9.87943 42 10Z"
                        fill="#E48B3B"
                      />
                      <path
                        id="Vector_3"
                        d="M40 12C42.3992 16.6485 42.1996 20.9108 42 26C41.34 25.01 40.68 24.02 40 23C33.6458 20.4583 24.4347 21.4313 17.8125 22.625C15 23 15 23 12 21C13.4858 17.2679 13.4858 17.2679 15.7524 16.0869C16.4452 15.8984 17.1379 15.7099 17.8516 15.5156C18.6211 15.3029 19.3907 15.0902 20.1836 14.8711C21.3921 14.5636 21.3921 14.5636 22.625 14.25C23.7987 13.9193 23.7987 13.9193 24.9961 13.582C30.1391 12.2088 34.6825 11.781 40 12Z"
                        fill="#140E08"
                      />
                      <path
                        id="Vector_4"
                        d="M42 36C42.8179 38.8956 43.1889 41.5546 43.25 44.5625C43.2758 45.3269 43.3016 46.0913 43.3281 46.8789C43 49 43 49 41.7773 50.7656C39.4775 52.3629 38.085 52.308 35.3125 52.1875C34.5043 52.1604 33.696 52.1334 32.8633 52.1055C32.2484 52.0707 31.6335 52.0359 31 52C30.1618 50.3775 29.3296 48.7519 28.5 47.125C28.0359 46.2201 27.5719 45.3152 27.0938 44.3828C26 42 26 42 26 40C27.98 40 29.96 40 32 40C32 40.66 32 41.32 32 42C32.66 42 33.32 42 34 42C34.33 41.01 34.66 40.02 35 39C39.3333 36 39.3333 36 42 36Z"
                        fill="#F98F30"
                      />
                      <path
                        id="Vector_5"
                        d="M28.9375 20.8125C30.1428 20.7983 31.348 20.7841 32.5898 20.7695C35.8602 20.9906 38.0682 21.5925 41 23C39.4127 24.8906 38.5255 25.9037 36.0547 26.3564C35.3354 26.3471 34.6161 26.3378 33.875 26.3281C33.0861 26.323 32.2972 26.3178 31.4844 26.3125C30.6645 26.2919 29.8447 26.2713 29 26.25C28.1802 26.2448 27.3603 26.2397 26.5156 26.2344C23.0302 26.1888 20.3365 26.1122 17 25C17.33 24.01 17.66 23.02 18 22C21.4575 20.5656 25.2482 20.8322 28.9375 20.8125Z"
                        fill="#FA7501"
                      />
                      <path
                        id="Vector_6"
                        d="M36.3125 11.9375C38.1378 11.9684 38.1378 11.9684 40 12C38.2839 15.4322 34.4692 15.8367 30.9922 17.0469C25.4091 18.8253 19.9088 20.3812 14 20C16.3283 16.5076 17.445 16.2043 21.3125 14.875C22.2574 14.5424 23.2023 14.2098 24.1758 13.8672C28.2748 12.6086 32.0217 11.8648 36.3125 11.9375Z"
                        fill="#0B0B0B"
                      />
                      <path
                        id="Vector_7"
                        d="M33 31C33.66 31 34.32 31 35 31C35 31.99 35 32.98 35 34C36.98 34 38.96 34 41 34C39.6106 37.4734 38.3875 38.5179 35 40C34.34 40.66 33.68 41.32 33 42C33 38.37 33 34.74 33 31Z"
                        fill="#A45D1E"
                      />
                    </g>
                    <g id="cup">
                      <path
                        id="Vector_8"
                        d="M14 22C17 23.0323 17 23.0323 18.3867 25.7702C18.816 26.8892 19.2452 28.0083 19.6875 29.1613C20.1245 30.2777 20.5615 31.3941 21.0117 32.5444C22 35.4194 22 35.4194 22 37.4839C22.99 37.8245 23.98 38.1652 25 38.5161C26.6055 41.254 26.6055 41.254 28.1875 44.6452C28.7173 45.7616 29.2471 46.878 29.793 48.0282C31 50.9032 31 50.9032 31 52.9677C32.98 52.9677 34.96 52.9677 37 52.9677C37 53.3084 37 53.649 37 54C34.36 54 31.72 54 29 54C28.67 52.6374 28.34 51.2748 28 49.871C27.34 49.871 26.68 49.871 26 49.871C25.505 48.6787 25.01 47.4865 24.5 46.2581C22.0861 40.6154 19.3757 35.1325 16.6426 29.6492C14 24.2864 14 24.2864 14 22Z"
                        fill="#695748"
                      />
                      <path
                        id="Vector_9"
                        d="M41.4871 9.68447C43.3277 18.7458 44.3421 27.3349 44.3183 36.5851C43.9773 36.5947 43.6364 36.6044 43.2851 36.6144C43.2137 35.9254 43.1424 35.2364 43.0688 34.5265C42.7417 31.4232 42.3996 28.3216 42.0571 25.2198C41.945 24.1351 41.8329 23.0505 41.7174 21.9329C41.6016 20.9025 41.4857 19.872 41.3663 18.8103C41.2634 17.8556 41.1605 16.9009 41.0545 15.9172C40.8133 14.8235 40.8133 14.8235 40.5672 13.7077C35.0362 11.2261 29.7359 13.3695 24.3244 15.2303C23.1898 15.645 22.0553 16.0598 20.8863 16.4871C17.9217 17.348 17.9217 17.348 14.7938 16.4375C23.7462 12.4857 31.5449 9.62342 41.4871 9.68447Z"
                        fill="#979797"
                      />
                      <path
                        id="Vector_10"
                        d="M41 13.9084C31.727 18.1765 23.0357 20.8188 13 22C13 20.4741 13 18.9483 13 17.3762C14.0662 17.3762 15.1323 17.3762 16.2308 17.3762C15.8754 17.7577 15.52 18.1391 15.1538 18.5322C22.064 17.9504 28.1363 16.0035 34.6941 13.6103C37.7692 12.7524 37.7692 12.7524 41 13.9084Z"
                        fill="#959595"
                      />
                      <path
                        id="Vector_11"
                        d="M13 21C16.2727 22.0476 16.2727 22.0476 17.4627 23.8643C17.8181 24.6355 18.1736 25.4067 18.5398 26.2013C18.9279 27.0392 19.316 27.8772 19.7159 28.7405C20.1097 29.6217 20.5034 30.5028 20.9091 31.4107C21.525 32.7264 21.525 32.7264 22.1534 34.0686C24.364 38.9192 24.364 38.9192 25 40.9048C24.64 41.5962 24.28 42.2876 23.9091 43C22.0836 39.7299 20.2682 36.4548 18.4545 33.1786C17.9342 32.2468 17.4139 31.315 16.8778 30.3549C16.3857 29.4636 15.8935 28.5723 15.3864 27.654C14.9293 26.8311 14.4723 26.0082 14.0014 25.1603C13 23.0952 13 23.0952 13 21Z"
                        fill="#888583"
                      />
                      <path
                        id="Vector_12"
                        d="M42 29.1308C42.3421 29.1159 42.6842 29.101 43.0367 29.0856C43.2297 30.072 43.4227 31.0585 43.6216 32.0748C44.2405 35.3813 44.2405 35.3813 45.0312 37.5975C45.7418 40.5845 45.5854 43.1843 45.4089 46.2484C45.3211 47.8718 45.3211 47.8718 45.2315 49.5279C45.1803 50.3498 45.1292 51.1717 45.0765 52.0184C44.3765 51.6872 43.6765 51.356 42.9553 51.0147C42.6401 43.7931 42.3248 36.5714 42 29.1308Z"
                        fill="#634A34"
                      />
                      <path
                        id="Vector_13"
                        d="M14.8004 16.1309C15.5673 16.5744 16.3341 17.0178 17.1242 17.4748C16.6833 17.7887 16.2424 18.1027 15.7882 18.4261C19.4115 18.8148 23.0348 19.2034 26.7678 19.6039C21.7781 21.2056 18.2761 21.4366 13 21.411C13.4643 17.0822 13.4643 17.0822 14.8004 16.1309Z"
                        fill="#AAAAAA"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3026_2">
                    <rect width="60" height="62" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* <img
            className="chaiAurCodeBtn"
              src={chaiAurCodeIcon}
              alt=""
              width={60}
              height={62}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://chaicode.com/",
                  "_blank",
                  "rel=noopener noreferrer"
                );
              }}
            /> */}
          </div>
        </div>
        <div className="row">
          <div
            className="d-flex justify-content-center dm-sans-text"
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              fontWeight: "bolder",
              fontSize: "8px",
            }}
          >
            &copy; chai aur code
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomUserCard;
