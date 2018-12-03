import React from "react";

import "./search.css";

const Search = props => {
  return (
    <React.Fragment>
        <input
          className="search-box"
          type="text"
          placeholder={"search for..."}
          onChange={event => props.updateSearchQuery(event.target.value)}
          onKeyPress={props.enterPressed.bind(this)}
        />
        <button onClick={props.getAssets}>
          <i class="fa fa-search" />
        </button>
    </React.Fragment>
  );
};

export default Search;
