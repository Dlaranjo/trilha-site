import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  BookOpen, 
  Code2, 
  Database,
  GraduationCap, 
  Layout, 
  Terminal,
  ChevronDown,
  CheckCircle2,
  Menu,
  X,
  LineChart,
  Settings,
  TrendingUp
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <LineChart className="h-8 w-8 text-primary-orange" />
            <span className="ml-2 text-xl font-bold font-poppins bg-gradient-to-r from-primary-orange to-[#FF8B60] bg-clip-text text-transparent">Power BI MasterClass</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="nav-link">Visão Geral</a>
            <a href="#path" className="nav-link">Trilha de Aprendizado</a>
            <a href="#prerequisites" className="nav-link">Pré-requisitos</a>
            <a href="#modules" className="nav-link">Módulos</a>
            <a href="#instructor" className="nav-link">Instrutor</a>
            <a href="https://github.com/Dlaranjo/trilha-pbi" target="_blank" rel="noopener noreferrer">
              <button className="button-primary">
                Começar Agora
              </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#overview" className="block px-3 py-2 text-primary-black hover:text-primary-orange">Visão Geral</a>
            <a href="#path" className="block px-3 py-2 text-primary-black hover:text-primary-orange">Trilha de Aprendizado</a>
            <a href="#prerequisites" className="block px-3 py-2 text-primary-black hover:text-primary-orange">Pré-requisitos</a>
            <a href="#modules" className="block px-3 py-2 text-primary-black hover:text-primary-orange">Módulos</a>
            <a href="#instructor" className="block px-3 py-2 text-primary-black hover:text-primary-orange">Instrutor</a>
            <a href="https://github.com/Dlaranjo/trilha-pbi" target="_blank" rel="noopener noreferrer">
              <button className="button-primary w-full mt-4">
                Começar Agora
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modules = [
    {
      title: "Personalização Avançada de Temas",
      description: "Domine a criação e implementação de temas personalizados usando JSON no Power BI.",
      duration: "2 horas",
      topics: ["Estrutura JSON de Temas", "Documentação da Estrutura", "Implementando Temas"]
    },
    {
      title: "SVG no Power BI",
      description: "Aprenda a criar e implementar SVGs para visualizações no Power BI.",
      duration: "2 horas",
      topics: ["Criação de SVGs", "Animações em SVGs", "Ícones Personalizados", "Visualizações Customizadas"]
    },
    {
      title: "Parâmetros e Visualizações Dinâmicas",
      description: "Explore o uso avançado de parâmetros para gerar flexibilidade em seus relatórios.",
      duration: "1 hora",
      topics: ["Parâmetros Avançados", "Visualizações Dinâmicas", "Relacionamentos Entre Parâmetros"]
    },
    {
      title: "Grupos de Cálculo",
      description: "Aprenda a criar e usar grupos de cálculo de maneira eficientes no Power BI.",
      duration: "1 hora",
      topics: ["Fundamentos em Grupos de Cálculo", "Implementação Prática", "Casos de Uso"]
    },
    {
      title: "Engenharia de Dados com Airflow",
      description: "Conheça um caso prático de aplicação do Apache Airflow e do Apache Spark em uma arquitetura de ETL robusta.",
      duration: "2 horas",
      topics: ["Arquitetura de Processos ETL", "Pipelines de Dados", "Apache Airflow", "Apache Spark"]
    }
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;

    const formData = {
      from_name: form.from_name.value,
      reply_to: form.reply_to.value,
      message: form.message.value,
    };

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setFormStatus({ type: "success", message: "Mensagem enviada com sucesso!" });
        form.reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error); // Exibe o erro no console
        setFormStatus({ type: "error", message: "Erro ao enviar a mensagem." });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Seção Hero */}
      <section className="pt-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6"
            >
              Domine o Power BI e Conheça a Engenharia de Dados
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              Trilha avançada para dominar visualização de dados e conhecer a engenharia de dados na prática
            </motion.p>
            <a href="https://github.com/Dlaranjo/trilha-pbi" target="_blank" rel="noopener noreferrer">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="button-primary text-lg mt-4"
              >
                Comece a Aprender Agora
              </motion.button>
            </a>
          </div>
        </div>
        <div className="h-20 bg-gradient-to-b from-primary-black to-white/0"></div>
      </section>

      {/* Visão Geral do Curso */}
      <section id="overview" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Visão Geral do Curso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <Settings className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Personalização Avançada</h3>
                <p className="text-gray-600">Aprenda a tornar a ferramenta do Power BI ainda mais flexivel para o processo de geração de valor</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <TrendingUp className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Aumento de Produtividade</h3>
                <p className="text-gray-600">Domine as funcionalidades avançadas do Power BI e maximize sua produtividade com técnicas eficientes e práticas</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <Database className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Engenharia de Dados</h3>
                <p className="text-gray-600">Entenda como a Engenharia de Dados pode ser aplicada na prática para resolver desafios complexos de análise de dados</p>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trilha de Aprendizado */}
      <section id="path" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Trilha de Aprendizado</h2>
            <div className="relative">
              {modules.map((module, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start mb-12">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-orange text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8">
                    <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-2">{module.description}</p>
                    <p className="text-sm text-primary-orange font-semibold">Duração: {module.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pré-requisitos */}
      <section id="prerequisites" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Pré-requisitos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Conhecimentos em Power BI</h3>
                  <p className="text-gray-600">Conhecimento básico dos recursos no Power BI</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">DAX Básico</h3>
                  <p className="text-gray-600">Familiaridade com fórmulas e cálculos DAX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">JSON</h3>
                  <p className="text-gray-600">Compreensão básica da estrutura JSON</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Interesse em Dados</h3>
                  <p className="text-gray-600">Desejo de aprofundar na área de Dados</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Seção de Módulos */}
      <section id="modules" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Módulos do Curso</h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => setActiveModule(activeModule === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                    <ChevronDown
                      className={`w-5 h-5 transform transition-transform ${
                        activeModule === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeModule === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600 mb-4">{module.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-2">
                            <Terminal className="w-4 h-4 text-primary-orange" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Meet the Instructor */}
      <section id="instructor" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Conheça o Instrutor</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-xl"
              >
                <img 
                  src="./utils/foto1.jpg" 
                  alt="Foto do Instrutor" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-orange to-[#FF8B60] bg-clip-text text-transparent">Daniel Alves Laranjo</h3>
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Especialista em Power BI e Engenharia de Dados
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                Atualmente atua na área de dados pelo IEBT Innovation e deseja compartilhar suas experiências com todos que buscam aprender mais sobre o universo de dados.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-3">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="https://www.linkedin.com/in/daniel-laranjo-660a76238/" 
                    className="text-primary-orange hover:text-primary-black transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="https://github.com/Dlaranjo" 
                    className="text-primary-orange hover:text-primary-black transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="section-title">Entre em Contato</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                ></textarea>
              </div>
              
              {formStatus.type && (
                <div className={`p-4 rounded-md ${
                  formStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`button-primary w-full py-3 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default App;