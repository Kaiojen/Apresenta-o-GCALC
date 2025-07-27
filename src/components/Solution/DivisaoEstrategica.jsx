import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Building,
  Users,
  Target,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { DIVISAO_ESTRATEGICA, ESTATISTICAS_OM } from "@/lib/constants";

export default function DivisaoEstrategica() {
  const [expandedGroups, setExpandedGroups] = useState(new Set());

  const toggleGroup = (groupId) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  const getOmColor = (om) => {
    const colors = {
      "B Adm Cmpl Sau RJ": "bg-blue-100 text-blue-800",
      HGERJ: "bg-green-100 text-green-800",
      HCE: "bg-purple-100 text-purple-800",
      HMR: "bg-orange-100 text-orange-800",
      OCEx: "bg-indigo-100 text-indigo-800",
      PMN: "bg-pink-100 text-pink-800",
      PMRJ: "bg-yellow-100 text-yellow-800",
      PMPV: "bg-teal-100 text-teal-800",
      OCEX: "bg-indigo-100 text-indigo-800",
    };
    return colors[om] || "bg-gray-100 text-gray-800";
  };

  const isServiceActive = (subgrupo) => {
    return subgrupo.ativo !== false && subgrupo.processos > 0;
  };

  return (
    <div className="space-y-8">
      {/* Resumo Executivo */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="text-center border-l-4 border-l-[var(--institutional-blue)]">
          <CardContent className="p-6">
            <Target className="h-8 w-8 text-[var(--institutional-blue)] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[var(--military-green)] mb-2">
              {DIVISAO_ESTRATEGICA.totalGrupos}
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              GRUPOS ESTRATÉGICOS
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-2">
              Estrutura institucional oficial
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-l-4 border-l-[var(--success-green)]">
          <CardContent className="p-6">
            <Building className="h-8 w-8 text-[var(--success-green)] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[var(--military-green)] mb-2">
              {DIVISAO_ESTRATEGICA.totalSubgrupos}
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              SUBGRUPOS ORGANIZADOS
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-2">
              Especialização por área técnica
            </p>
          </CardContent>
        </Card>

        <Card className="text-center border-l-4 border-l-[var(--warning)]">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-[var(--warning)] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[var(--military-green)] mb-2">
              {DIVISAO_ESTRATEGICA.totalProcessos}
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              PROCESSOS LICITATÓRIOS
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-2">
              Volume anual estruturado
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Distribuição por OM */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[var(--military-green)]">
              Distribuição de Responsabilidades por Organização Militar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ESTATISTICAS_OM.map((om, index) => (
                <motion.div
                  key={om.nome}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getOmColor(om.nome)}>{om.nome}</Badge>
                    <span className="text-lg font-bold text-[var(--military-green)]">
                      {om.percentual}%
                    </span>
                  </div>
                  <div className="text-sm text-[var(--text-gray)]">
                    {om.processos} processos atribuídos
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-[var(--institutional-blue)] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${om.percentual}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grupos Detalhados */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-[var(--military-green)] text-center">
          Estrutura Institucional Detalhada - 9 Grupos Oficiais
        </h3>

        {DIVISAO_ESTRATEGICA.grupos.map((grupo, index) => (
          <motion.div
            key={grupo.id}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardHeader
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleGroup(grupo.id)}
                style={{ borderLeft: `4px solid ${grupo.cor}` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: grupo.cor }}
                    ></div>
                    <div>
                      <CardTitle className="text-lg font-bold text-[var(--military-green)]">
                        {grupo.id}. {grupo.nome}
                      </CardTitle>
                      <p className="text-sm text-[var(--text-gray)]">
                        {grupo.subgrupos.length} subgrupos especializados
                        {grupo.nome === "Serviços" &&
                          ` (${
                            grupo.subgrupos.filter((sub) =>
                              isServiceActive(sub)
                            ).length
                          } ativos)`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="bg-white">
                      {grupo.subgrupos.length} subgrupos
                    </Badge>
                    {expandedGroups.has(grupo.id) ? (
                      <ChevronUp className="h-5 w-5 text-[var(--text-gray)]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[var(--text-gray)]" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {expandedGroups.has(grupo.id) && (
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {grupo.subgrupos.map((subgrupo, subIndex) => (
                      <motion.div
                        key={subgrupo.numero}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: subIndex * 0.03 }}
                        className={`border rounded-lg p-3 hover:shadow-md transition-shadow ${
                          isServiceActive(subgrupo)
                            ? "bg-white border-gray-200"
                            : "bg-gray-50 border-gray-300 opacity-70"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-[var(--institutional-blue)] bg-blue-50 px-2 py-1 rounded">
                              {grupo.nome === "Serviços" ? "SRV" : "SUB"}{" "}
                              {subgrupo.numero}
                            </span>
                            {grupo.nome === "Serviços" &&
                              (isServiceActive(subgrupo) ? (
                                <CheckCircle
                                  className="h-4 w-4 text-green-500"
                                  title="Serviço Ativo"
                                />
                              ) : (
                                <XCircle
                                  className="h-4 w-4 text-red-500"
                                  title="Serviço Inativo"
                                />
                              ))}
                          </div>
                          <Badge
                            className={getOmColor(subgrupo.om)}
                            variant="outline"
                          >
                            {subgrupo.om}
                          </Badge>
                        </div>
                        <h4 className="text-sm font-semibold text-[var(--military-green)] mb-1 leading-tight">
                          {subgrupo.descricao}
                        </h4>
                        <div className="text-xs text-[var(--text-gray)] flex items-center justify-between">
                          <span>{subgrupo.processos} processo(s)</span>
                          {grupo.nome === "Serviços" &&
                            !isServiceActive(subgrupo) && (
                              <span className="text-red-500 font-medium">
                                INATIVO
                              </span>
                            )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Estatísticas da Estrutura */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-l-[var(--institutional-blue)]"
      >
        <h3 className="text-xl font-bold text-[var(--military-green)] mb-4">
          Análise da Estrutura Institucional
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--institutional-blue)] mb-2">
              50
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              OPME - Maior Grupo
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-1">
              17,2% do total de subgrupos
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--institutional-blue)] mb-2">
              69%
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              B Adm Cmpl Sau RJ
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-1">
              Concentração principal
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--institutional-blue)] mb-2">
              3
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              Serviços Ativos
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-1">
              De 17 serviços totais
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--institutional-blue)] mb-2">
              8
            </div>
            <div className="text-sm font-medium text-[var(--text-gray)]">
              OMs Envolvidas
            </div>
            <p className="text-xs text-[var(--text-gray)] mt-1">
              Distribuição colaborativa
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-blue-200">
          <h4 className="font-bold text-[var(--institutional-blue)] mb-3">
            ✅ Benefícios da Estrutura Institucional
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-[var(--text-gray)]">
              <li>
                • <strong>Padronização:</strong> Estrutura oficial validada e
                aprovada
              </li>
              <li>
                • <strong>Especialização:</strong> Conhecimento técnico
                concentrado por área
              </li>
              <li>
                • <strong>Rastreabilidade:</strong> Responsabilidades claramente
                definidas
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-[var(--text-gray)]">
              <li>
                • <strong>Eficiência:</strong> Redução de duplicação entre OMs
              </li>
              <li>
                • <strong>Governança:</strong> Controle centralizado de 290
                processos
              </li>
              <li>
                • <strong>Compliance:</strong> Adequação aos normativos
                militares
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
