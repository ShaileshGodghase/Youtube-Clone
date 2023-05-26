import { BsSearch } from "react-icons/bs";
import "../Header/Header.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const handleClick = () => {
    if (searchInput !== "") navigate("/category/" + searchInput);
    setSearchInput("");
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          className="search"
          placeholder="Search"
          value={searchInput}
          type="text"
          onChange={inputChange}
        />
        <button className="search-btn" onClick={handleClick}>
          <BsSearch />
        </button>
      </form>
    </>
  );
}

export default Search;
