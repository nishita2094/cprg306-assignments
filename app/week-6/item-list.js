"use client"

import React, { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  let itemsArray = itemsData.map((item) => ({ ...item }));

  if (sortBy === "id") {
    itemsArray.sort((a, b) => a.id - b.id);
  } else {
    itemsArray.sort((a, b) => {
      const aText = String(a[sortBy]).toUpperCase();
      const bText = String(b[sortBy]).toUpperCase();

      if (aText > bText) return 1;
      if (aText < bText) return -1;
      return 0;
    });
  }

  return (
    <main>
      <section className="flex-1 my-5">
        <label className="mr-2">Sort By:</label>
        <select
          onChange={handleSortByChange}
          className="py-2 px-3 border rounded bg-indigo-950 text-white text-center"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="id">ID</option>
        </select>
      </section>

      <section className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {itemsArray.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
