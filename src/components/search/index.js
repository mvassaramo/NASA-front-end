import React from "react";

const Search = props => {
  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder={"search for..."}
          onChange={event => props.updateSearchQuery(event.target.value)}
        />
      </form>
      <button onClick={props.getAssets}>Search</button>
    </React.Fragment>
  );
};

export default Search;
