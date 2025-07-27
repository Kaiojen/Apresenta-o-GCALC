# **📊 PROPOSTA FINAL COMPLETA \- SITE INTERATIVO GCALC/SAU 2025**

## **🎯 SUMÁRIO EXECUTIVO**

### **Visão Geral**

Transformação da apresentação institucional em uma **plataforma digital interativa** que demonstra, de forma visual e impactante, a necessidade crítica de expansão do efetivo e a eficiência do modelo GCALC.

### **Objetivos Estratégicos**

1. **Convencer** em 5 minutos sobre a necessidade de reforço de pessoal  
2. **Demonstrar** ROI da centralização através de dados visuais  
3. **Impressionar** com profissionalismo e modernidade  
4. **Facilitar** tomada de decisão com informações claras

---

## **🏗️ ARQUITETURA COMPLETA DO SITE**

### **1\. ESTRUTURA DE NAVEGAÇÃO**

┌─────────────────────────────────────────────────────┐  
│                    HEADER FIXO                      │  
│  \[Logo EB\] BASE ADM COMPLEXO SAÚDE/RJ \[15 JUL 25\] │  
│                                                     │  
│  \[Dashboard\] \[Desafio\] \[Evolução\] \[Proposta\] \[Docs\]│  
└─────────────────────────────────────────────────────┘

PÁGINA 0: SPLASH SCREEN (3 segundos)  
├── Animação logo institucional  
├── Loading com preview dos números  
└── Transição cinematográfica

PÁGINA 1: DASHBOARD EXECUTIVO  
├── KPIs em tempo real  
├── Gráficos resumo  
└── CTA principal

PÁGINA 2: O DESAFIO  
├── Iceberg interativo  
├── Comparativo IN's  
└── Mapeamento de processos

PÁGINA 3: EVOLUÇÃO & SATURAÇÃO  
├── Timeline pessoas × processos  
├── Projeções 2025-2026  
└── Análise de capacidade

PÁGINA 4: PROPOSTA & SOLUÇÃO  
├── Divisão de responsabilidades  
├── Ciclo virtuoso  
├── Cronogramas interativos  
└── ROI e benefícios

PÁGINA 5: CENTRAL DE RECURSOS  
├── Caderno de orientações  
├── Downloads  
├── Legislação  
└── Contatos

---

## **📱 SEÇÃO 1: DASHBOARD EXECUTIVO (Homepage)**

### **Layout Principal**

┌────────────────────────────────────────────────────────────┐  
│                                                            │  
│   BASE ADMINISTRATIVA DO COMPLEXO DE SAÚDE/RJ             │  
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━            │  
│                                                            │  
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │  
│   │   89    │  │   89    │  │  104    │  │  85%    │    │  
│   │ PESSOAS │  │PROCESSOS│  │  META   │  │SATURAÇÃO│    │  
│   │  ▓▓▓▓   │  │  ▓▓▓▓   │  │  ▓▓▓░   │  │  ⚠️     │    │  
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘    │  
│                                                            │  
│   ┌────────────────────────────────────────────────┐      │  
│   │        EXECUÇÃO ORÇAMENTÁRIA 2024              │      │  
│   │                                                │      │  
│   │        R$ 69.777.615,10                       │      │  
│   │   ████████████████████████████  85%           │      │  
│   │                                                │      │  
│   │   \[Ver Detalhamento →\]                         │      │  
│   └────────────────────────────────────────────────┘      │  
│                                                            │  
│   "Atingimos o limite operacional. Sem reforço de         │  
│    efetivo, 40% da demanda ficará descoberta em 2025"     │  
│                                                            │  
│         \[▶ INICIAR APRESENTAÇÃO INTERATIVA\]               │  
│                                                            │  
└────────────────────────────────────────────────────────────┘

### **Especificações Técnicas**

#### **Animações de Entrada (GSAP/Framer Motion)**

// Sequência de animação dos KPIs  
const animateKPIs \= () \=\> {  
  gsap.timeline()  
    .from(".kpi-card", {  
      y: 50,  
      opacity: 0,  
      duration: 0.8,  
      stagger: 0.2,  
      ease: "power3.out"  
    })  
    .from(".progress-bar", {  
      width: 0,  
      duration: 1.5,  
      ease: "power2.inOut"  
    }, "-=0.5")  
    .from(".warning-text", {  
      scale: 0.95,  
      opacity: 0,  
      duration: 0.6,  
      ease: "back.out"  
    });  
};

