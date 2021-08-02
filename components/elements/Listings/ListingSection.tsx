import React from "react";
import ListingBody from "./ListingBody";
import {ListingHeading} from "./ListingHeading";

interface Props {}

export const ListingSection = (props: Props) => {
  return (
    <section id="listings">
      <div className="container">
        <ListingHeading />
        <ListingBody />
      </div>
    </section>
  );
};
