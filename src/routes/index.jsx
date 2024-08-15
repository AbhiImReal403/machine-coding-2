import { redirect } from "react-router-dom";
import { RandomUser, RandomJokes, CatsListing, PageNotFound } from "../pages";
import { GodMode, PublicLayout } from "../layouts";

export default [
  {
    path: "/gods-mode",
    Component: GodMode,
    errorElement: PageNotFound,
    children: [
      {
        index: true,
        Component: RandomUser,
      },
      {
        path: "random-user",
        Component: RandomUser,
      },
      {
        path: "random-jokes",
        Component: RandomJokes,
      },
      {
        path: "cats-listing",
        Component: CatsListing,
      },

      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
  {
    path: "/",
    Component: PublicLayout,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        loader: () => redirect("random-user"),
      },
      {
        path: "random-user",
        Component: RandomUser,
      },
      {
        path: "random-jokes",
        Component: RandomJokes,
      },
      {
        path: "cats-listing",
        Component: CatsListing,
      },

      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
];