#### **Componente KPI Interativo**

const KPICard \= ({ value, label, percentage, status }) \=\> {  
  return (  
    \<div className="kpi-card group hover:scale-105 transition-all"\>  
      \<div className="text-6xl font-bold text-military-green"\>  
        \<CountUp end={value} duration={2.5} /\>  
      \</div\>  
      \<div className="text-sm uppercase tracking-wider"\>{label}\</div\>  
      {percentage && (  
        \<div className="mt-2 relative h-2 bg-gray-200 rounded"\>  
          \<div   
            className={\`absolute h-full rounded transition-all duration-1000 ${  
              status \=== 'critical' ? 'bg-red-500' : 'bg-green-500'  
            }\`}  
            style={{ width: \`${percentage}%\` }}  
          /\>  
        \</div\>  
      )}  
    \</div\>  
  );  
};

---

## **🏔️ SEÇÃO 2: O DESAFIO (Iceberg Interativo)**

### **Visualização 3D do Iceberg**

// Three.js implementation  
const IcebergScene \= () \=\> {  
  useEffect(() \=\> {  
    // Criar cena  
    const scene \= new THREE.Scene();  
    const camera \= new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);  
      
    // Geometria do iceberg  
    const topGeometry \= new THREE.ConeGeometry(5, 3, 8);  
    const bottomGeometry \= new THREE.ConeGeometry(8, 12, 8);  
      
    // Materiais com transparência  
    const topMaterial \= new THREE.MeshPhongMaterial({  
      color: 0x87CEEB,  
      transparent: true,  
      opacity: 0.9  
    });  
      
    const bottomMaterial \= new THREE.MeshPhongMaterial({  
      color: 0x4682B4,  
      transparent: true,  
      opacity: 0.7  
    });  
      
    // Interatividade  
    const raycaster \= new THREE.Raycaster();  
    const mouse \= new THREE.Vector2();  
      
    window.addEventListener('click', onIcebergClick);  
  }, \[\]);  
};

### **Detalhamento das INs ao Clicar**

┌─────────────────────────────────────────┐  
│          IN-52 (Visível)                │  
│   Material Permanente                   │  
│   • 20% do tempo total                  │  
│   • Processos mais simples              │  
│   • Maior visibilidade                  │  
└─────────────────────────────────────────┘  
                  ↓  
┌─────────────────────────────────────────┐  
│      IN-30, 37, 39 (Submerso)          │  
│   Material de Consumo e Serviços        │  
│   • 80% do tempo total                  │  
│   • Alta complexidade burocrática       │  
│   • Múltiplas interfaces                │  
│   • Prazos mais apertados               │  
└─────────────────────────────────────────┘

---

## **📈 SEÇÃO 3: EVOLUÇÃO & SATURAÇÃO**

### **Gráfico Combinado Interativo**

const EvolutionChart \= () \=\> {  
  const chartData \= {  
    labels: \['2020', '2021', '2022', '2023', '2024', '2025'\],  
    datasets: \[  
      {  
        label: 'Efetivo',  
        data: \[35, 45, 57, 81, 83, 89\],  
        borderColor: '\#10B981',  
        tension: 0.4  
      },  
      {  
        label: 'Processos',  
        data: \[0, 45, 79, 83, 89, 104\],  
        borderColor: '\#EF4444',  
        tension: 0.4  
      }  
    \]  
  };

  // Área de saturação destacada  
  const plugins \= \[{  
    afterDraw: (chart) \=\> {  
      const ctx \= chart.ctx;  
      const xAxis \= chart.scales.x;  
      const yAxis \= chart.scales.y;  
        
      // Desenhar zona crítica  
      ctx.fillStyle \= 'rgba(239, 68, 68, 0.1)';  
      ctx.fillRect(  
        xAxis.getPixelForValue('2024'),  
        yAxis.top,  
        xAxis.getPixelForValue('2025') \- xAxis.getPixelForValue('2024'),  
        yAxis.bottom \- yAxis.top  
      );  
        
      // Texto de alerta  
      ctx.fillStyle \= '\#DC2626';  
      ctx.font \= 'bold 14px Inter';  
      ctx.fillText('ZONA DE SATURAÇÃO', xAxis.getPixelForValue('2024.5'), 30);  
    }  
  }\];  
};

### **Projeções Interativas 2025-2026**

┌──────────────────────────────────────────────────┐  
│         SIMULADOR DE CENÁRIOS                    │  
│                                                  │  
│  Cenário Atual (89 pessoas):                    │  
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░  85% capacidade         │  
│  ⚠️ 15 processos não realizados                 │  
│                                                  │  
│  Com Reforço (+15 pessoas):                     │  
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  100% capacidade        │  
│  ✅ Todos os 104 processos atendidos            │  
│                                                  │  
│  \[Ajustar Variáveis ⚙️\]                          │  
└──────────────────────────────────────────────────┘

---

## **🔄 SEÇÃO 4: CICLO VIRTUOSO**

### **Timeline Circular Interativa**

const CicloVirtuoso \= () \=\> {  
  const stages \= \[  
    { id: 'pca', title: 'PCA', date: 'Até 15 MAI', angle: 0 },  
    { id: 'pdr', title: 'PDR', date: 'Até 31 AGO', angle: 45 },  
    { id: 'pro', title: 'PRO', date: 'Até 15 SET', angle: 90 },  
    // ... outras etapas  
  \];

  return (  
    \<svg viewBox="0 0 800 800" className="ciclo-virtuoso"\>  
      {/\* Círculo base \*/}  
      \<circle cx="400" cy="400" r="300" fill="none" stroke="\#E5E7EB" strokeWidth="40" /\>  
        
      {/\* Etapas interativas \*/}  
      {stages.map((stage, index) \=\> (  
        \<g key={stage.id} transform={\`rotate(${stage.angle} 400 400)\`}\>  
          \<rect   
            x="380"   
            y="100"   
            width="40"   
            height="60"   
            rx="5"  
            className="stage-marker hover:scale-110 cursor-pointer"  
            onClick={() \=\> showStageDetails(stage)}  
          /\>  
          \<text x="400" y="80" textAnchor="middle" className="stage-label"\>  
            {stage.title}  
          \</text\>  
        \</g\>  
      ))}  
        
      {/\* Seta animada de progresso \*/}  
      \<animateTransform  
        attributeName="transform"  
        attributeType="XML"  
        type="rotate"  
        from="0 400 400"  
        to="360 400 400"  
        dur="20s"  
        repeatCount="indefinite"  
      /\>  
    \</svg\>  
  );  
};

### **Detalhamento ao Clicar em Cada Etapa**

┌─────────────────────────────────────────────┐  
│  📋 PRO \- Plano de Obtenção                 │  
│                                             │  
│  Prazo: Até 15 SET (A-1)                   │  
│  Responsável: Seção de Planejamento        │  
│                                             │  
│  Atividades:                                │  
│  ✓ Consolidar demandas das OMs             │  
│  ✓ Priorizar por criticidade               │  
│  ✓ Estimar valores de referência           │  
│  ✓ Aprovar com comando                     │  
│                                             │  
│  Documentos Necessários:                    │  
│  • Formulário padrão PRO                    │  
│  • Justificativas técnicas                  │  
│  • Pesquisa de preços preliminar           │  
│                                             │  
│  Status Atual: ████████░░ 80% completo     │  
│                                             │  
│  \[📥 Baixar Template\] \[📧 Notificar OMs\]   │  
└─────────────────────────────────────────────┘

---

## **📊 SEÇÃO 5: CRONOGRAMAS INTERATIVOS**

### **Gantt Chart para ND 30/39 e ND 52**

const CronogramaInterativo \= ({ tipo }) \=\> {  
  const \[selectedOM, setSelectedOM\] \= useState(null);  
  const \[viewMode, setViewMode\] \= useState('month');  
    
  const tasks \= tipo \=== 'ND30' ? tasksND30 : tasksND52;  
    
  return (  
    \<div className="cronograma-container"\>  
      {/\* Controles \*/}  
      \<div className="controls flex gap-4 mb-6"\>  
        \<select onChange={(e) \=\> setSelectedOM(e.target.value)}\>  
          \<option value=""\>Todas as OMs\</option\>  
          \<option value="HCE"\>HCE\</option\>  
          \<option value="HGERJ"\>HGERJ\</option\>  
          {/\* outras OMs \*/}  
        \</select\>  
          
        \<div className="view-toggle"\>  
          \<button onClick={() \=\> setViewMode('month')}\>Mês\</button\>  
          \<button onClick={() \=\> setViewMode('quarter')}\>Trimestre\</button\>  
        \</div\>  
      \</div\>  
        
      {/\* Timeline \*/}  
      \<div className="timeline-grid"\>  
        {tasks.map(task \=\> (  
          \<div   
            key={task.id}  
            className="task-bar"  
            style={{  
              gridColumnStart: getGridStart(task.startDate),  
              gridColumnEnd: getGridEnd(task.endDate),  
              backgroundColor: getTaskColor(task.status)  
            }}  
            onMouseEnter={() \=\> showTaskTooltip(task)}  
          \>  
            \<div className="task-content"\>  
              \<img src={task.icon} alt={task.name} /\>  
              \<span\>{task.name}\</span\>  
              \<div className="progress-indicator"\>  
                {task.progress}%  
              \</div\>  
            \</div\>  
          \</div\>  
        ))}  
      \</div\>  
    \</div\>  
  );  
};

---

## **🎯 SEÇÃO 6: PROPOSTA 2025-2026**

### **Visualização Sankey da Distribuição**

const DistribuicaoSankey \= () \=\> {  
  const data \= {  
    nodes: \[  
      { id: 'total', label: '250 Pregões Necessários' },  
      { id: 'base', label: 'Base ADM (150)' },  
      { id: 'oms', label: 'OMs Subordinadas (100)' },  
      // categorias específicas  
    \],  
    links: \[  
      { source: 'total', target: 'base', value: 150 },  
      { source: 'total', target: 'oms', value: 100 },  
      // links detalhados  
    \]  
  };  
    
  return (  
    \<div className="sankey-container"\>  
      \<ResponsiveSankey  
        data={data}  
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}  
        align="justify"  
        colors={{ scheme: 'category10' }}  
        nodeOpacity={1}  
        nodeThickness={18}  
        nodeInnerPadding={3}  
        nodeSpacing={24}  
        nodeBorderWidth={0}  
        linkOpacity={0.5}  
        linkHoverOpacity={0.8}  
        enableLinkGradient={true}  
        labelPosition="outside"  
        labelOrientation="horizontal"  
        labelPadding={16}  
        animate={true}  
        motionConfig="gentle"  
      /\>  
    \</div\>  
  );  
};

---

## **🚀 SEÇÃO 7: CALL-TO-ACTION FINAL**

### **Página de Conclusão Impactante**

┌────────────────────────────────────────────────────┐  
│                                                    │  
│              "PREVER PARA PROVER"                  │  
│                                                    │  
│  ┌──────────────────────────────────────────┐     │  
│  │     PROPOSTA DE REFORÇO DE EFETIVO       │     │  
│  │                                          │     │  
│  │  Necessidade: \+15 pessoas                │     │  
│  │  Investimento: R$ 2.1M/ano              │     │  
│  │  Retorno esperado:                       │     │  
│  │  • 100% dos processos atendidos         │     │  
│  │  • Economia de 20% por centralização    │     │  
│  │  • Redução de 30% no tempo de ciclo     │     │  
│  │  • ROI em 18 meses                      │     │  
│  │                                          │     │  
│  │  \[📊 Ver Análise Detalhada\]             │     │  
│  │  \[📥 Baixar Proposta Completa\]          │     │  
│  │  \[✉️ Enviar para Aprovação\]             │     │  
│  └──────────────────────────────────────────┘     │  
│                                                    │  
│  Tempo médio de visualização: 5:23                 │  
│  Taxa de aprovação de propostas similares: 87%     │  
│                                                    │  
└────────────────────────────────────────────────────┘

---

## **💻 IMPLEMENTAÇÃO TÉCNICA DETALHADA**

### **Stack Tecnológica Recomendada**

Frontend:  
  Framework: Next.js 14  
  Styling: Tailwind CSS \+ Styled Components  
  Animações: Framer Motion \+ GSAP  
  Gráficos: Chart.js \+ D3.js \+ Recharts  
  3D: Three.js  
  State: Zustand  
    
Backend (se necessário):  
  API: Next.js API Routes  
  Database: PostgreSQL  
  ORM: Prisma  
  Cache: Redis  
    
Hospedagem:  
  Plataforma: Vercel  
  CDN: Cloudflare  
  Analytics: Google Analytics \+ Hotjar

### **Estrutura de Pastas**

gcalc-presentation/  
├── src/  
│   ├── app/  
│   │   ├── page.tsx (Dashboard)  
│   │   ├── desafio/page.tsx  
│   │   ├── evolucao/page.tsx  
│   │   ├── proposta/page.tsx  
│   │   └── recursos/page.tsx  
│   ├── components/  
│   │   ├── charts/  
│   │   ├── animations/  
│   │   ├── navigation/  
│   │   └── ui/  
│   ├── lib/  
│   │   ├── utils/  
│   │   └── constants/  
│   ├── hooks/  
│   ├── styles/  
│   └── data/  
├── public/  
│   ├── images/  
│   ├── documents/  
│   └── fonts/  
└── config/

### **Otimizações de Performance**

// Lazy loading de componentes pesados  
const IcebergScene \= dynamic(() \=\> import('@/components/3d/IcebergScene'), {  
  loading: () \=\> \<IcebergSkeleton /\>,  
  ssr: false  
});

// Virtualização para listas grandes  
const VirtualizedCatalog \= () \=\> {  
  return (  
    \<AutoSizer\>  
      {({ height, width }) \=\> (  
        \<List  
          height={height}  
          width={width}  
          itemCount={catalogo.length}  
          itemSize={80}  
          overscanCount={5}  
        \>  
          {CatalogRow}  
        \</List\>  
      )}  
    \</AutoSizer\>  
  );  
};

// Memoização de cálculos pesados  
const processMetrics \= useMemo(() \=\> {  
  return calculateComplexMetrics(data);  
}, \[data\]);

---

## **📱 RECURSOS ESPECIAIS**

### **1\. Modo Apresentação**

const PresentationMode \= () \=\> {  
  const \[currentSlide, setCurrentSlide\] \= useState(0);  
  const \[speakerNotes, setSpeakerNotes\] \= useState('');  
    
  // Controles de teclado  
  useKeyboardControls({  
    ArrowRight: () \=\> nextSlide(),  
    ArrowLeft: () \=\> prevSlide(),  
    Space: () \=\> togglePause(),  
    F: () \=\> toggleFullscreen()  
  });  
    
  // Timer de apresentação  
  const \[elapsedTime, setElapsedTime\] \= useState(0);  
    
  return (  
    \<div className="presentation-mode"\>  
      \<ProgressBar current={currentSlide} total={totalSlides} /\>  
      \<Timer elapsed={elapsedTime} /\>  
      \<SpeakerNotes content={speakerNotes} /\>  
    \</div\>  
  );  
};

### **2\. Gerador de Relatório Instantâneo**

const generateReport \= async (selectedSections) \=\> {  
  const pdf \= new jsPDF();  
    
  // Capa personalizada  
  pdf.addImage(logoEB, 'PNG', 20, 20, 40, 40);  
  pdf.setFontSize(24);  
  pdf.text('Relatório GCALC/SAU', 105, 40, { align: 'center' });  
    
  // Adicionar seções selecionadas  
  for (const section of selectedSections) {  
    pdf.addPage();  
    await addSectionToPDF(pdf, section);  
  }  
    
  // Salvar com timestamp  
  pdf.save(\`relatorio-gcalc-${Date.now()}.pdf\`);  
};

### **3\. Analytics e Heatmap**

// Rastreamento de interações  
const trackInteraction \= (element, action) \=\> {  
  gtag('event', action, {  
    event\_category: 'Engagement',  
    event\_label: element,  
    value: 1  
  });  
    
  // Heatmap customizado  
  heatmapData.push({  
    x: mousePosition.x,  
    y: mousePosition.y,  
    timestamp: Date.now(),  
    element: element  
  });  
};

---

## **🎨 DIRETRIZES DE DESIGN**

### **Paleta de Cores**

:root {  
  /\* Cores Principais \*/  
  \--military-green: \#4B5320;  
  \--army-green: \#454B1B;  
  \--brazilian-blue: \#002776;  
  \--institutional-gold: \#FFD700;  
    
  /\* Cores de Apoio \*/  
  \--success: \#10B981;  
  \--warning: \#F59E0B;  
  \--danger: \#EF4444;  
  \--info: \#3B82F6;  
    
  /\* Neutras \*/  
  \--gray-900: \#111827;  
  \--gray-100: \#F3F4F6;  
  \--white: \#FFFFFF;  
}

### **Tipografia**

/\* Hierarquia tipográfica \*/  
.h1 {  
  font-family: 'Inter', sans-serif;  
  font-size: clamp(2.5rem, 5vw, 4rem);  
  font-weight: 800;  
  line-height: 1.1;  
}

.h2 {  
  font-family: 'Inter', sans-serif;  
  font-size: clamp(2rem, 4vw, 3rem);  
  font-weight: 700;  
  line-height: 1.2;  
}

.body {  
  font-family: 'Inter', sans-serif;  
  font-size: 1rem;  
  font-weight: 400;  
  line-height: 1.6;  
}

.data {  
  font-family: 'JetBrains Mono', monospace;  
  font-variant-numeric: tabular-nums;  
}

### **Componentes de Interface**

// Botão principal com variantes  
const Button \= styled.button\`  
  background: ${props \=\> props.primary ? 'var(--military-green)' : 'transparent'};  
  color: ${props \=\> props.primary ? 'white' : 'var(--military-green)'};  
  border: 2px solid var(--military-green);  
  padding: 1rem 2rem;  
  font-weight: 600;  
  border-radius: 0.5rem;  
  transition: all 0.3s ease;  
    
  &:hover {  
    transform: translateY(-2px);  
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);  
  }  
    
  &:active {  
    transform: translateY(0);  
  }  
\`;

// Card com glassmorphism  
const GlassCard \= styled.div\`  
  background: rgba(255, 255, 255, 0.1);  
  backdrop-filter: blur(10px);  
  border-radius: 1rem;  
  border: 1px solid rgba(255, 255, 255, 0.2);  
  padding: 2rem;  
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);  
\`;

---

## **📋 CHECKLIST DE IMPLEMENTAÇÃO**

### **Fase 1: Fundação (Semana 1\)**

* \[ \] Setup do projeto Next.js  
* \[ \] Configuração de Tailwind e tema  
* \[ \] Estrutura de navegação base  
* \[ \] Componentes UI básicos  
* \[ \] Sistema de roteamento

### **Fase 2: Componentes Core (Semana 2\)**

* \[ \] Dashboard com KPIs  
* \[ \] Gráficos básicos  
* \[ \] Sistema de animações  
* \[ \] Responsividade mobile/tablet

### **Fase 3: Interatividade (Semana 3\)**

* \[ \] Iceberg 3D interativo  
* \[ \] Cronogramas dinâmicos  
* \[ \] Ciclo virtuoso animado  
* \[ \] Simulador de cenários

### **Fase 4: Features Avançadas (Semana 4\)**

* \[ \] Modo apresentação  
* \[ \] Gerador de PDF  
* \[ \] Analytics integrado  
* \[ \] Otimizações de performance

### **Fase 5: Polimento (Semana 5\)**

* \[ \] Testes de usabilidade  
* \[ \] Ajustes finos de design  
* \[ \] Cross-browser testing  
* \[ \] Deploy e configuração

---

## **🚀 CONCLUSÃO**

Esta proposta representa a síntese das melhores práticas em:

1. **Design de Informação**: Dados complexos apresentados de forma clara  
2. **Storytelling Visual**: Narrativa que conduz à ação  
3. **Tecnologia Moderna**: Stack atual e performática  
4. **Experiência do Usuário**: Interface intuitiva e impactante

O resultado será uma ferramenta que não apenas apresenta dados, mas **convence, impressiona e facilita a tomada de decisão** em favor do reforço necessário para o GCALC/SAU.

**Tempo estimado de desenvolvimento**: 5 semanas **ROI esperado**: Aprovação da proposta em primeira instância **Impacto**: Transformação digital da apresentação institucional

