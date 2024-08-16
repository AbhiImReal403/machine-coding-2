// import React from 'react'

import { RandomJokeCard } from "../../components";

import chaiAurCode from "../../assets/icons/chai_aur_code.svg";
import useAxios from "../../services/api";
import { useEffect, useState } from "react";
import { randomInsightGen } from "../../utils/helper";

function RandomJokes() {
  const axiosInstance = useAxios();

  const api_endpoint = "/randomjokes/joke/random";

  const [isLoading, setLoading] = useState(true);
  const [jokeData, setJoke] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchJoke = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(api_endpoint, {
          signal,
        });

        // console.log(response.data.data);

        setJoke({ joke: response.data.data.content, ...randomInsightGen() });
      } catch (err) {
        console.error(err, "Error form Random User fetch");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchJoke();

    // Optionally, return a cleanup function if necessary
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="random-jokes-container d-flex align-items-center justify-content-center">
        <div className="content text-center">
          <RandomJokeCard jokeData={jokeData} isLoading={isLoading}></RandomJokeCard>
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
