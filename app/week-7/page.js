"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";   

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [nextId, setNextId] = useState(itemsData.length + 1); // simple incremental ID

  const handleAddItem = (item) => {
    const newItem = {
      ...item,
      id: nextId, // line-wise ID
    };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  return (
    <main className="bg-pink-200 min-h-screen">
      <div className="text-center p-20">
        <h1 className="font-bold font-serif text-3xl">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}