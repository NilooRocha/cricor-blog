import Blog from "./Blog";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Page() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full">
        <header className="bg-slate-100 flex-none h-[35%] md:h-full md:w-[30%] md:sticky md:top-0 md:flex md:justify-center md:items-center">
          <Header />
        </header>
        <div className="flex flex-col flex-1">
          <main className="flex-1 overflow-auto p-4">
            <Blog />
          </main>
          <footer className="w-full flex-none">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
