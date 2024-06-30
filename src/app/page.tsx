import { database } from "@/db/database";

export default async function Home() {
  const allItems = await database.query.items.findMany();

  return (
    <main className="container mx-auto py-12 space-y-8">
      <h2 className="text-2xl font-bold">Items For Sale</h2>
      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <div key={item.id} className="border p-8 rounded-xl">
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}
