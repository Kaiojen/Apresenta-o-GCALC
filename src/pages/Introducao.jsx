import { motion } from "framer-motion";
import { FileText, Scale, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NextButton from "@/components/Layout/NextButton";
import { useNavigate } from "react-router-dom";
import { useSpotlight } from "@/contexts/SpotlightContext";
import SpotlightSection from "@/components/Spotlight/SpotlightSection";
import { Play, ArrowRight } from "lucide-react";

export default function Introducao() {
  const navigate = useNavigate();
  const { enableSpotlight, isSpotlightMode } = useSpotlight();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--light-background)] to-white">
      <div
        className={
          isSpotlightMode ? "" : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        }
      >
        {/* PARTE 1: Título Principal */}
        <SpotlightSection id="hero-section" className="px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--primaryBlue)] mb-4">
                Apresentação Institucional
              </h1>
              <p className="text-xl text-[var(--softGray)] max-w-3xl mx-auto">
                Base Administrativa do Complexo de Saúde do Rio de Janeiro
              </p>
            </motion.div>
          </div>
        </SpotlightSection>

        {/* PARTE 2: Objetivo */}
        <SpotlightSection id="estrategia-section">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8 border-l-4 border-[var(--primaryBlue)] shadow-lg">
              <div className="flex items-start space-x-4">
                <Target className="h-10 w-10 text-[var(--primaryBlue)] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] mb-4">
                    Objetivo
                  </h2>
                  <p className="text-lg text-[var(--softGray)] leading-relaxed">
                    Apresentar a Cpcd da Base e uma proposta de atendimento das
                    demandas de CI VIII das OMS da 1ª RM.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </SpotlightSection>

        {/* Amparo Legal */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-[var(--primaryBlueDark)] text-center mb-8">
            Amparo Legal
          </h2>

          {/* Lei 14.133 */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <FileText className="h-8 w-8 text-[var(--primaryBlue)] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Lei 14.133 (NLLC)
                </h3>
                <p className="text-[var(--softGray)] mb-2">
                  <strong>Art. 19.</strong> Os órgãos da Administração...
                  deverão:
                </p>
                <p className="text-[var(--softGray)] ml-4">
                  I - instituir instrumentos que permitam a{" "}
                  <span className="text-[var(--health-red)] font-semibold">
                    centralização
                  </span>{" "}
                  dos procedimentos de aquisição e contratação de bens e
                  serviços;
                </p>
              </div>
            </div>
          </Card>

          {/* Portaria 144 */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <Scale className="h-8 w-8 text-[var(--primaryBlue)] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Portaria 144/ SEF, 19 JUL 21
                </h3>
                <p className="text-[var(--softGray)] mb-2">
                  <strong>Art 4º.</strong> Nas guarnições com{" "}
                  <span className="text-[var(--health-red)] font-semibold">
                    mais de uma UG
                  </span>
                  , deverá ser estabelecido, pelo menos,{" "}
                  <span className="text-[var(--health-red)] font-semibold">
                    um GCALC
                  </span>
                  .
                </p>
              </div>
            </div>
          </Card>

          {/* Diretriz Especial */}
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-[var(--lightGray)]/30">
            <div className="flex items-start space-x-4">
              <FileText className="h-8 w-8 text-[var(--primaryBlue)] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[var(--primaryBlueDark)] mb-2">
                  Dtz Esp Econ Fin Cmt EB
                </h3>
                <p className="text-[var(--softGray)]">
                  13) contribuir para a{" "}
                  <span className="text-[var(--health-red)] font-semibold">
                    implantação
                  </span>{" "}
                  e o{" "}
                  <span className="text-[var(--health-red)] font-semibold">
                    aprimoramento dos GCALC e das B Adm
                  </span>
                  , com a finalidade de aperfeiçoar processos administrativos e
                  racionalizar despesas com meios e pessoal, gerando maior
                  efetividade na gestão.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* PARTE 3: Call to Action - Apresentação */}
        <SpotlightSection id="cta-section">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="bg-gradient-to-r from-[var(--institutional-blue)] to-[var(--primaryBlue)] rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl"
            >
              <div className="text-center text-white space-y-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-flex p-4 bg-white/10 rounded-full mb-4"
                >
                  <Play className="h-8 w-8" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold">
                  Conheça Nossa Estratégia Completa
                </h2>

                <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                  Explore detalhadamente nossa trajetória, desafios atuais e as
                  soluções inovadoras que estamos implementando para garantir a
                  excelência contínua
                </p>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4 space-y-4"
                >
                  {/* Botão principal de apresentação */}
                  <Button
                    onClick={enableSpotlight}
                    size="lg"
                    className="bg-[var(--health-red)] hover:bg-[var(--health-red-dark)] text-white px-10 py-4 text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Play className="h-7 w-7 mr-3 group-hover:animate-pulse" />
                    INICIAR APRESENTAÇÃO INTERATIVA
                    <ArrowRight className="h-7 w-7 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>

                  {/* Navegação Normal */}
                  <div>
                    <Button
                      onClick={() => {
                        navigate("/evolucao");
                        setTimeout(
                          () =>
                            window.scrollTo({ top: 0, behavior: "instant" }),
                          10
                        );
                      }}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                    >
                      Ou navegar manualmente
                    </Button>
                  </div>
                </motion.div>

                {/* Instruções */}
                <div className="mt-6 text-blue-200 text-sm space-y-1">
                  <p className="font-semibold">🎯 Controles da Apresentação:</p>
                  <p>• ← → Navegar entre tópicos</p>
                  <p>• Ctrl + C para mostrar/ocultar controles</p>
                  <p>• F11 para entrar/sair do modo apresentação</p>
                  <p>• ESC para finalizar apresentação</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SpotlightSection>

        {/* Next Button para navegação normal */}
        {!isSpotlightMode && (
          <NextButton to="/evolucao" label="Ver Evolução Histórica" />
        )}
      </div>
    </div>
  );
}
