import ListingBody from "./ListingBody";
import {ListingHeading} from "./ListingHeading";

export const ListingSection = () => {
  return (
    <section id="listings" className="pb-4">
      <div className="container">
        <ListingHeading />
        <ListingBody />
      </div>
    </section>
  );
};
