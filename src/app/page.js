import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-[url('/background.png')] bg-no-repeat bg-right-top">
      <header className="w-full">
        <Navbar />
      </header>
    </main>
  );
}
