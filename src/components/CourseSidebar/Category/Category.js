import "./Category.css";
import Input from "@/components/filter/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Select course</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="C++ Fundamentals"
          title="C++ Fundamentals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Data Structures"
          title="Data Structures"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Algorithms"
          title="Algorithms"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="SQL"
          title="SQL"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
