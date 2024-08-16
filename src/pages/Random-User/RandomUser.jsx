/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { RandomUserCard, UserCardSkeleton } from "../../components";
import useAxios from "../../services/api";
import { getFullName } from "../../utils/helper";
import moment from "moment";

function RandomUser() {
  const axiosInstance = useAxios();

  const api_endpoint = "/randomusers/user/random";

  const [needReload, setReload] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Create an AbortController instance
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Perform the API call with the AbortSignal
        const response = await axiosInstance.get(api_endpoint, {
          signal, // Attach the signal to the request
        });

        // Update state with the fetched data
        // console.log(response);

        formatUserData(response.data.data);
      } catch (err) {
        // Handle any errors that occur
        console.error(err, "Error form Random User fetch");
      } finally {
        // Update loading state

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchData();

    // Optionally, return a cleanup function if necessary
    return () => {
      controller.abort();
    };
  }, [needReload]);

  const formatUserData = (data) => {
    if (!data) return;

    const resultData = {
      title: data?.name?.title || "",
      fullName:
        data?.name?.first && data?.name?.last
          ? getFullName({ fname: data.name.first, lname: data.name.last })
          : "",
      username: data?.login?.username || "",
      city: data?.location?.city || "",
      timezone_offset: data?.location?.timezone?.offset || "",
      timezone_desc: data?.location?.timezone?.description
        ? data.location.timezone.description.split(", ").pop()
        : "",
      nat: data?.nat || "",
      dob: data?.dob?.date ? moment(data.dob.date).format("DD MMMM, YYYY") : "",
      picture: data?.picture?.large || null,
      registered: data?.registered?.date
        ? moment(data.registered.date).format("DD MMMM, YYYY")
        : null,
      phone: data?.phone || "",
      latitude: data?.location?.coordinates?.latitude || null,
      longitude: data?.location?.coordinates?.longitude || null,
    };

    setUserData(resultData);
  };

  const handleRefresh = () => {
    !isLoading && setReload(!needReload);
  };
  return (
    <>
      <div className="random-user-container d-flex align-items-center justify-content-center">
        <div className="content text-center">
          {isLoading ? (
            <UserCardSkeleton />
          ) : (
            <RandomUserCard
              userData={userData}
              onRefreshData={handleRefresh}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default RandomUser;
