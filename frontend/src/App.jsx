import { useState } from "react";

// ─── DATA PANTALLA 1 ──────────────────────────────────────────────────────────
const regulacion = {
  secciones: [
    {
      id: "s1",
      badge: "CREG 025 / 1995",
      titulo: "Código de Redes — Código de Operación",
      descripcion:
        "Base regulatoria del restablecimiento. El numeral 5.4 establece que, ante un evento total o parcial del SIN, el CND y los CRD determinan las acciones de restablecimiento; ordena aislar barrajes o cargas sin tensión, mantener comunicación continua y reconectar carga con frecuencia manualmente regulada entre 59.8 Hz y 60.1 Hz.",
      bloques: [
        {
          icon: "⚡",
          titulo: "Objetivo del restablecimiento",
          items: [
            "Recuperar el servicio eléctrico de forma segura, ordenada y progresiva",
            "Minimizar riesgos para equipos y sistema",
            "Evitar colapsos adicionales",
          ],
        },
        {
          icon: "📋",
          titulo: "Transmisores y Generadores están obligados a:",
          items: [
            "Seguir las instrucciones del CND sin desviarse",
            "Tener planes previamente definidos, aprobados, coordinados y actualizados",
            "Garantizar disponibilidad de recursos (equipos, personal)",
            "Coordinar maniobras bajo lineamientos del sistema",
          ],
        },
        {
          icon: "🗺️",
          titulo: "Estrategia de restablecimiento",
          items: [
            "Uso de unidades con arranque en negro (black start)",
            "Energización progresiva de redes con guía o ruta definida",
            "Sincronización controlada de generación",
            "Restablecimiento por zonas o islas si es necesario",
          ],
        },
        {
          icon: "📡",
          titulo: "Coordinación y comunicación permanente",
          items: [
            "Comunicación continua y confiable entre CND, centros de control y subestaciones",
            "La pérdida de comunicación puede detener maniobras",
            "Planes previos obligatorios — energización gradual — cargas esenciales prioritarias",
          ],
        },
      ],
    },
    {
      id: "s2",
      badge: "Compilación CREG",
      titulo: "Resolución Única del Sector Eléctrico",
      descripcion:
        "Reitera para OR que, en contingencia, la coordinación del restablecimiento se ajusta a lo dispuesto en el numeral 5.4 del Código de Redes.",
      bloques: [],
    },
    {
      id: "s3",
      badge: "CREG 080 / 1999",
      titulo: "Funciones de coordinación operativa CND — Agentes SIN",
      descripcion:
        "Define funciones de coordinación operativa entre CND y agentes del SIN; establece responsabilidades de CND, transportadores y OR durante maniobras y control operativo.",
      bloques: [
        {
          icon: "🚫",
          titulo: "Principio rector: NO autonomía operativa",
          items: [
            "Toda maniobra será ejecutada únicamente bajo instrucción del CND",
            "Nadie en subestación decide energizar por iniciativa propia",
            "Aplica para: líneas, barras, transformadores y cargas",
          ],
        },
        {
          icon: "📡",
          titulo: "Protocolo de coordinación obligatoria",
          items: [
            "Canal oficial de comunicación con CND",
            "Confirmación en doble vía: orden recibida → repetición → confirmación de ejecución",
            "Ejemplo: «Se confirma orden CND: energizar barra 220 kV desde línea XX»",
          ],
        },
        {
          icon: "🏗️",
          titulo: "Separación clara de responsabilidades",
          items: [
            "CND: decide secuencia y condiciones",
            "Centro de control: coordina ejecución",
            "Subestación TEBSA: ejecuta maniobras",
          ],
        },
        {
          icon: "🔄",
          titulo: "Secuencia de maniobras controladas",
          items: [
            "Ejecución paso a paso — no simultánea",
            "Validación tras cada maniobra: tensión, estado de equipos, alarmas",
            "No avanzar al siguiente paso sin validación",
          ],
        },
        {
          icon: "⚠️",
          titulo: "Regla de oro: seguridad sobre rapidez",
          items: [
            "Ante cualquier duda, suspender la maniobra e informar al CND",
            "Nunca energizar sin autorización del CND",
            "Nunca energizar equipo sospechoso de falla",
          ],
        },
        {
          icon: "🔌",
          titulo: "Control de energización y carga",
          items: [
            "Energización progresiva: barras → transformadores → alimentadores",
            "Prohibido reconectar cargas masivas sin instrucción",
            "Siempre mantener comunicación continua",
          ],
        },
      ],
    },
  ],
};

