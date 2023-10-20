import searchIcon from "../assets/Frame.png";

const SearchBar = () => {
  return (
    <form className="searchBar">
        <button type="submit" id="">
          <img src={searchIcon} alt="" />
        </button>
        <input
          type="search"
          placeholder="Search topics and reviews"
          name=""
          id=""
        />
      </form>
  )
}

export default SearchBar
