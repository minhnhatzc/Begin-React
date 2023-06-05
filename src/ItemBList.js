import React, { useState, useEffect } from "react";
export default function ItemBList() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