// ─── DATA PANTALLA 2 ──────────────────────────────────────────────────────────
const generalidades = {
  objetivo:
    "Restablecer la subestación 220/110 kV de forma segura, coordinada y progresiva, evitando sobrecargas, energizaciones en falla y descoordinación.",
  premisas: [
    "Todas las maniobras bajo instrucción del CND",
    "Verificar condición del sistema (total o parcial)",
    "Confirmación de disponibilidad: transformadores, bahías trafo, bahías línea, bahías corte central, bahías generación y protecciones operativas",
    "Identificar punto de energización (línea 220 kV o 110 kV)",
    "Verificar fuente de arranque (black start o red viva cercana)",
    "Comunicación permanente: CND — Centro de Control — Subestación",
  ],
  secuencia: [
    { num: "1", label: "Condiciones del sistema" },
    { num: "2", label: "Punto de energización 220/110 kV" },
    { num: "3", label: "Fuente de arranque (black start)" },
    { num: "4", label: "Secuencia de maniobras" },
    { num: "5", label: "Confirmación final del sistema" },
  ],
  claves: [
    "Nunca maniobrar sin orden del CND",
    "Energización paso a paso",
    "Confirmación en cada maniobra",
    "Comunicación permanente",
  ],
};

// ─── DATA PANTALLA 3 ──────────────────────────────────────────────────────────
const normativaRef = [
  "Resolución CREG 025 de 1995",
  "Resolución CREG 080 de 1999",
  "RETIE – Resolución 40117 de 2024",
  "Acuerdo CNO 1784 de 2023",
];

