//app\about\@columnB\page.tsx

"use client";

import { useState, useEffect } from "react";

async function getColumnBData() {
  // Симуляція API-запиту
  const data = {
    content: `Column B: Updated at ${new Date().toLocaleTimeString()}`,
  };
  return data;
}

export default function ColumnB() {
  const [data, setData] = useState({ content: "Loading..." });

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getColumnBData();
      setData(newData);
    };

    fetchData(); // Початковий запит
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval); // Очищення при демонтажі
  }, []);

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-semibold">Column B 3s</h2>
      <p>{data.content}</p>
    </div>
  );
}
