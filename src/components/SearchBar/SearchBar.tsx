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
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a city"
        onChange={handleChange}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
