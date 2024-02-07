import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { FilterCard } from "../filter/FilterCard";

const Nav = ({ handleInputChange, query, handleChange }) => {
  return (
    <div className="nav">
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Search your job here...."
      />
      <div className="md:hidden absolute right-14">
        <FilterCard handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Nav;
