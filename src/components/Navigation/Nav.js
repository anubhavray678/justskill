import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <div className="nav">
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Search your job here...."
      />
    </div>
  );
};

export default Nav;
