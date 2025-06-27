//app\about\@columnA\page.tsx
"use client";

import { useState, useEffect } from "react";

async function getColumnAData() {
  // Симуляція API-запиту
  const data = {
    content: `Column A: Updated at ${new Date().toLocaleTimeString()}`,
  };
  return data;
}

export default function ColumnA() {
  const [data, setData] = useState({ content: "Loading..." });

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getColumnAData();
      setData(newData);
    };

    fetchData(); // Початковий запит
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval); // Очищення при демонтажі
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-semibold">Column A 1s</h2>
      <p>{data.content}</p>
    </div>
  );
}
