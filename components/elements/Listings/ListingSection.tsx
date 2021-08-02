import React from "react";
import ListingBody from "./ListingBody";
import {ListingHeading} from "./ListingHeading";

export const ListingSection = () => {
  return (
    <section id="listings">
      <div className="container">
        <ListingHeading />
        <ListingBody />
      </div>
    </section>
  );
};
