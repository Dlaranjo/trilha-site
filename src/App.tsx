import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  Workflow
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <LineChart className="h-8 w-8 text-primary-orange" />
            <span className="ml-2 text-xl font-bold font-poppins">Power BI Master</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-primary-black hover:text-primary-orange transition-colors">Visão Geral</a>
            <a href="#path" className="text-primary-black hover:text-primary-orange transition-colors">Trilha de Aprendizado</a>
            <a href="#prerequisites" className="text-primary-black hover:text-primary-orange transition-colors">Pré-requisitos</a>
            <a href="#modules" className="text-primary-black hover:text-primary-orange transition-colors">Módulos</a>
            <a href="https://github.com/Dlaranjo/trilha-pbi" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-primary-black transition-colors">
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
            <button className="w-full mt-4 bg-primary-orange text-white px-6 py-2 rounded-full hover:bg-primary-black transition-colors">
              Começar Agora
            </button>
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
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    {
      title: "Personalização Avançada de Temas",
      description: "Domine a criação e implementação de temas personalizados usando JSON no Power BI.",
      duration: "2 semanas",
      topics: ["Estrutura JSON de Temas", "Paletas de Cores", "Formatação Condicional", "Temas Corporativos"]
    },
    {
      title: "SVG no Power BI",
      description: "Aprenda a criar e implementar gráficos vetoriais escaláveis no Power BI.",
      duration: "2 semanas",
      topics: ["Criação de SVGs", "Implementação no Power BI", "Ícones Personalizados", "Visualizações Interativas"]
    },
    {
      title: "Parâmetros e Visualizações Dinâmicas",
      description: "Explore o uso avançado de parâmetros para criar relatórios dinâmicos.",
      duration: "3 semanas",
      topics: ["Parâmetros Avançados", "Visualizações Dinâmicas", "Filtros Complexos", "Bookmarks"]
    },
    {
      title: "Grupos de Cálculo",
      description: "Aprenda a criar e gerenciar grupos de cálculo eficientes no Power BI.",
      duration: "2 semanas",
      topics: ["Fundamentos", "Implementação Prática", "Otimização", "Casos de Uso"]
    },
    {
      title: "Engenharia de Dados com Airflow",
      description: "Domine os fundamentos de engenharia de dados usando Apache Airflow.",
      duration: "4 semanas",
      topics: ["Pipelines de Dados", "DAGs", "Operadores", "Monitoramento"]
    }
  ];

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
              Domine o Power BI e Engenharia de Dados
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              Trilha avançada para dominar visualização de dados e engenharia de dados
            </motion.p>
            <a href="https://github.com/Dlaranjo/trilha-pbi" target="_blank" rel="noopener noreferrer">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white text-primary-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">Visão Geral do Curso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Settings className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Personalização Avançada</h3>
                <p className="text-gray-600">Aprenda a criar temas personalizados e visualizações únicas no Power BI</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Database className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Engenharia de Dados</h3>
                <p className="text-gray-600">Domine pipelines de dados e automação com Apache Airflow</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Workflow className="w-12 h-12 text-primary-orange mb-4" />
                <h3 className="text-xl font-bold mb-4">Fluxos de Trabalho</h3>
                <p className="text-gray-600">Crie soluções completas de análise de dados e automação</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Trilha de Aprendizado */}
      <section id="path" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">Trilha de Aprendizado</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">Pré-requisitos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Estrutura do Power BI</h3>
                  <p className="text-gray-600">Conhecimento básico da estrutura de relatórios</p>
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
                  <h3 className="font-semibold mb-2">SQL Básico</h3>
                  <p className="text-gray-600">Conhecimento de consultas SQL fundamentais</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary-orange flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">JSON</h3>
                  <p className="text-gray-600">Compreensão básica da estrutura JSON</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">Módulos do Curso</h2>
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

      {/* Formulário de Contato */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-poppins">Entre em Contato</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-orange focus:border-primary-orange"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-orange text-white px-6 py-3 rounded-md hover:bg-primary-black transition-colors font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default App;