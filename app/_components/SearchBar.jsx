"use client";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState();
  return (
    <>
      <p>{search}</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
