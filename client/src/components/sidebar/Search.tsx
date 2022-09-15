import { Link } from "react-router-dom";

// Icons
import searchGreen from "../../assets/icons/search_green.svg";

const Search = () => {
  return (
    <Link to="/sidebar" className="search-wrapper">
      <div className="search-img">
        <img src={searchGreen} alt="search" />
      </div>
      <h3 className="search-text">search</h3>
    </Link>
  );
};

export default Search;
