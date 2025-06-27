//app\about\@columnC\page.tsx

"use client";

import { useState, useEffect } from "react";

async function getColumnCData() {
  // Симуляція API-запиту
  const data = {
    content: `Column C: Updated at ${new Date().toLocaleTimeString()}`,
  };
  return data;
}

export default function ColumnC() {
  const [data, setData] = useState({ content: "Loading..." });

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getColumnCData();
      setData(newData);
    };

    fetchData(); // Початковий запит
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // Очищення при демонтажі
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-semibold">Column C 5s</h2>
      <p>{data.content}</p>
    </div>
  );
}
