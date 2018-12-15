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
        <div>
          <input type="checkbox" id="images" name="images"/><label for="images">Images</label>
          <input type="checkbox" id="videos" name="videos"/><label for="videos">Videos</label>

        </div>
    </React.Fragment>
  );
};

export default Search;
