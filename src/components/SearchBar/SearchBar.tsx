import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/currentCity";
import { useState } from "react";
import "./SearchBar.css";
import { useGetCitySuggestions } from "../../hooks/useGetCitySuggestions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const { data: suggestionsData = [] } = useGetCitySuggestions(inputValue);

  const handleSelect = (name: string, lat: number, lon: number) => {
    setInputValue(name);
    setSuggestionsOpen(false);
    dispatch(setCurrentCity({ lat, lon }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSuggestionsOpen(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (suggestionsData.includes(inputValue.toLowerCase())) {
      dispatch(setCurrentCity(inputValue));
    }
  };

  return (
    <form className="search-container" onSubmit={(e) => handleSearch(e)}>
      <input
        id="city-search"
        value={inputValue}
        className="searchbar"
        type="text"
        placeholder="Search for a city"
        required
        onChange={handleChange}
        autoComplete="off"
      />{" "}
      {suggestionsOpen && suggestionsData.length > 0 ? (
        <ul className="suggestions-list">
          {suggestionsData.map(
            (item: {
              name: string;
              state: string;
              country: string;
              lat: number;
              lon: number;
            }) => (
              <li
                onClick={() => handleSelect(item.name, item.lat, item.lon)}
                key={(item.lat, item.lon)}
              >
                {item.name}, {item.state && item.state + ", "} {item.country}
              </li>
            )
          )}
        </ul>
      ) : null}
      <button className="search-button" type="submit">
        <img
          src="../images/search.png"
          alt="search button icon"
          aria-label="Search for a city"
        />
      </button>
    </form>
  );
};

export default SearchBar;
