import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./btn.css";

// import pinMap from "../../assets/icons/pinMap.svg";
import viewList from "../../assets/icons/view-list.svg";
import fileEarmarkPerson from "../../assets/icons/file-earmark-person.svg";
import twitter from "../../assets/icons/twitter.svg";
import cat from "../../assets/icons/cat-silhouette-vector.svg";

function FloatingRoutes() {
  const [toggle, setToggle] = useState(false);

  const routes = [
    {
      route: "Random User",
      path: "random-user",
      icon: fileEarmarkPerson,
    },
    {
      route: "Random Jokes",
      path: "random-jokes",
      icon: twitter,
    },
    {
      route: "Cats listing",
      path: "cats-listing",
      icon: cat,
    },
  ];

  return (
    <>
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className={`btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center ${
            toggle ? "show" : ""
          }`}
          id="bd-theme"
          type="button"
          aria-expanded={`${toggle}`}
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (light)"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img
            src={viewList}
            alt="routes"
            style={{ width: "1.5rem", height: "1.5rem", color: "red" }}
          />
          {/* <svg
            className="bi my-1 theme-icon-active"
            width="1em"
            height="1em"
          ></svg> */}
          <span className="visually-hidden" id="bd-theme-text">
            Routes
          </span>
        </button>
        <ul
          className={`dropdown-menu dropdown-menu-end shadow ${
            toggle ? "show" : ""
          }`}
          aria-labelledby="bd-theme-text"
          style={
            toggle
              ? {
                  position: "absolute",
                  inset: "auto 0px 0px auto",
                  margin: "0px",
                  transform: "translate3d(0.571429px, -42.8571px, 0px)",
                }
              : {}
          }
        >
          {routes.map((route) => {
            const { route: rt, path, icon } = route;

            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `dropdown-item d-flex align-items-center ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-pressed={(isActive) => isActive}
                >
                  <img
                    src={icon}
                    alt="routes"
                    className="me-3 opacity-50"
                    style={{ width: "1.5rem", height: "1.5rem", color: "red" }}
                  />
                  {rt}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FloatingRoutes;
