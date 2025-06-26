// app/not-found.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Редірект через 3 секунди
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вас буде перенаправлено на головну через кілька секунд…</p>
    </div>
  );
};

export default NotFound;

// корисні методи router:
// router.push('/url') – перехід на нову сторінку (додає в історію).
// router.replace('/url') – перехід із заміною поточної сторінки (історія не зберігається).
// router.back() – повернення на попередню сторінку.
// router.forward() – перехід уперед по історії (використовується рідко).

// () в назві папки = групування
// Назви папок (public, private, admin, auth) існують лише в структурі проєкту.
