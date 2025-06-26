// app/notes/[...slug]/page.tsx

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesExtraPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <h1>Notes slug page</h1>
      <p>Current path: / {slug.join(" / ") || "home"} </p>
    </div>
  );
}
