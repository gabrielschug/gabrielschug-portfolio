import ScrollProgress from "./components/layout/ScrollProgress";
import Navbar  from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-[#4169e1] selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;