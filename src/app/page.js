import Info from "@/components/info";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 max-lg:px-10 max-md:px-4 bg-[url('/background.png')] bg-no-repeat bg-right-top">
      <header className="w-full">
        <Navbar />
        <Info />
      </header>
    </main>
  );
}
