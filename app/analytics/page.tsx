import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Analytics" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
      </main>
    </div>
  );
}
