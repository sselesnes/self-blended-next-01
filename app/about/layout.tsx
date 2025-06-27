// app\about\layout.tsx

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
          {columnA}
          {columnB}
          {columnC}
        </div>
      </section>
    </div>
  );
}
