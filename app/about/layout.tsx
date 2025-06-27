// app\about\layout.tsx

import { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  columnA: React.ReactNode;
  columnB: React.ReactNode;
  columnC: React.ReactNode;
};

export default async function AboutLayout({
  children,
  columnA,
  columnB,
  columnC,
}: Props) {
  return (
    <div>
      <section>
        {children}
        <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
          <Suspense fallback={<div>Завантаження колонки A...</div>}>
            {columnA}
          </Suspense>
          <Suspense fallback={<div>Завантаження колонки B...</div>}>
            {columnB}
          </Suspense>
          <Suspense fallback={<div>Завантаження колонки C...</div>}>
            {columnC}
          </Suspense>
        </div>
      </section>
    </div>
  );
}
