"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation/Nav";
import Products from "@/components/Products/Products";
import products from "@/components/db/data";
import Recommended from "@/components/Recommended/Recommended";
import Sidebar from "@/components/Sidebar/Sidebar";
import Card from "@/components/filter/Card";

export default function JobList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ type, company, jobTitle }) =>
          type === selected || company === selected || jobTitle === selected
      );
    }

    return filteredProducts.map(
      ({ companyImg, jobTitle, company, type, jobLink }) => (
        <Card
          key={Math.random()}
          img={companyImg}
          title={jobTitle}
          company={company}
          type={type}
          jobLink={jobLink}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      {/* <Recommended handleClick={handleClick} /> */}
      <Products result={result} />
    </>
  );
}
