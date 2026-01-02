import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <section className="my-5 flex-box flex-col sm:flex-row gap-3">
      <h2>All Offers from McDonald’s East London</h2>
      <form className="flex-box relative rounded-3xl gap-x-1.5 p-2.5 border ">
        <FaSearch />
        <input type="search" placeholder="Search from menu..." />
      </form>
    </section>
  );
};

export default Search;
