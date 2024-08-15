// import React from 'react'

import {RandomUserCard} from "../../components";

function RandomUser() {
  return (
    <>
      <div className="random-user-container d-flex align-items-center justify-content-center">
        <div className="content text-center">
          <RandomUserCard />
        </div>
      </div>
    </>
  );
}

export default RandomUser;
