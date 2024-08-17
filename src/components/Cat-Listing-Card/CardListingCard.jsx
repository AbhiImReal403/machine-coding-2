/* eslint-disable react/prop-types */
import { forwardRef, useState } from "react";

import catError from "../../assets/images/cat_404.svg";

const CardListingCard = forwardRef(({ catDt }, ref) => {
  const {
    image,
    name,
    description,
    origin,
    temperament,
    life_span,
    wikipedia_url,
  } = catDt;

  const temper = (temperament || "").trim().split(",");

  const [isExpanded, setReadMore] = useState(false);

  const handleExpand = () => {
    setReadMore(!isExpanded);
  };

  return (
    <>
      <div
        className={`card cat-card ${isExpanded ? "expandCard" : ""}`}
        ref={ref}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          onError={(e) => (e.target.src = catError)}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <div className="cat_desc">
            <p
              className={`card-text ${!isExpanded ? "isHidden" : "isShown"} ${
                !isExpanded && description.length > 150 ? "doBlurText" : ""
              }`}
            >
              {description}
            </p>
            {description.length > 150 ? (
              <div
                className={`${!isExpanded ? "read-more" : "read-less"} ${
                  description.length > 100 ? "" : "hidden"
                }`}
                onClick={() => handleExpand()}
              >
                {isExpanded ? "read less" : "read more"}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="d-flex gap-5 mb-1">
            <div
              className="fst-italic fw-bolder dm-sans-text"
              style={{
                fontSize: "14px",
                color: "black",
                letterSpacing: "0.004rem",
              }}
            >
              Origin
            </div>
            <div
              className="fw-normal dm-sans-text"
              style={{
                fontSize: "14px",
                color: "black",
                letterSpacing: "0.004rem",
              }}
            >
              {origin}
            </div>
          </div>
          <div className="mb-1 d-flex flex-column gap-1">
            <div
              className="fst-italic fw-bolder dm-sans-text"
              style={{
                fontSize: "14px",
                color: "black",
                letterSpacing: "0.004rem",
              }}
            >
              Temperament
            </div>
            <div className="cat_Temp">
              {temper &&
                temper.length > 0 &&
                temper.map((temp) => (
                  <div className="cattery" key={temp}>
                    {temp}
                  </div>
                ))}
            </div>
          </div>
          <div className="d-flex gap-5 mb-1">
            <div
              className="fst-italic fw-bolder dm-sans-text"
              style={{
                fontSize: "14px",
                color: "black",
                letterSpacing: "0.004rem",
              }}
            >
              Life Span
            </div>
            <div
              className="fw-normal dm-sans-text"
              style={{
                fontSize: "14px",
                color: "black",
                letterSpacing: "0.004rem",
              }}
            >
              {origin}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

// Optionally, set a displayName for better debugging
CardListingCard.displayName = "CardListingCard";

export default CardListingCard;
