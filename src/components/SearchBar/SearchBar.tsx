import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/currentCity";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    dispatch(setCurrentCity(inputValue));
  };
  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        id="city-search"
        className="searchbar"
        type="text"
        placeholder="Search for a city"
        required
        onChange={handleChange}
      ></input>
      <button className="search-button" type="submit">
        <img src="../images/search.png" alt="Submit search" />
      </button>
    </form>
  );
};

export default SearchBar;
