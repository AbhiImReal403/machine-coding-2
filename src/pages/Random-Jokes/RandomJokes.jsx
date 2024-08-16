// import React from 'react'

import { RandomJokeCard } from "../../components";

import chaiAurCode from "../../assets/icons/chai_aur_code.svg";

function RandomJokes() {
  return (
    <>
      <div className="random-jokes-container d-flex align-items-center justify-content-center">
        <div className="content text-center">
          <RandomJokeCard></RandomJokeCard>
        </div>

        <div className="position-fixed bottom-0 end-0 mb-3 me-3 z-">
          <img
            src={chaiAurCode}
            width={77}
            height={80}
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.open(
                "https://chaicode.com/",
                "_blank",
                "rel=noopener noreferrer"
              );
            }}
          />
        </div>
      </div>
    </>
  );
}

export default RandomJokes;
