"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation/Nav";
import Products from "@/components/Products/Products";
import courses from "@/components/db/courseData";
import Sidebar from "@/components/CourseSidebar/Sidebar";
import Card from "@/components/filter/Card";
import AccordSidebar from "@/components/CourseSidebar/AccordSidebar";

export default function Course() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = courses.filter(
    (product) =>
      product.CourseTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(courses, selected, query) {
    let filteredProducts = courses;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ CourseTitle }) => CourseTitle === selected
      );
    }

    return filteredProducts.map(({ Img, CourseTitle, jobLink }) => (
      <Card
        key={Math.random()}
        img={Img}
        title={CourseTitle}
        jobLink={jobLink}
        show={false}
      />
    ));
  }

  const result = filteredData(courses, selectedCategory, query);

  return (
    <>
      <AccordSidebar handleChange={handleChange} />

      <div>
        <div className="hidden lg:flex">
          <Sidebar handleChange={handleChange} />
        </div>
        <Navigation
          query={query}
          handleInputChange={handleInputChange}
          placeholder={"Search your Course here ...."}
        />
        {/* <Recommended handleClick={handleClick} /> */}
        <Products result={result} />
      </div>
    </>
  );
}
