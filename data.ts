import { Cell, InfraItem, StrategyPoint } from './types';
import { Brain, Server, Box, Users, ShieldAlert, Activity, Database, Cpu } from 'lucide-react';

export const STRATEGY_STEPS: StrategyPoint[] = [
  { title: "1. Reencuadre", description: "Pasar de 'hacer funcionar un prototipo heroico' a diseñar un sistema replicable, operable y gobernable." },
  { title: "2. MVP Producto", description: "Constelación SAI 2.0: 10-20 nodos en 2-3 regiones. Arquitectura escalable y pipeline de datos automatizado." },
  { title: "3. MVP Equipos", description: "Organización en 4 células autónomas pero interconectadas (14-15 personas senior/semisenior)." },
  { title: "4. MVP Infra", description: "Hardware estandarizado, cluster de entrenamiento redundante y observabilidad total." },
  { title: "5. Anti-Patrones", description: "Qué NO hacer: Mega-equipos burocráticos, IoT exótico innecesario, expansión geográfica prematura." }
];

export const CELLS: Cell[] = [
  {
    id: "ia-data",
    name: "Célula IA & Datos (SAINet)",
    objective: "Que SAINet deje de ser un experimento y se convierta en un producto vivo con ciclos de mejora continuos.",
    icon: Brain,
    roles: [
      {
        title: "Lead de IA / Chief Scientist",
        count: "1 FTE",
        description: ["Estrategia de modelos (YOLOv11, tuning)", "Roadmap de investigación", "Estrategia de Dataset"],
        currentPerson: "Mariano Fernández Méndez",
        isHire: false
      },
      {
        title: "ML Engineer Senior",
        count: "2 FTE",
        description: ["Pipelines de entrenamiento", "Scripts robustos de benchmark", "Despliegue de modelos"],
        currentPerson: "Federico Bonino (50%)",
        isHire: true // Need 1 more full senior + Fede
      },
      {
        title: "Data Engineer / Data Steward",
        count: "1 FTE",
        description: ["Dueño del dataset como producto", "Data Lake", "Herramientas de etiquetado"],
        isHire: true
      },
      {
        title: "Data Ops / QA",
        count: "Soporte",
        description: ["QA end-to-end", "Scripts de latencia", "Soporte a etiquetado"],
        currentPerson: "Santiago Cetran / Anabella Scigliano",
        isHire: false
      }
    ]
  },
  {
    id: "platform",
    name: "Célula Plataforma & DevOps",
    objective: "Que el cuello de botella deje de ser el workflow y que todo sea escalable, observable y fácil de operar.",
    icon: Server,
    roles: [
      {
        title: "Lead de Plataforma / Arquitecto",
        count: "1 FTE",
        description: ["Rediseño de arquitectura (Microservicios)", "Orquestación de estándares"],
        currentPerson: "Nicolás Echániz",
        isHire: false
      },
      {
        title: "Backend Engineer Senior",
        count: "1-2 FTE",
        description: ["APIs de nodos", "Lógica de negocio", "Panel web operadores"],
        currentPerson: "Federico Bonino (Lead Técnico)",
        isHire: true // Need 1 dedicated to industrialize
      },
      {
        title: "DevOps / SRE",
        count: "1 FTE",
        description: ["Infra as Code (CI/CD)", "Observabilidad (GPU usage, throughput)", "Seguridad"],
        isHire: true
      }
    ]
  },
  {
    id: "hardware",
    name: "Célula Hardware & Campo",
    objective: "Que el nodo SAI sea un producto robusto, reproducible y mantenible. Hierro real clavado en los cerros.",
    icon: Box,
    roles: [
      {
        title: "Lead de Hardware / Edge",
        count: "1 FTE",
        description: ["Diseño v2 del nodo", "Gestión remota", "Electrónica + IoT"],
        currentPerson: "Pablo Bustos",
        isHire: false
      },
      {
        title: "Industrial Design & Manufacturability",
        count: "Soporte",
        description: ["Diseño industrial", "Disipación térmica", "Kit replicable"],
        currentPerson: "Martín Fernández Méndez",
        isHire: false
      },
      {
        title: "Técnico de Mantenimiento / Campo",
        count: "1 FTE",
        description: ["Instalaciones en territorio", "Mantenimiento preventivo", "Recambios"],
        currentPerson: "Remo Nicolás Barale (Lead Operativo)",
        isHire: true // Need 1 full-time field tech
      }
    ]
  },
  {
    id: "product",
    name: "Célula Producto & Comunidad",
    objective: "Que el SAI no sea solo tecnología, sino un servicio útil y apropiado por las comunidades.",
    icon: Users,
    roles: [
      {
        title: "Implementación & Comunidad",
        count: "1 FTE",
        description: ["Coordinación de talleres", "Vínculo con municipios/bomberos"],
        currentPerson: "Saira Asua",
        isHire: false
      },
      {
        title: "Product Manager / Service Designer",
        count: "1 FTE",
        description: ["Roadmap de funcionalidades", "Investigación de usuarios", "Definición de 'viajes'"],
        isHire: true
      },
      {
        title: "UX / Research Designer",
        count: "0.5 - 1 FTE",
        description: ["Interfaces de paneles", "Experiencia de alerta en crisis"],
        isHire: true
      },
      {
        title: "Audiovisual & Pedagogía",
        count: "Soporte",
        description: ["Materiales de entrenamiento", "Protocolos humanos"],
        currentPerson: "Julián de la Reta",
        isHire: false
      }
    ]
  }
];

export const INFRA_SPECS: InfraItem[] = [
  {
    title: "Cluster de Entrenamiento",
    details: [
      "1 Nodo Principal: 2x GPU (A100/H100) para entrenamientos grandes.",
      "1 Nodo Secundario: 1 GPU mid-range para experimentación rápida.",
      "Almacenamiento: ~100TB para datasets, checkpoints y logs."
    ]
  },
  {
    title: "Infraestructura de Inferencia",
    details: [
      "Producción: 2 servidores (Activo/Activo) con GPUs 3090/4090.",
      "Objetivo: Redundancia más que potencia bruta.",
      "Balanceador de carga + Autoscaling básico."
    ]
  },
  {
    title: "Nodos SAI (Edge)",
    details: [
      "Constelación Inicial: 20 nodos completos (Cámaras + SBC + UPS/Solar).",
      "Reserva: 5 kits adicionales para recambio rápido.",
      "Laboratorio: 2 nodos indoor para simulación (humo, lluvia)."
    ]
  }
];

export const DONT_DO_LIST: string[] = [
  "Mega-equipo de 50 personas (exceso de management).",
  "Desarrollo de hardware exótico (aviónicas, satélites propios).",
  "Abrir 10 países al mismo tiempo.",
  "Juniorizar el equipo: El foco es Seniority para mantener el equipo compacto."
];