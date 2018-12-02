import React from "react";

const Search = props => {
  return (
    <React.Fragment>
      <h3>Search here....</h3>
      <form>
        <input type="text" placeholder={"search for..."} />
        <button>Search</button>
      </form>
    </React.Fragment>
  );
};

export default Search;
