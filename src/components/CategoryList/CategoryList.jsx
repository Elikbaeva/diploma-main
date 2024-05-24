import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddCategory from "../AddCategory/AddCategory";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => {
    if (category.name === 'all') {
      return (
        <li className="all" key={category.id}>
          <NavLink to={`/categories/${category.slug}`}>
            {category.name}
          </NavLink>
          <DeleteCategory category={category} />
        </li>
      );
    } else {
      return (
        <li key={category.id}>
          <NavLink to={`/categories/${category.slug}`}>
            {category.name}
          </NavLink>
          <DeleteCategory category={category} />
        </li>
      );
    }
  });

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}
