import React from "react";
import classes from "./SearchBox.module.css";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = (props) => {
  const [keyword, setKeyword] = React.useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
    props.onChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search by component name"
        onChange={handleChange}
        className={classes.body}
        value={keyword}
      />
      <button type="submit" value="Submit" className={classes.searchBtn}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;
