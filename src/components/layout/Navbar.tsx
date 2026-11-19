import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <a
          href="#inicio"
          className="flex items-center gap-2 font-bold text-lg tracking-tight text-white"
        >
          <span className="p-1.5 rounded-lg bg-[#4169e1]/20 text-[#4169e1]">
            <Terminal size={20} />
          </span>
          <span>
            gabriel<span className="text-[#4169e1]">.dev</span>
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-[#4169e1] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-4 py-2 rounded-lg bg-[#4169e1] hover:bg-[#3557c0] text-white text-sm font-semibold transition-colors"
          >
            Fale Comigo
          </a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-900 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Dropdown Mobile Animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-[#4169e1] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}