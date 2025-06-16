// app/notes/page.tsx

// 1. Імпортуємо функцію
import { getNotes } from "@/lib/api";

// 2. Робимо фукнцію асинхронною
export default async function Notes() {
  // 3. Виконуємо запит
  const notes = await getNotes();
  console.log("notes", notes);

  return <div>Notes page</div>;
}
