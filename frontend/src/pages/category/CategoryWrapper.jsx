import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ name, href, background, color }) {
  const style = {
    background: background,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-8 ">
      <CategoryItem
        name="entress"
        href="/categories/entress"
        background="#f0f5c4"
        color="#59871f"
      />
      <CategoryItem
        name="breakfast"
        href="/categories/breakfast"
        background="#efedfa"
        color="#3c38af"
      />
      <CategoryItem
        name="lunch"
        href="/categories/lunch"
        background="#e5f7f3"
        color="#1f8787"
      />
      <CategoryItem
        name="dinner"
        href="/categories/dinner"
        background="#efedfa"
        color="#3c38af"
      />
      <CategoryItem
        name="drinks"
        href="/categories/drinks"
        background="#e5f7f3"
        color="#1f8787"
      />
    </div>
  );
}

const CategoryWrapper = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};

export default CategoryWrapper;