const fases = [
  {
    id: "f0", color: "rojo",
    titulo: "FASE 0 — Activación del Protocolo de Emergencia",
    pasos: [
      {
        id: "p0_1", titulo: "Paso 0.1 — Confirmación del evento",
        items: [
          "Identificar causa: pérdida total/parcial de tensión, disparo de protecciones, aislamiento de barras o transformadores",
          "Verificar si es falla interna (subestación) o falla externa (líneas / sistema)",
          "Inspección física o SCADA",
          "Informar al CND dentro de los 15 minutos siguientes a la ocurrencia del evento",
        ],
      },
      {
        id: "p0_2", titulo: "Paso 0.2 — Aseguramiento del personal (RETIE)",
        items: [
          "Aplicar bloqueo y etiquetado (LOTO)",
          "Verificación de ausencia de tensión — tensiones de paso y contacto",
          "Puesta a tierra temporal",
          "Nadie interviene sin condiciones seguras",
          "Sin instrucción del CND: realizar barrido de interruptores en subestaciones sin tensión, abrir interruptores de líneas, transformadores y compensadores, colocar taps en posición nominal e informar al CND",
        ],
      },
    ],
  },
  {
    id: "f1", color: "naranja",
    titulo: "FASE 1 — Aislamiento y Condición Segura",
    pasos: [
      {
        id: "p1_1", titulo: "Paso 1.1 — Aislar la subestación (coordinación con CND)",
        items: [
          "Abrir interruptores de líneas 220 kV",
          "Abrir interruptores de transformadores",
          "Abrir interruptores de barras afectadas",
          "Aislar cargas conectadas — evita energizaciones no controladas",
        ],
      },
      {
        id: "p1_2", titulo: "Paso 1.2 — Confirmación de topología",
        items: [
          "Reportar al CND: estado de interruptores, equipos disponibles, fallas identificadas",
          "El CND coordina, supervisa y define el plan de restablecimiento",
        ],
      },
    ],
  },
  {
    id: "f2", color: "amarillo",
    titulo: "FASE 2 — Coordinación con el CND",
    pasos: [
      {
        id: "p2_1", titulo: "Paso 2.1 — Establecer comunicación formal",
        items: [
          "Canal operativo (SCADA / voz)",
          "Confirmar quién tiene control (CND)",
          "Confirmar responsables en sitio (Operador de Subestación)",
        ],
      },
      {
        id: "p2_2", titulo: "Paso 2.2 — Recepción del plan de restablecimiento",
        items: [
          "El CND define la secuencia de energización",
          "Fuentes de tensión disponibles",
          "Límites de carga",
          "Prioridades: hospitales, cargas críticas",
          "Todo restablecimiento es centralizado y coordinado",
        ],
      },
    ],
  },
  {
    id: "f3", color: "azul",
    titulo: "FASE 3 — Preparación para Energización",
    pasos: [
      {
        id: "p3_1", titulo: "Paso 3.1 — Verificación técnica de equipos",
        items: [
          "Transformadores: nivel de aceite, protecciones habilitadas",
          "Interruptores: presión SF6 / estado mecánico",
          "Barras: sin fallas visibles",
          "Sistemas auxiliares: DC operativo, protecciones activas",
          "Estado de unidades de Generación: Activas / Falla",
        ],
      },
      {
        id: "p3_2", titulo: "Paso 3.2 — Validación del Esquema de Control y Protecciones",
        items: [
          "Esquemas habilitados: diferenciales, distancia, sobrecorriente",
          "Esquemas de control y telecomando operativos",
          "Ajustes acordes al sistema",
          "La protección es crítica para evitar colapsos",
        ],
      },
    ],
  },
  {
    id: "f4", color: "verde",
    titulo: "FASE 4 — Energización del Sistema",
    pasos: [
      {
        id: "p4_1", titulo: "Paso 4.1 — Energización de barras 220 kV (red viva cercana)",
        items: [
          "0. Seleccionar fuente viva (línea energizada o generación)",
          "1. Energizar línea 220 kV hacia TEBSA bajo orden del CND, verificar sincronismo y cerrar interruptor de bahía",
          "Config. interruptor y medio: diámetro incompleto → cerrar ambos interruptores; diámetro completo → cerrar solo el del lado de barra",
          "2. Energizar barra 220 kV: cierre de interruptor de llegada, confirmar tensión estable",
          "3. Energizar transformador 220/110 kV: verificar inrush y protecciones, monitorear corrientes y tensiones, ruido/vibración — habilitar carga progresiva",
          "4. Energizar barra 110 kV progresivamente una vez estabilizado el transformador",
          "5. Restablecer cargas 110 kV: priorizar cargas críticas, entrada escalonada, controlar cold load pickup",
          "Validar: tensión 0.9–1.1 p.u. — sin oscilaciones",
        ],
      },
      {
        id: "p4_2", titulo: "Paso 4.2 — Sincronización (si aplica — islas eléctricas)",
        items: [
          "Verificar frecuencia igual",
          "Verificar ángulo de fase",
          "Verificar tensión compatible — definido en el Código de Redes",
        ],
      },
    ],
  },
  {
    id: "f5", color: "cian",
    titulo: "FASE 5 — Restablecimiento de Carga",
    pasos: [
      {
        id: "p5_1", titulo: "Paso 5.1 — Reconexión gradual de carga",
        items: [
          "Frecuencia entre 59.8 Hz – 60.1 Hz",
          "Secuencia: 1. Cargas críticas → 2. Cargas prioritarias → 3. Resto de demanda",
        ],
      },
      {
        id: "p5_2", titulo: "Paso 5.2 — Control de estabilidad",
        items: [
          "Monitorear: frecuencia, tensión, flujos de potencia",
          "Evitar: sobrecargas, caídas de tensión, oscilaciones",
        ],
      },
    ],
  },
  {
    id: "f6", color: "morado",
    titulo: "FASE 6 — Normalización",
    pasos: [
      {
        id: "p6_1", titulo: "Paso 6.1 — Retorno a configuración normal",
        items: [
          "Restituir esquema de barras",
          "Restituir redundancias",
          "Cerrar anillos del sistema",
        ],
      },
      {
        id: "p6_2", titulo: "Paso 6.2 — Validación final de calidad de energía",
        items: [
          "Confirmar frecuencia dentro de rango",
          "Confirmar tensión dentro de rango",
          "Verificar armónicos",
        ],
      },
      {
        id: "p6_3", titulo: "Paso 6.3 — Cierre del evento y reporte al CND",
        items: [
          "Reportar al CND la finalización dentro de los 5 minutos siguientes",
          "Registrar maniobras realizadas y tiempos",
          "Reportar anomalías",
          "Confirmar ausencia de personal en zonas energizadas",
          "Retiro de tierras temporales — bloqueos/etiquetado verificados",
          "Maniobras confirmadas en doble vía (operador–control)",
          "Seguimiento continuo de tensiones, frecuencias, cargas — reporte al CND",
          "Registrar en GAO (Acuerdo CNO 1784/2023): eventos, maniobras, protecciones, informe consolidado",
          "Obligatorio por RETIE — gestión y trazabilidad (Resolución 40117 de 2024)",
        ],
      },
    ],
  },
];

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function NavBar({ pantalla, setPantalla }) {
  const tabs = [
    { id: 1, label: "Regulación" },
    { id: 2, label: "Generalidades" },
    { id: 3, label: "Iniciar Restablecimiento CNXS" },
  ];
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <img
          src="/LogoBlanco.png"
          alt="CONEXSIS — Conexión y Gestión de Activos S.A.S. E.S.P."
          className="navbar-logo"
        />
        <nav className="navbar-nav">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`nav-tab ${pantalla === t.id ? "active" : ""} ${t.id === 3 ? "nav-tab--cta" : ""}`}
              onClick={() => setPantalla(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function HeroSection({ eyebrow, title, desc, bgImage, overlayColor, bgPosition, children }) {
  return (
    <section className="hero">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="hero-bg-img"
          style={{ objectPosition: bgPosition || "center 38%" }}
          draggable={false}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div
        className="hero-overlay"
        style={overlayColor ? { background: overlayColor } : {}}
      />
      <div className="hero-content">
        <span className="hero-eyebrow">{eyebrow}</span>
        <h2 className="hero-title">{title}</h2>
        <p className="hero-desc">{desc}</p>
        {children}
      </div>
    </section>
  );
}

// Overlay azul royal de la marca (Banner azul_)
const OVERLAY_BLUE =
  "linear-gradient(90deg, rgba(31,40,176,0.88) 0%, rgba(31,40,176,0.72) 35%, rgba(31,40,176,0.38) 60%, rgba(20,28,140,0.08) 100%)";

const OVERLAY_DARK =
  "linear-gradient(90deg, rgba(10,15,80,0.92) 0%, rgba(10,15,80,0.80) 38%, rgba(10,15,80,0.50) 62%, rgba(10,15,80,0.12) 100%)";

const OVERLAY_CRISP =
  "linear-gradient(90deg, rgba(13,18,84,0.82) 0%, rgba(13,18,84,0.60) 32%, rgba(13,18,84,0.22) 58%, rgba(13,18,84,0.04) 100%)";

// ─── PANTALLA 1 ───────────────────────────────────────────────────────────────
function Pantalla1() {
  const [abierta, setAbierta] = useState("s1");
  return (
    <div className="pantalla">
      <HeroSection
        eyebrow="Marco Normativo · SIN"
        title="Regulación Aplicable al Restablecimiento"
        desc="Normatividad vigente CREG y Código de Redes para agentes transmisores del Sistema Interconectado Nacional."
        bgImage="/Imagen3.png"
        overlayColor={OVERLAY_BLUE}
      >
        <div className="hero-stats">
          {[
            { val: "3",    lab: "Resoluciones CREG" },
            { val: "5.4",  lab: "Numeral Código de Redes" },
            { val: "CND",  lab: "Ente coordinador" },
          ].map((s) => (
            <div key={s.lab} className="hero-stat">
              <span className="stat-val">{s.val}</span>
              <span className="stat-lab">{s.lab}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      <div className="content-wrap">
        <div className="accordion-list">
          {regulacion.secciones.map((sec) => (
            <div key={sec.id} className={`accordion-item ${abierta === sec.id ? "open" : ""}`}>
              <button
                className="accordion-trigger"
                onClick={() => setAbierta(abierta === sec.id ? null : sec.id)}
              >
                <div className="accordion-left">
                  <span className="acc-badge">{sec.badge}</span>
                  <span className="acc-title">{sec.titulo}</span>
                </div>
                <span className={`acc-chevron ${abierta === sec.id ? "up" : ""}`}>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </span>
              </button>
              {abierta === sec.id && (
                <div className="accordion-body">
                  {sec.descripcion && <p className="acc-desc">{sec.descripcion}</p>}
                  {sec.bloques.length > 0 && (
                    <div className="bloques-grid">
                      {sec.bloques.map((b, i) => (
                        <div key={i} className="bloque-card">
                          <div className="bloque-head">
                            <span className="bloque-icon">{b.icon}</span>
                            <h4 className="bloque-title">{b.titulo}</h4>
                          </div>
                          <ul className="bloque-list">
                            {b.items.map((item, j) => <li key={j}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PANTALLA 2 ───────────────────────────────────────────────────────────────
function Pantalla2() {
  return (
    <div className="pantalla">
      <HeroSection
        eyebrow="Subestación TEBSA 220/110 kV"
        title="Generalidades del Restablecimiento"
        desc="Premisas obligatorias, secuencia operativa típica y claves para el restablecimiento seguro y coordinado."
        bgImage="/Imagen2.png"
        overlayColor={OVERLAY_BLUE}
      >
        <div className="hero-stats">
          {[
            { val: "220/110", lab: "Tensión kV" },
            { val: "5",       lab: "Etapas operativas" },
            { val: "4",       lab: "Claves críticas" },
          ].map((s) => (
            <div key={s.lab} className="hero-stat">
              <span className="stat-val">{s.val}</span>
              <span className="stat-lab">{s.lab}</span>
            </div>
          ))}
        </div>
      </HeroSection>

      <div className="content-wrap">
        <div className="gen-objetivo">
          <div className="gen-obj-icon">⚡</div>
          <div>
            <h3 className="gen-section-title">Objetivo</h3>
            <p>{generalidades.objetivo}</p>
          </div>
        </div>

        <div className="gen-two-col">
          <div className="gen-card">
            <h3 className="gen-card-title">
              <span className="card-title-dot blue" />
              Premisas Obligatorias
            </h3>
            <ol className="premisas-ol">
              {generalidades.premisas.map((p, i) => (
                <li key={i}>
                  <span className="premisa-num">{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="gen-card gen-card--amber">
            <h3 className="gen-card-title">
              <span className="card-title-dot amber" />
              Claves Operativas
            </h3>
            <div className="claves-stack">
              {generalidades.claves.map((c, i) => (
                <div key={i} className="clave-row">
                  <span className="clave-alert">!</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gen-secuencia-wrap">
          <h3 className="gen-section-title centered">Secuencia Operativa Típica</h3>
          <div className="secuencia-flow">
            {generalidades.secuencia.map((p, i) => (
              <div key={i} className="secuencia-item">
                <div className="seq-circle">{p.num}</div>
                <p className="seq-label">{p.label}</p>
                {i < generalidades.secuencia.length - 1 && (
                  <div className="seq-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PANTALLA 3 ───────────────────────────────────────────────────────────────
function Pantalla3() {
  const [iniciado, setIniciado]     = useState(false);
  const [checks, setChecks]         = useState({});
  const [tiempos, setTiempos]       = useState({});
  const [obs, setObs]               = useState({});
  const [normChecks, setNormChecks] = useState({});

  const totalItems = fases.reduce(
    (acc, f) => acc + f.pasos.reduce((a, p) => a + p.items.length, 0), 0
  );
  const doneItems = Object.values(checks).filter(Boolean).length;
  const pct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  const toggleCheck = (key) => setChecks((p) => ({ ...p, [key]: !p[key] }));
  const toggleNorm  = (key) => setNormChecks((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="pantalla">
      <HeroSection
        eyebrow="Hoja de Ruta · CREG · CNO · RETIE"
        title="Guía de Restablecimiento — TEBSA 220/110 kV"
        desc="Cuestionario operativo paso a paso basado en normatividad vigente. Chulée cada acción a medida que la ejecuta."
        bgImage="/ImagenTEBSA.png"
        overlayColor={OVERLAY_CRISP}
        bgPosition="center 40%"
      >
        {!iniciado && (
          <button className="btn-iniciar" onClick={() => setIniciado(true)}>
            <span className="btn-play">▶</span> Iniciar Restablecimiento
          </button>
        )}
      </HeroSection>

      {iniciado && (
        <div className="content-wrap cuestionario-wrap">
          {/* Progress */}
          <div className="progress-card">
            <div className="progress-header">
              <div>
                <p className="progress-label">Progreso general del restablecimiento</p>
                <p className="progress-sub">{doneItems} de {totalItems} acciones completadas</p>
              </div>
              <div className="progress-pct-circle">
                <svg viewBox="0 0 36 36" width="64" height="64">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e8edf5" strokeWidth="3.5"/>
                  <circle cx="18" cy="18" r="15.9" fill="none"
                    stroke="#1f28b0" strokeWidth="3.5"
                    strokeDasharray={`${pct} ${100 - pct}`}
                    strokeDashoffset="25"
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                  />
                </svg>
                <span className="pct-label">{pct}%</span>
              </div>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {/* Normativa */}
          <div className="norm-card">
            <h4 className="norm-title">Normativa de referencia</h4>
            <div className="norm-chips">
              {normativaRef.map((n, i) => (
                <label key={i} className={`norm-chip ${normChecks[i] ? "checked" : ""}`}>
                  <input type="checkbox" checked={!!normChecks[i]} onChange={() => toggleNorm(i)} />
                  <span className="norm-check-icon">{normChecks[i] ? "✓" : "○"}</span>
                  <span>{n}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fases */}
          {fases.map((fase) => (
            <div key={fase.id} className={`fase-block fase--${fase.color}`}>
              <div className="fase-header">
                <div className={`fase-badge fase-badge--${fase.color}`} />
                <h3 className="fase-titulo">{fase.titulo}</h3>
              </div>
              {fase.pasos.map((paso) => (
                <div key={paso.id} className="paso-wrap">
                  <h4 className="paso-titulo">{paso.titulo}</h4>
                  <div className="paso-table">
                    <div className="table-head">
                      <span>Acción</span>
                      <span className="col-time">Hora</span>
                      <span className="col-obs">Observaciones</span>
                    </div>
                    {paso.items.map((item, idx) => {
                      const key = `${paso.id}_${idx}`;
                      return (
                        <div key={key} className={`table-row ${checks[key] ? "done" : ""}`}>
                          <label className="row-check">
                            <span
                              className={`custom-check ${checks[key] ? "checked" : ""}`}
                              onClick={() => toggleCheck(key)}
                            >
                              {checks[key] ? "✓" : ""}
                            </span>
                            <span className="row-text">{item}</span>
                          </label>
                          <input type="text" className="row-input col-time" placeholder="HH:MM"
                            value={tiempos[key] || ""}
                            onChange={(e) => setTiempos((p) => ({ ...p, [key]: e.target.value }))} />
                          <input type="text" className="row-input col-obs" placeholder="Observación..."
                            value={obs[key] || ""}
                            onChange={(e) => setObs((p) => ({ ...p, [key]: e.target.value }))} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="reset-row">
            <button className="btn-reset" onClick={() => {
              setIniciado(false);
              setChecks({}); setTiempos({}); setObs({}); setNormChecks({});
            }}>
              Reiniciar restablecimiento
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [pantalla, setPantalla] = useState(1);
  return (
    <>
      <NavBar pantalla={pantalla} setPantalla={setPantalla} />
      <main>
        {pantalla === 1 && <Pantalla1 />}
        {pantalla === 2 && <Pantalla2 />}
        {pantalla === 3 && <Pantalla3 />}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/LogoBlanco.png" alt="CONEXSIS" className="footer-logo" />
          </div>
          <div className="footer-cols">
            <div>
              <h5>Normativa</h5>
              <p>CREG 025 de 1995</p>
              <p>CREG 080 de 1999</p>
              <p>CNO 1784 de 2023</p>
              <p>RETIE – Res. 40117/2024</p>
            </div>
            <div>
              <h5>Contacto</h5>
              <p>Carrera 24 #1A-24 Piso 16 Edificio BC</p>
              <p>Puerto Colombia — Atlántico, Colombia</p>
              <p>conexsis@conexsis.com.co</p>
            </div>
            <div>
              <h5>Accesos</h5>
              <p>Resolución CREG 501 024 de 2025</p>
              <p>Política de privacidad · Habeas Data</p>
              <p>Formulario de transparencia</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2026 Conexsis — Conexión y Gestión de Activos S.A.S. E.S.P.</span>
          <span>Sistema Interconectado Nacional · Colombia</span>
        </div>
      </footer>
    </>
  );
}
