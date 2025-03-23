import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/currentCity";
import { useState } from "react";
import "./SearchBar.css";
import { useGetCitySuggestions } from "../../hooks/useGetCitySuggestions";
import { Suggestion } from "../../types/global";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const { data: suggestionsData = [] } = useGetCitySuggestions(inputValue);

  const handleSelect = (lat: number, lon: number) => {
    setSuggestionsOpen(false);
    dispatch(setCurrentCity({ lat, lon }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSuggestionsOpen(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let suggestionsMatch = suggestionsData.find((suggestion: Suggestion) => {
      const fullName =
        `${suggestion.name}, ` +
        (suggestion.state ? `${suggestion.state}, ` : "") +
        `${suggestion.country}`;
      return fullName.toLowerCase() === inputValue.toLowerCase();
    });

    if (suggestionsMatch) {
      dispatch(setCurrentCity(suggestionsMatch));
    }
  };

  return (
    <form className="search-container" onSubmit={(e) => handleSearch(e)}>
      <input
        id="city-search"
        value={inputValue}
        className="searchbar"
        type="text"
        placeholder="Type a city name and choose from the list"
        required
        onChange={handleChange}
        autoComplete="off"
      />{" "}
      {suggestionsOpen && suggestionsData.length > 0 ? (
        <ul className="suggestions-list" role="listbox">
          {suggestionsData.map((item: Suggestion) => (
            <li role="option" key={(item.lat, item.lon)}>
              <button onClick={() => handleSelect(item.lat, item.lon)}>
                {item.name}, {item.state && item.state + ", "} {item.country}
              </button>
            </li>
          ))}
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
