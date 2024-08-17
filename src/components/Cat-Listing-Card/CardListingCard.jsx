/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const CardListingCard = forwardRef(({ catDt }, ref) => {
  const { image, name, description, origin } = catDt;

  return (
    <>
      <div className="card cat-card" style={{ width: "18rem" }} ref={ref}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>

        <div className="d-flex justify-content-between px-5">
          <div>Origin</div>
          <div>{origin}</div>
        </div>
      </div>
    </>
  );
});

// Optionally, set a displayName for better debugging
CardListingCard.displayName = "CardListingCard";

export default CardListingCard;
