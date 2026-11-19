import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 flex items-center max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Coluna Visual (aparece primeiro no mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow de fundo */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#4169e1] to-orange-500/40 blur-2xl opacity-30" />
            <img
              src="perfil.jpg" /* Ajuste para o caminho da sua foto atual */
              alt="Gabriel Schug"
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-[#4169e1]/60 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Coluna de Texto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 md:order-1 text-center md:text-left"
        >
          {/* Badge de status */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4169e1]/15 border border-[#4169e1]/30 text-[#4169e1] text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para oportunidades em TI
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4"
          >
            Olá, eu sou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4169e1] to-blue-400">
              Gabriel Schug
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-slate-300 mb-4"
          >
            Desenvolvedor Full-Stack & Back-End | Análise de Dados
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8"
          >
            Construo APIs escaláveis, aplicações web/mobile modernas e pipelines de
            automação orientados a dados para resolver problemas reais de negócio.
          </motion.p>

          {/* CTAs Mobile-First (empilhados no mobile, lado a lado no desktop) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8"
          >
            <a
              href="#projetos"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#4169e1] hover:bg-[#3557c0] text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#4169e1]/25"
            >
              Ver Projetos <ArrowRight size={18} />
            </a>

            <a
              href="/curriculo-gabriel-schug.pdf" /* Ajuste para o caminho do seu PDF */
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <FileText size={18} /> Baixar Currículo
            </a>
          </motion.div>

          {/* Links Sociais */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center md:justify-start gap-4 text-slate-400"
          >
            <a
              href="https://github.com/gabrielschug"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#4169e1] hover:text-white transition-colors"
            >
            </a>
            <a
              href="https://linkedin.com/in/gabrielschug"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#4169e1] hover:text-white transition-colors"
            >
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}