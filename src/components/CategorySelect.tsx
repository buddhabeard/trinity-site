import { useEffect, useState } from "react";

import Pill from "./Pill";
import type { Category, Categories } from "../interfaces/Categories";
import { getCategoryParam } from "../utils";

export type CategorySelectProps = {
  onClick: (arg: any) => void;
  clearFilter: boolean;
};

const fetchCategories = async () => {
  const res = await fetch(
    `https://trinity-cms.onrender.com/api/categories?populate[name][populate]=*`
  );
  const categories = res.json();
  return categories;
};

const CategorySelect = ({ onClick, clearFilter }: CategorySelectProps) => {
  const [categories, setCategories] = useState<Categories>([]);
  const [filterBy, setFilterBy] = useState<string>("");

  useEffect(() => {
    fetchCategories().then(({ data }) => setCategories(data));
  }, []);

  useEffect(() => {
    const catP = getCategoryParam();
    if (catP) setFilterBy(catP);
  }, [categories]);

  useEffect(() => {
    if (clearFilter) setFilterBy("");
  }, [clearFilter]);

  const handleCategoryClick = (category: Category) => {
    setFilterBy(category.attributes.name);
    onClick(category.attributes.name);
  };

  const isActive = (name: string) => filterBy === name;

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start mb-8 lg:mb-16">
      {categories.map((cat: Category) => (
        <Pill
          key={cat.attributes.name}
          onClick={() => handleCategoryClick(cat)}
          color={isActive(cat.attributes.name) ? "white" : "dark blue"}
          bg={isActive(cat.attributes.name) ? "teal" : "white"}
          classes="mr-4 mb-4 drop-shadow"
        >
          {/* @ts-ignore */}
          {cat.attributes.name}
        </Pill>
      ))}
    </div>
  );
};

export default CategorySelect;
